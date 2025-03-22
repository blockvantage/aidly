// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Test.sol";
import "../src/AidPool.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockUSDC is ERC20 {
    constructor() ERC20("USD Coin", "USDC") {
        _mint(msg.sender, 1000000 * 10**6); // 1M USDC
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }
}

contract AidPoolTest is Test {
    AidPool public aidPool;
    MockUSDC public usdc;
    address public admin;
    address public donor;
    address public recipient;

    function setUp() public {
        admin = address(this);
        donor = makeAddr("donor");
        recipient = makeAddr("recipient");

        // Deploy mock USDC and AidPool
        usdc = new MockUSDC();
        aidPool = new AidPool(address(usdc));

        // Give donor some USDC
        usdc.transfer(donor, 10000 * 10**6); // 10k USDC
    }

    function test_Donate() public {
        uint256 amount = 1000 * 10**6; // 1k USDC
        AidPool.Category category = AidPool.Category.FOOD;

        // Approve and donate as donor
        vm.startPrank(donor);
        usdc.approve(address(aidPool), amount);
        aidPool.donate(category, amount);
        vm.stopPrank();

        // Check pool balance
        (uint256 balance, uint256 totalDonated, uint256 totalReleased) = aidPool.getPoolInfo(category);
        assertEq(balance, amount);
        assertEq(totalDonated, amount);
        assertEq(totalReleased, 0);
    }

    function test_ReleaseAid() public {
        uint256 donationAmount = 1000 * 10**6; // 1k USDC
        uint256 releaseAmount = 500 * 10**6; // 500 USDC
        AidPool.Category category = AidPool.Category.FOOD;

        // Donate first
        vm.startPrank(donor);
        usdc.approve(address(aidPool), donationAmount);
        aidPool.donate(category, donationAmount);
        vm.stopPrank();

        // Release aid
        aidPool.releaseAid(recipient, category, releaseAmount);

        // Check balances
        assertEq(usdc.balanceOf(recipient), releaseAmount);
        (uint256 balance, uint256 totalDonated, uint256 totalReleased) = aidPool.getPoolInfo(category);
        assertEq(balance, donationAmount - releaseAmount);
        assertEq(totalDonated, donationAmount);
        assertEq(totalReleased, releaseAmount);
    }

    function test_ReleaseAid_InsufficientBalance() public {
        uint256 donationAmount = 1000 * 10**6; // 1k USDC
        uint256 releaseAmount = 2000 * 10**6; // 2k USDC
        AidPool.Category category = AidPool.Category.FOOD;

        // Donate first
        vm.startPrank(donor);
        usdc.approve(address(aidPool), donationAmount);
        aidPool.donate(category, donationAmount);
        vm.stopPrank();

        // Try to release more than available
        vm.expectRevert("Insufficient pool balance");
        aidPool.releaseAid(recipient, category, releaseAmount);
    }

    function test_OnlyAdminCanRelease() public {
        uint256 amount = 1000 * 10**6; // 1k USDC
        AidPool.Category category = AidPool.Category.FOOD;

        // Try to release as non-admin
        vm.startPrank(donor);
        vm.expectRevert();
        aidPool.releaseAid(recipient, category, amount);
        vm.stopPrank();
    }
}
