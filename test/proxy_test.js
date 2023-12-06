require("dotenv").config();

const Web3 = require("web3");

const Logic1 = require("../datas/abi/logic1.json");
const Logic2 = require("../datas/abi/logic2.json");
const Proxy = require("../datas/abi/proxy.json");

const { ADDRESS, PRIVATE_KEY, RPC_URL } = process.env;

const web3 = new Web3(RPC_URL);
const address = "0xf9E245E02aCafc6d282537d8245e7894aaB53848";
const proxyContract = new web3.eth.Contract(Proxy.abi, Proxy.address);

const version1 = new web3.eth.Contract(Logic1.abi, Proxy.address);

const main = async () => {
  const logic1Count = await version1.methods.getCount().call();
  console.log("현제 logic1의 Count : ", logic1Count);

  const increaseCount = await version1.methods.increaseCount().encodeABI();
  const estimate = await version1.methods.increaseCount().estimateGas({
    from: address,
  });
  const signedTx = await web3.eth.accounts.signTransaction(
    {
      from: address,
      to: Proxy.address,
      data: increaseCount,
      gas: estimate,
    },
    PRIVATE_KEY
  );

  await web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .then((receipt) => console.log("Transaction receipt:", receipt));

  // const logic1Count2 = await version1.methods.getCount().call();
  // console.log("현제 logic1의 Count : ", logic1Count2);
};
// const increaseCount = async () => {
// const increaseCount = await proxyContract.methods.increaseCount().encodeABI();
// const estimate = await contract.methods.mintNFT(message).estimateGas({
//   from: account,
// });

// const result = await web3.eth.accounts
//   .signTransaction(
//     {
//       from: account,
//       to: ca,
//       gas: estimate,
//       gasPrice: await web3.eth.getGasPrice(),
//       data: mintNFT,
//     },
//     privateKey
//   )
//   .then(async (Tx) => {
//     await web3.eth
//       .sendSignedTransaction(Tx.rawTransaction)
//       .then((hash, err) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("성공!", hash);
//           return hash;
//         }
//       });
//   });
// };

main();
