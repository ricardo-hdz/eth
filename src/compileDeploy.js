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

const HelloWorldContract = web3.eth.contract(JSON.parse(abi));

const password = '';
try { 
	web3.personal.unlockAccount(web3.eth.coinbase, password); 
} catch (e) { 
	console.log(e);
	return; 
}

// Finally deploy the contract with a transaction… 
console.log("Deploying the contract");
const helloWorldContractInstance = HelloWorldContract.new(
	{
		data: '0x' + bytecode,
		from: web3.eth.coinbase,
		gas: 1000000
	}, function(err, res) {
		if (err) {
			console.log('There were errors:' + err);
		}
		if (res.address) {
			console.log('txHash:' + res.transactionHash);
			console.log('Successfully deployed Contract with address: ' + res.address);
		}
	}
);