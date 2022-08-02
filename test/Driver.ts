const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require('hardhat');
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DriverFactory, Driver } from "../typechain-types";


let Driver: Driver;
let driverOne: SignerWithAddress;
let driverTwo: SignerWithAddress;
let driverThree: SignerWithAddress;


describe("main testing of driver", function () {
  console.log('here again')
  describe("factory contract creates new driver", async function(){
    // console.log('helloooooooooooooooooo')
    [driverOne, driverTwo, driverThree] = await ethers.getSigners();
    const driverfactory = await ethers.getContractFactory("DriverFactory", driverOne) as DriverFactory;
    console.log('driverFactory>>>>>>>>>>>>>>>>>>>', driverfactory)
    // Driver = await driverfactory.deploy()

  });
});
