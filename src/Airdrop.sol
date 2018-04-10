pragma solidity ^0.4.0;

// this contract automates transfers of tokens to a set of addresses
contract Airdrop { 
    function drop(ERC20 token, address[] recipients, uint256[] values) public { 
        for (uint256 i = 0; i < recipients.length; i++) { 
            token.transfer(recipients[i], values[i]);
        }
    }
}