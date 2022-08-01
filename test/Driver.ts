const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require('hardhat');
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { DriverFactory } from "../typechain-types";


let Driverfactory: DriverFactory;

describe("main testing of driver", function () {
  describe("factory contract creates new driver", function(){
    
  });

});
