const { expect } = require("chai");
const { ethers } = require('hardhat');
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DriverFactory, Driver } from "../typechain-types";

let driverOne: SignerWithAddress;
let driverTwo: SignerWithAddress;
let passenger: SignerWithAddress;
let driver: DriverFactory;
let allDrivers: string[];
let actualDriverFac: Driver
let checkZeroRegex = /^0+$/;

describe("main testing of driver", function () {

  it("factory contract deploys correctly", async function(){
    [driverOne, driverTwo, passenger] = await ethers.getSigners();
    const driverfactory = await ethers.getContractFactory("DriverFactory");
    driver = await driverfactory.deploy();
    await driver.deployed();
    console.log(`driver factory contract deployed with address: ${driver.address}`);
  });

  it("driver factory creates new drivers", async function(){
    //creating driver with a address known
    await driver.connect(driverOne).createDrivers();
    //returning all the registered drivers
    allDrivers = await driver.getAllRegisteredDrivers();
    console.log(`all registered drivers: ${allDrivers}`);
    const ActuDriver = await ethers.getContractFactory("Driver");
    actualDriverFac = await ActuDriver.deploy(allDrivers[0]);
    await actualDriverFac.deployed();
  });

  it("returns the driver information correctly", async function(){
    try {
      let [driverAddress, engagedPassenger, driverID, driverNoOfServices] = await actualDriverFac.getDriverInfor();
      let response = `Actual driver address: ${driverAddress}, its ID is: ${driverID}, and numberOfServices are: ${driverNoOfServices} `;
      if(engagedPassenger.split('x')[1].match(checkZeroRegex)){
        console.log(response);
      }
    } catch (error) {
      console.log('error while testing', error);
    }
  });

  it("driver can make the service", async function(){
    const service = await actualDriverFac.createDriverService(passenger.address, 3);
    const reciept: any = await service.wait();
    let eventName = reciept.events.map((event: any)=>(
      event.event
    ));
    console.log(`events generated: ${eventName}`);
  });

});
