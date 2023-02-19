const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // URL from where we can extract the metadata for an Afro-Art NFT
  const metadataURL = "ipfs://QmVAWZ6h5BrnJdeoz9os1a3FSJavLJCs39Sq9qz23tfwGW";
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so artContract here is a factory for instances of our Art contract.
  */
  const artContract = await ethers.getContractFactory("Art");

  // deploy the contract
  const deployedArtContract = await artContract.deploy(metadataURL);

  await deployedArtContract.deployed();

  // print the address of the deployed contract
  console.log("Afro-Art Contract Address:", deployedArtContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });