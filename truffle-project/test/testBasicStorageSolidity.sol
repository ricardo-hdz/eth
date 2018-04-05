pragma solidity ^0.4.2;
 
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/basicStorage.sol";
contract TestbasicStorage { 
    BasicStorage bs = new BasicStorage();
    function testInitialBalance() {
        Assert.balanceIsZero(bs, 'Assert failed');
    }
}