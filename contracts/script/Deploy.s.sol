// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "forge-std/Script.sol";
import "../src/AidPool.sol";

contract DeployScript is Script {
    function run() external {
        // Base Goerli USDC address
        address usdc = 0x2e9F75DF8839ff192Da27e977CD154FD1EAE03cf;
        
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        // Deploy AidPool
        AidPool aidPool = new AidPool(usdc);
        
        vm.stopBroadcast();

        console.log("AidPool deployed to:", address(aidPool));
    }
}
