const DiamondProxy = artifacts.require("DiamondProxy");

module.exports = async (deployer) => {
    await deployer.deploy(DiamondProxy);
    const diamondProxy = await DiamondProxy.deployed();
    console.log("DiamondProxy deployed to: ", diamondProxy.address);
}