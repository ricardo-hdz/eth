const fs = require('fs');
const solc = require('solc');

const inputStr = fs.readFileSync('HelloWorldContract.sol');
const output = solc.compile({
	sources: {
		'': inputStr.toString()
	}
}, 1);
console.log(output);
for (var contractName in output.contracts) {
	console.log(contractName + ':' + output.contracts[contractName].bytecode);
}