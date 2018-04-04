const fs = require('fs');
const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contractName = 'Mint';
var outputContractName = ':' + 'Mint';
var abiFilename = 'Mint';
const input = fs.readFileSync( contractName + '.sol');
const output = solc.compile({
	sources: {
		'': input.toString()
	}
}, 1);

if (output.errors) { 
	console.log('Compiling failed with errors:' + output.errors);
	process.exit();
}

const bytecode = output.contracts[outputContractName].bytecode;

// ABI - application binary interface
const abi = output.contracts[outputContractName].interface;

fs.writeFile('./' + abiFilename + '.json', abi, function(err) {
	if(err) {
		return console.log(err);
	}
	console.log("ABI Saved");
});

// Deploy
const contract = web3.eth.contract(JSON.parse(abi));

// Finally deploy the contract with a transaction… 
var gasPrice = web3.eth.gasPrice;
var estimateGas = web3.eth.estimateGas({
	data: '0x' + bytecode
});

const password = '';
try { 
	web3.personal.unlockAccount(web3.eth.coinbase, password); 
} catch (e) { 
	console.log(e);
}


console.log("Deploying the contract");
const contractInstance = contract.new(
	{
		data: '0x' + bytecode,
		from: web3.eth.coinbase
		// gasPrice: gasPrice + 1,
		// gas: estimateGas + 1000000
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