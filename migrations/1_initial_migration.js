// contract
const MyNFTs = artifacts.require("MyNFTs");

// makeAbi
const { makeAbi } = require("../utils/makeABI");

module.exports = async function (deployer) {
  await deployer.deploy(MyNFTs);
  const Contract = await MyNFTs.deployed();

  makeAbi("MyNFTs", Contract.address);
};
