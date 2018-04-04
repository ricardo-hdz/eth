console.log('ETH');

var Web3 = require('web3');
// var version = Web3.version.api;
// console.log(version);
var host = 'http://localhost:8545';
var web3 = new Web3(new Web3.providers.HttpProvider(host));
console.log(web3.isConnected());
console.log(web3.eth.accounts);

var pass = '';
web3.personal.unlockAccount(web3.eth.coinbase, pass);
web3.eth.sendTransaction(
	{
		from: web3.eth.accounts[1],
		to: web3.eth.accounts[0],
		value: web3.toWei(1, 'ether')
	},
	function(err, hash) {
		if (!err) {
			console.log(hash);
		}
	}
);
