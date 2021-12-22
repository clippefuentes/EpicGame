const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["Captin Amurika", "Spadah man", "Irun Man"],       // Names
    ["https://pics.awwmemes.com/m-the-captain-now-lmfaoooo-55269414.png", // Images
    "https://www.pngitem.com/pimgs/m/5-50871_dank-spiderman-hd-png-download.png", 
    "https://64.media.tumblr.com/1a7576b72e6ae2bf0b883a19729e18ad/tumblr_ortzuiAZRT1w7964eo1_640.png"],
    [500, 450, 300],                    // HP values
    [200, 300, 500]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  // We only have three characters.
  // an NFT w/ the character at index 2 of our array.
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  // Get the value of the NFT's URI.
  let returnedTokenUri = await gameContract.tokenURI(1);
  console.log("Token URI:", returnedTokenUri);};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();