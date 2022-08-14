// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Atoken777 is ERC777 {

  string public constant tokenName = "TokenFare";
  string public constant tokenSymbol = "P2PRS";
  uint256 public constant initialTokenSupply = 2500000;
  uint256 public constant firstEqualTranfer = 500;

  mapping(address => bytes) public transferInformation;

  enum TranferState {
    FIRST_REGISTRATION,
    TRANFERED_ON_FIRST_REG
  }

  TranferState riderDriverDefaultTransfer = TranferState.FIRST_REGISTRATION;

  constructor(address[] memory defaultOperators)
    ERC777(tokenName, tokenSymbol, defaultOperators){
      _mint(address(this), initialTokenSupply, "transfered to contract", "");  
    }

  function sendToDriverUponReg(address _driver, bytes userData) public {
    require(riderDriverDefaultTransfer == TranferState.FIRST_REGISTRATION, "Free tokens will be given only on first registration");
    _send(address(this), _driver, firstEqualTranfer, userData, "", requireReceptionAck);

  }

  function sendToRiderUponReg(address _rider) public {

  }
  
} 