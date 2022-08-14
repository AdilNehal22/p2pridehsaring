import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${process.env.infuraID}`,
    //   accounts: [process.env.privateKey]
    // }
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

export default config;