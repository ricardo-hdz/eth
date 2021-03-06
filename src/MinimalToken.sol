pragma solidity ^0.4.0;

contract MinimalToken {
	mapping (address => uint256) public balanceOf;
	
	function MinimalToken (uint256 initialSupply) public {
		balanceOf[msg.sender] = initialSupply;
	}	

	function transfer(address _to, uint256 _value) public {
		// Check for available funds
		require (balanceOf[msg.sender] >= _value);
		// Check for overflows
		require (balanceOf[_to] + _value >= balanceOf[_to]);
		balanceOf[msg.sender] -= _value;
		balanceOf[_to] += _value;
	}
}