const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const input = fs.readFileSync('HelloWorldContract.sol');
const output = solc.compile({
	sources: {
		'': input.toString()
	}
}, 1);
const bytecode = output.contracts[':HelloWorldContract'].bytecode;

// ABI - application binary interface
const abi = output.contracts[':HelloWorldContract'].interface;
fs.writeFile('./HelloWorldABI.JSON', abi, function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("ABI Saved");
});