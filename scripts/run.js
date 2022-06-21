const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
        ["Wukong", "Neza", "Pikachu"],       // Names
        ["https://i.imgur.com/mOeGXrE.jpeg", // Images
        "https://i.imgur.com/U3ECPSq.jpeg", 
        "https://i.imgur.com/WMB6g9u.png"],
        [100, 150, 220],                    // HP values
        [100, 90, 70] 
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    let returnedTokenUri = await gameContract.tokenURI(1);
    console.log("Token UIR:", returnedTokenUri);
};

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