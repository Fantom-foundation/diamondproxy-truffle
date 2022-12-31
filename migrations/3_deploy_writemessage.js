const WriteMessage = artifacts.require("WriteMessage");

module.exports = async (deployer) => {
    await deployer.deploy(WriteMessage);
    const writeMessage = await WriteMessage.deployed();
    console.log("WriteMessage deployed to: ", writeMessage.address);
};