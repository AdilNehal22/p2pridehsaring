const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require('hardhat');
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DriverFactory, Driver } from "../typechain-types";


let driverDep: Driver;
// let driverfactory: DriverFactory;
let driverOne: SignerWithAddress;
let driverTwo: SignerWithAddress;
let driverThree: SignerWithAddress;


describe("main testing of driver", function () {
  it("factory contract creates new driver", async function(){
    [driverOne, driverTwo, driverThree] = await ethers.getSigners();
    const driverfactory = await ethers.getContractFactory("DriverFactory");
    driverDep = await driverfactory.deploy()
    console.log(typeof(driverfactory))
  });
});
