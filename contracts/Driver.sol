// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract DriverFactory {

  address[] public deployedDrivers;

  function createDrivers() public {
    Driver createNewDriver =  new Driver(msg.sender);
    deployedDrivers.push(address(createNewDriver));
  }

  function getAllRegisteredDrivers() public view returns(address[] memory) {
    return deployedDrivers;
  }

}

contract Driver {

  using SafeMath for uint256;

  //struct for driver definition
  struct Infodriver{
    address engagedRiderAddress;
    address driverAddress;
    bytes32 driverID;
    uint256 numberOfServices;
  }

  enum DriverState {
    RIDE_EMPTY,
    IN_SERVICE,
    DROPPED_PASSENGER,
    GOT_PAYMENT
  }

  event inService(address indexed _passenger, bytes32 indexed driverID, uint256 numOfTokensDecided, DriverState state);
  event serviceEnded(address indexed _passenger, bytes32 indexed driverID, uint256 numOfTokensDecided, DriverState state);
  DriverState driverDefaultState = DriverState.RIDE_EMPTY;
  mapping(address => bytes32) public IdToDriver;

  //to access the struct data inside a constructor
  //declaring a new driver/info
  Infodriver private driver;

  constructor(address _newDriver){
    driver.driverAddress = _newDriver;
    driver.driverID = keccak256(abi.encodePacked((block.timestamp)**3, _newDriver));
  }

  function createDriverService(address _passenger, uint256 _numOfTokensDecided) public {
    require(DriverState.RIDE_EMPTY == driverDefaultState, "Driver must clear all the services before starting any new one");    
    driver.engagedRiderAddress = _passenger;
    driver.numberOfServices = driver.numberOfServices.add(1);
    driverDefaultState = DriverState.IN_SERVICE;
    emit inService(_passenger, driver.driverID, _numOfTokensDecided, driverDefaultState);
  }

  function getDriverInfor() public view returns (address, address, bytes32, uint256){
    return(driver.driverAddress, driver.engagedRiderAddress, driver.driverID, driver.numberOfServices);
  }

  function finishedService(bool _isFinished, address _passenger) public {

  }

}



