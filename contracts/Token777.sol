// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Atoken777 is ERC777 {

  using SafeMath for uint256;

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

  function sendToDriverRiderUponReg(address _assignHere, bytes memory userData) public {
    require(riderDriverDefaultTransfer == TranferState.FIRST_REGISTRATION, "Free tokens will be given only on first registration");    
    transferInformation[_assignHere] = userData;
    riderDriverDefaultTransfer = TranferState.TRANFERED_ON_FIRST_REG;
    _send(address(this), _assignHere, firstEqualTranfer, userData, "", true);
  }

} 