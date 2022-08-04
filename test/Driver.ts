const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require('hardhat');
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DriverFactory } from "../typechain-types";

let driverOne: SignerWithAddress;
let driverTwo: SignerWithAddress;
let driverThree: SignerWithAddress;
let driver: DriverFactory;

describe("main testing of driver", function () {

  it("factory contract deploys correctly", async function(){
    [driverOne, driverTwo, driverThree] = await ethers.getSigners();
    const driverfactory = await ethers.getContractFactory("DriverFactory");
    driver = await driverfactory.deploy();
    await driver.deployed();
    console.log(`driver factory contract deployed with address: ${driver.address}`);
  });

  it("driver factory creates new drivers", async function(){
    //creating driver with a address known
    await driver.connect(driverOne).createDrivers();
    //returning all the registered drivers
    const allDrivers: string[] = await driver.getAllRegisteredDrivers();
    console.log(`all registered drivers: ${allDrivers}`);
  });

});
