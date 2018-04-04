
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

console.log('Reading contract...');
let address = '0xf20ed2d80000f32d18bcf009f7bdc8a2a535e3bd';
const deployedHelloWorldContractInstance = web3.eth.getCode(address)
console.log('Contract Code: ' + deployedHelloWorldContractInstance);