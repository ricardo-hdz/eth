pragma solidity ^0.4.0;

/**
 * The contractName contract does this and that...
 */
contract DataTypesContract {
	// Bool
	bool switcher;
	// enum
	enum RandomThings { Red, Green, Blue }
	RandomThings constant FavoriteColor = RandomThings.Red;
	// Array
	uint someNumber = [10,20,20];
	// Struct
	struct Stuff {
		address addr;
		uint[] someNumbers;
	}
	//Mapping
	Mapping(uin => uint[]) luckyNumbers; 


	Stuff myStuff;

	function DataTypesContract () public {
		myStuff.addr = msg.sender;
		myStuff.someNumbers = [10,20,30];
		luckyNumbers[0] = [10,20,30]

	}

	function getLucky (uint luckyKey) public constant returns(uint[]) internal {
		return luckyNumbers[luckyKey];
	}
	
	
	function getMyStuff () public view returns(address, uint) internal {
		return (myStuff.addr, myStuff.someNumbers[0]);
	}

	function getArrayValue () public constant returns(uint) internal {
		return someNumber[0];
	}
	
	
	function getFavoriteColor () public pure returns(uint) internal {
		return uint(FavoriteColor);
	}
	

	function switchState () public constant returns(bool) internal {
		return switcher;		
	}
			
}

