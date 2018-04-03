const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var contractName = 'CatContract'

const ABI = require('./' + contractName +	'.json');

let address = '0x972da58882bbee7d932f95c9bfce44777c7c899f';

const contract = web3.eth.contract(ABI).at(address);

var res = contract.doSomething.call();

console.log(web3.toAscii(res));