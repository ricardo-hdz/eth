const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const HelloWorldABI = require("./HelloWorldABI.json");
const helloWorldContract = web3.eth.contract(HelloWorldABI);
let address = '0xf20ed2d80000f32d18bcf009f7bdc8a2a535e3bd';
var helloWorldContractInstance = helloWorldContract.at(address);

const password = '';
try { 
	web3.personal.unlockAccount(web3.eth.coinbase, password); 
} catch (e) { 
	console.log(e);
	return; 
}

helloWorldContractInstance.sayHi.sendTransaction({
	from: web3.eth.coinbase
}, function(e, txHash) {
	if (e) {
		console.log('Error while sending txn - ' + e);
	} else {
		console.log('Txn sent. Hash: ' + txHash);
	}

});