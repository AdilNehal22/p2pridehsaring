const hre = require("hardhat");

async function main() {
  const Token777 = await hre.ethers.getContractFactory("Atoken777");
  const token = await Token777.deploy(unlockTime, { value: lockedAmount });

  await lock.deployed();

  console.log("Lock with 1 ETH deployed to:", lock.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
