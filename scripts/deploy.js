const { ethers } = require("hardhat");

/**
 * Deploys a new contract on ethereum's blockchain. To execute, run "npx hardhat run scripts/deploy.js --network ropsten"
 */
async function deployContract() {
  try {
    const contractFactory = await ethers.getContractFactory("NewNFT");
    const myNftContract = await contractFactory.deploy();
    console.log("Contract deployed to address:", myNftContract.address);
  } catch ( err ) {
    throw new Error("Contract failed to deploy: " + err);
  } finally {
    console.log("Deploy process completed.");
  }
}
 
 deployContract();