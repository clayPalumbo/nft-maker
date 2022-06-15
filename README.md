# Mint Your NFT

You can see my NFT successfully ran here <https://ropsten.etherscan.io/tx/0xada0b6a5ed7e5d6bb59a18409413d9ca439e36df04a19ceefc65f14ec5f886a4>

- Compare the contractAddress in `scripts/mint-nft.js` to the one on etherscan to confirm.

## Setup

- Create a `.env` file and define your `API_URL`, `PRIVATE_KEY`, and `RECIEVER_KEY`
  - `API_URL`: I used Alchemy <https://www.alchemy.com> and setup an account to define this
  - `PRIVATE_KEY`: Your wallet private key.
  - `RECIEVER_KEY`: Who you want to recieve your nft.

- Run `npm i` to install packages

- I already have a contract deployed but if you would like to deploy one of your own run `npx hardhat run scripts/deploy.js --network ropsten` and update `contractAddress` in `scripts/mint-nft.js` with the new hash.

- Mint your NFT using `node scripts/mint-nft.js https://your-nft-metadata-url`

Hope this helps and please reach out if you have questions!
