
require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");
dotenv.config({path: './.env'});
const { URL, KEY } = process.env;

module.exports = {
  solidity: "0.8.10",
  networks: {
    mumbai: {
      url: URL,
      accounts: [KEY]
    }
  }
};