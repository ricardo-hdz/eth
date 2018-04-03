pragma solidity ^0.4.0;

/**
 * The contractName contract does this and that...
 */
contract AnimalContract {

	function doSomething() public pure returns (bytes32);
}

contract CatContract is AnimalContract {
	function doSomething() public returns (bytes32) {
		return 'eat, sleep, meows';
	}
}

contract DogContract is AnimalContract {
	function doSomething() public returns (bytes32) {
		return 'eat, sleep, woofs';
	}
}