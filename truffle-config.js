require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { ADDRESS, PRIVATE_KEY, RPC_URL } = process.env;

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
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
      version: "pragma",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
