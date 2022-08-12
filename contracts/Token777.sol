// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Atoken777 is ERC777 {

  string public constant tokenName = "TokenFare";
  string public constant tokenSymbol = "P2PRS";
  uint256 public constant initialTokenSupply = 2500;

  mapping(address => uint256) public holderBalances;

  constructor(bytes memory userData ,address toAssignHere, address[] memory defaultOperators)
    ERC777(tokenName, tokenSymbol, defaultOperators){
      _mint(toAssignHere, initialTokenSupply, userData, "");
  }
  
} 