# IPFS-Practical

Now its time for you to launch your own NFT collection and store its metadata on IPFS

## Requirements

- There should only exist 10 LearnWeb3 Punk NFT's and each one of them should be unique.
- User's should be able to mint only 1 NFT with one transaction.
- The metadata for the NFT's should be stored on IPFS
- There should be a website for your NFT Collection.

Lets start building 🚀

## Prerequisites

- You can have completed the [IPFS Theory tutorial](https://github.com/LearnWeb3DAO/IPFS-Theory)

## Build

To build the smart contract we would be using [Hardhat](https://hardhat.org/). Hardhat is an Ethereum development environment and framework designed for full stack development in Solidity. In simple words you can write your smart contract, deploy them, run tests, and debug your code.

- To setup a Hardhat project, Open up a terminal and execute these commands

  ```bash
  mkdir hardhat-tutorial
  cd hardhat-tutorial
  npm init --yes
  npm install --save-dev hardhat
  ```

- In the same directory where you installed Hardhat run:

  ```bash
  npx hardhat
  ```

  - Select `Create a basic sample project`
  - Press enter for the already specified `Hardhat Project root`
  - Press enter for the question on if you want to add a `.gitignore`
  - Press enter for `Do you want to install this sample project's dependencies with npm (@nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers)?`

Now you have a hardhat project ready to go!

If you are not on mac, please do this extra step and install these libraries as well :)

```bash
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

and press `enter` for all the questions.

- In the same terminal now install `@openzeppelin/contracts` as we would be importing [Openzeppelin's ERC721Enumerable Contract](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol) in our `CryptoDevs` contract.

  ```bash
  npm install @openzeppelin/contracts
  ```
