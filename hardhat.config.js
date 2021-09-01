require("dotenv").config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-web3");
require("hardhat-deploy");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat:{
      live: false,
      saveDeployments: true,
      tags:["test",],
      // Uncomment these lines to use mainnet fork
      forking: {
        url: process.env.MORALIS_SRV,
        blockNumber: 18346862,
      },
    },
    mumbai: {
      live: true,
      saveDeployments: true,
      tags:["tesnet"],
      url: process.env.MORALIS_SRV,
      accounts: [process.env.MAINNET_PRIVKEY],
    }
  },
  solidity: {
    compilers: [
      // {
      //   version: "0.6.7",
      //   settings: {
      //     optimizer: {
      //       enabled: true,
      //       runs: 200
      //     }
      //   } 
      // },
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        } 
      }
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API,
  },
  namedAccounts: {
    deployer: {
      default: 0, // default network
      "mumbai": "0x5e4634Ad0897Ec4895A9b10748a11CB6f02007ba", // mumbai network, from env.MAINNET_PRIV
    },
    admin: {
      default: 1,
    },
  },
  paths:{
    sources:"./contracts",
    tests:"./test",
    cache:"./cache",
    artifacts:"./artifacts",
    deploy: 'scripts',
    deployments: 'deployments',
    imports: 'imports'
  },
  mocha: {
    timeout: 240000,
  },
  gasReporter: {
    currency: 'MATIC',
    gasPrice:5
  },
};
