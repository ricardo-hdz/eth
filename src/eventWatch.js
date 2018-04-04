const solc = require('solc');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const BasicStorageABI = require("./basicStorage.json");
const bsContract = web3.eth.contract(BasicStorageABI);
let address = '0x381f1fa105ad597e825ea301bd649c6407042489';
var bsContractInstance = bsContract.at(address);

var myEvent = bsContractInstance.SetEvent({}, {
	fromBlock: 0,
	toBlock: 'latest'
});

myEvent.watch(function(err, result) {
	if (err) {
		console.log('Error while watching ' + err);
	} else {
		console.log(result);
		console.log(result.args._x.c);
	}
});