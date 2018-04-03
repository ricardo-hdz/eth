const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contractName = 'MinimalToken';

const contractABI = require('./' + contractName + '.json');
const contract = web3.eth.contract(contractABI);
let address = '0x80a4dd75327cacdda810a317833b8b034e4afd92';

var constractInstance = contract.at(address);
console.log(constractInstance.balanceOf(web3.eth.coinbase));