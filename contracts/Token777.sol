// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Atoken777 is ERC777 {
  
  constructor() public ERC777("TokenFare","P2PRS", new address[](0)){
    // _mint(account, amount, userData, operatorData);
  }
} 