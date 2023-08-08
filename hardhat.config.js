require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    goerli: {
      url: "https://goerli.infura.io/v3/25922df4ebba412a8d624604df25b456",
      accounts: [`0x68c6809e11b7e70684b87ef8b5c0888842f7f56592f7fe00da3b7d9af4aaba40`]
    }
  }, solidity: "0.8.19",
};
