const AppendMessage = artifacts.require("AppendMessage");

module.exports = async (deployer) => {
   
    await deployer.deploy(AppendMessage);
    const appendMessage = await AppendMessage.deployed();
    console.log("AppendMessage deployed to: ", appendMessage.address);

};