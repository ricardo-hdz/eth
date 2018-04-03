const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const BasicStorageABI = require("./basicStorage.json");
const bsContract = web3.eth.contract(BasicStorageABI);
let address = '0x381f1fa105ad597e825ea301bd649c6407042489';
var bsContractInstance = bsContract.at(address);

// Estimates txn gas for set transaction
var estimatedTransactionGas = bsContractInstance.set.estimateGas(220);
console.log(estimatedTransactionGas);

var gasPrice = web3.eth.gasPrice;
console.log('Current gas price ' + gasPrice.toString(10));

const password = '';
try { 
	web3.personal.unlockAccount(web3.eth.coinbase, password); 
} catch (e) { 
	console.log(e);
	return; 
}

// Set
bsContractInstance.set.sendTransaction(220, {
	from: web3.eth.coinbase,
	gas: estimatedTransactionGas,
	gasPrice: gasPrice
}, function(e, txHash) {
	if (e) {
		console.log('Error while sending txn - ' + e);
	} else {
		console.log('Txn sent. Hash: ' + txHash);
	}
});

// Get
// var returner = parseInt(bsContractInstance.get.call());
// console.log(returner);