const VRFv2Consumer = artifacts.require("VRFv2Consumer");

let _subscriptionId = "";
let _coordinatorId = ""
let _keyHash = ""
let _overwrite = true;

module.exports = async function (deployer, _network, accounts) {

    switch (_network) {
        case "bsc": {
            _subscriptionId = "2331";
            _coordinatorId = "0xc587d9053cd1118f25F645F9E08BB98c9712A4EE";
            _keyHash = "0x114f3da0a805b6a67d6e9cd2ec746f7028f1b7376365af575cfea3550dd1aa04";
            break;
        }
        case "matic": {
            _subscriptionId = "2331";
            _coordinatorId = "0xAE975071Be8F8eE67addBC1A82488F1C24858067";
            _keyHash = "0x6e099d640cde6de9d40ac749b4b594126b0169747122711109c9985d47751f93";
            break;
        }
        case "testnet": {
            _subscriptionId = "2331";
            _coordinatorId = "0x6A2AAd07396B36Fe02a22b33cf443582f682c82f";
            _keyHash = "0xd4bb89654db74673a187bd804519e65e3f71a52bc55f11da7601a13dcf505314";
            break;
        }
        case "goerli": {
            _subscriptionId = "2331";
            _coordinatorId = "0x2Ca8E0C643bDe4C2E08ab1fA0da3401AdAD7734D";
            _keyHash = "0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15";
            break;
        }
        case "mumbai": {
            _subscriptionId = "3262";
            _coordinatorId = "0x7a1BaC17Ccc5b313516C5E16fb24f7659aA5ebed";
            _keyHash = "0x4b09e658ed251bcafeebbc69400383d49f344ace09b9576fe248bb02c003fe9f";
            break;
        }
        default: {
            _subscriptionId = "2331";
            _coordinatorId = "0xAE975071Be8F8eE67addBC1A82488F1C24858067";
            _keyHash = "0x6e099d640cde6de9d40ac749b4b594126b0169747122711109c9985d47751f93";
            break;
        }
    }

    await deployer.deploy(VRFv2Consumer, _subscriptionId, _coordinatorId, _keyHash, {overwrite: _overwrite});
};
