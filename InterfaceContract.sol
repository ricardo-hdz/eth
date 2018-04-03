pragma solidity ^0.4.0;


interface AnimalContract {
	function doSomething() public pure returns (bytes32);
	function isAlive() public pure returns (bool);
}

contract CatContract is AnimalContract {
	function doSomething() public returns (bytes32) {
		return 'eat, sleep, meows';
	}
	function isAlive() public pure returns (bool) {
		return true;
	}
}

contract DogContract is AnimalContract {
	function doSomething() public returns (bytes32) {
		return 'eat, sleep, woofs';
	}
	function isAlive() public pure returns (bool) {
		return true;
	}
}