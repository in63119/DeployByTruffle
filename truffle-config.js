require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  networks: {
    klaytnTest: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, RPC_URL),
      network_id: 1001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  mocha: {},

  contracts_build_directory: "./datas/low",

  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
