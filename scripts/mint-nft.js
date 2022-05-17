require('dotenv').config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contract = require("../artifacts/contracts/MyNFT.sol/NewNFT.json"); 

const API_URL = process.env.API_URL;
const PUBLIC_KEY = process.env.RECIEVER_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const web3 = createAlchemyWeb3(API_URL);

// If you create a new contract update here
const contractAddress = "0x840A664c0fEE4CCDDe2B65c79a8a7354c0EF533a";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

/**
 * Run using node scripts/mint-nft "your-nft-uri-goes-here"
 * @param {string} tokenURI 
 * @param {string} reciever 
 */
async function mintNFT(tokenURI, reciever) {
  try {
    console.log("Minting NFT engaged: ", tokenURI);
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest');
    console.log("nounce created: ", nonce);
    const rawTx = {
      'from': PUBLIC_KEY,
      'to': reciever,
      'nonce': nonce,
      'gas': 500000,
      'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(rawTx, PRIVATE_KEY);

    console.log("Transaction has been signed");

    const transactionDetails = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log("Success! ", transactionDetails.transactionHash);
  } catch(err) {
    console.log("Minting failed: ", err);
  }
}

mintNFT(process.argv[2], contractAddress);
