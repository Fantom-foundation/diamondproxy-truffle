const ReadMessage = artifacts.require("ReadMessage");

module.exports = async (deployer) => {
    
    await deployer.deploy(ReadMessage);
    const readMessage = await ReadMessage.deployed();
    console.log("ReadMessage deployed to: ", readMessage.address);

};