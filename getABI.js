const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http:// localhost:8545"));
const input = fs.readFileSync('HelloWorldContract.sol');
const output = solc.compile({
	sources: {
		'': input.toString()
	}
}, 1);
console.log(output);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;

const abi = output.contracts[':HelloWorldContract'].interface;
const HelloWorldContract = web3.eth.contract(JSON.parse(abi));
console.log(HelloWorldContract.abi);