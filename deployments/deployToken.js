const hre = require("hardhat");
// const { singletons } = require('@openzeppelin/test-helpers');
const { singletons } = require('@openzeppelin/test-helpers')
require('@openzeppelin/test-helpers/configure')
const writeFile = require('../utils/writeFile');

let defaultOperators = [];

async function main() {
  //deploying the erc1820 reg
  const signers = await hre.ethers.getSigners();
  const address = signers[0].address;
  const erc1820 = await singletons.ERC1820Registry(address);

  const Token777 = await hre.ethers.getContractFactory("Atoken777");
  const token = await Token777.deploy(defaultOperators);
  await token.deployed();
  console.log("Token deployed to:", token.address);
  writeFile(token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
