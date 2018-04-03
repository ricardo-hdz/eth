pragma solidity ^0.4.0;

contract BasicStorage{
	uint storedData;

	event SetEvent(
		address indexed _from,
		uint _x
	);
	
	function set(uint x) public {
		storedData = x;
		emit SetEvent(msg.sender, x);
	}

	function get() public constant returns (uint) {
		return storedData;
	}
}