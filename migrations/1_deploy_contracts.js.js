const Logic1 = artifacts.require("Logic1");
const Logic2 = artifacts.require("Logic2");
const Proxy = artifacts.require("Proxy");

const { makeAbi } = require("../utils/makeABI");

module.exports = async function (deployer) {
  // Logic1 배포
  await deployer.deploy(Logic1);
  const logic1 = await Logic1.deployed();
  await makeAbi("logic1", logic1.address);

  // Proxy 배포, Logic1 주소를 사용
  await deployer.deploy(Proxy, logic1.address);
  const proxy = await Proxy.deployed();
  await makeAbi("proxy", proxy.address);

  // 업그레이드를 위해 Logic2 배포 (아직 Proxy에 연결하지 않음)
  await deployer.deploy(Logic2);
  const logic2 = await Logic2.deployed();
  await makeAbi("logic2", logic2.address);
};
