const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
var contractName = 'MinimalToken';

const contractABI = require('./' + contractName + '.json');
let address = '0x80a4dd75327cacdda810a317833b8b034e4afd92';

const contract = web3.eth.contract(contractABI).at(address);

var receiver = '0x00354E3BD8425a550808CFE5d3E840E015a60d5e';

var calldata = contract.transfer.getData(receiver, 1000);

var gasPrice = web3.eth.gasPrice;
var gasEstimate = web3.eth.estimateGas({
	from: web3.eth.coinbase,
	to: address,
	data: calldata
});

const password = '';

try { 
	web3.personal.unlockAccount(web3.eth.coinbase, password); 
} catch (e) { 
	console.log(e);
}

contract.transfer.sendTransaction(receiver, 1000, {
		from: web3.eth.coinbase
	},
	function(e, hash) {
		if (e) {
			console.log('Error while transferring: ' + e);
		} else {
			console.log('Txn Hash: ' + hash);
		}
	}
);