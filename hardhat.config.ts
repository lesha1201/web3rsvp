import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: process.env.STAGING_INFURA_URL,
      accounts: [`0x${process.env.STAGING_PRIVATE_KEY}`],
      gas: 2_100_000,
      gasPrice: 8_000_000_000,
    },
  },
};

export default config;
