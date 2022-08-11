// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Atoken777 is ERC777 {

  string public constant tokenName = "TokenFare";
  string public constant tokenSymbol = "P2PRS";
  uint256 public initialTokenSupply = 250000;

  constructor() public ERC777(tokenName,tokenSymbol, new address[](0)){
    // _mint(account, amount, userData, operatorData);
  }
} 