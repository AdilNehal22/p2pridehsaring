// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Driver {

  //struct for driver definition
  struct Infodriver{
    address riderAddress;
    address driverAddress;
    bytes32 driverID;
    uint256 numberOfServices;
  }

  enum driverState {
    RIDE_EMPTY,
    IN_SERVICE,
    DROPPED_PASSENGER,
    GOT_PAYMENT
  }

  event inService(address indexed _passenger, bytes32 indexed driverID, uint256 numOfTokensDecided);

  driverState constant driverDefaultState = driverState.RIDE_EMPTY;
  mapping(address => bytes32) public IdToDriver;
  //to access the struct data inside a constructor
  Infodriver private driver;

  constructor(){
    driver.driverAddress = msg.sender;
    driver.driverID = keccak256(abi.encodePacked((block.timestamp)**3, msg.sender));
  }

  // function getDriverID() public view returns (bytes32){
  //   return 
  // }
  function driverInService(address _passenger) public {
    require(driverState.RIDE_EMPTY == driverDefaultState, "Driver must clear all the services before starting any new one");
    
  }


  




}



