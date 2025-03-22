// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

/**
 * @title AidPool
 * @dev A transparent, crypto-powered aid distribution platform
 */
contract AidPool is AccessControl, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    IERC20 public immutable usdc;

    enum Category { FOOD, MEDICINE, EDUCATION, EMERGENCY }

    struct Pool {
        uint256 balance;
        uint256 totalDonated;
        uint256 totalReleased;
    }

    // Mapping from Category to Pool
    mapping(Category => Pool) public pools;

    // Events
    event Donated(address indexed donor, Category indexed category, uint256 amount);
    event AidReleased(address indexed recipient, Category indexed category, uint256 amount);
    event PoolUpdated(Category indexed category, uint256 newBalance);

    constructor(address _usdc) {
        require(_usdc != address(0), "Invalid USDC address");
        usdc = IERC20(_usdc);
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }

    /**
     * @dev Donate USDC to a specific category pool
     * @param category The aid category to donate to
     * @param amount The amount of USDC to donate
     */
    function donate(Category category, uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        
        // Transfer USDC from donor to contract
        require(usdc.transferFrom(msg.sender, address(this), amount), "Transfer failed");

        // Update pool
        pools[category].balance += amount;
        pools[category].totalDonated += amount;

        emit Donated(msg.sender, category, amount);
        emit PoolUpdated(category, pools[category].balance);
    }

    /**
     * @dev Release aid to a recipient from a specific category pool
     * @param recipient The address to receive the aid
     * @param category The category to release aid from
     * @param amount The amount of USDC to release
     */
    function releaseAid(
        address recipient,
        Category category,
        uint256 amount
    ) external nonReentrant onlyRole(ADMIN_ROLE) {
        require(recipient != address(0), "Invalid recipient");
        require(amount > 0, "Amount must be greater than 0");
        require(pools[category].balance >= amount, "Insufficient pool balance");

        // Update pool
        pools[category].balance -= amount;
        pools[category].totalReleased += amount;

        // Transfer USDC to recipient
        require(usdc.transfer(recipient, amount), "Transfer failed");

        emit AidReleased(recipient, category, amount);
        emit PoolUpdated(category, pools[category].balance);
    }

    /**
     * @dev Get pool information for a specific category
     * @param category The aid category
     * @return balance Current pool balance
     * @return totalDonated Total amount donated to this category
     * @return totalReleased Total amount released from this category
     */
    function getPoolInfo(Category category) external view returns (
        uint256 balance,
        uint256 totalDonated,
        uint256 totalReleased
    ) {
        Pool memory pool = pools[category];
        return (pool.balance, pool.totalDonated, pool.totalReleased);
    }

    /**
     * @dev Emergency withdrawal of stuck tokens by admin
     * @param token The token address to withdraw
     * @param amount The amount to withdraw
     * @param to The address to send tokens to
     */
    function emergencyWithdraw(
        IERC20 token,
        uint256 amount,
        address to
    ) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(to != address(0), "Invalid recipient");
        require(token.transfer(to, amount), "Transfer failed");
    }
}
