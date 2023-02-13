const MyToken = artifacts.require("MyToken");
const _overwrite = true;

module.exports = async function (deployer, _network, accounts) {
    await deployer.deploy(MyToken, {overwrite: _overwrite});
};