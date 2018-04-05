module.exports = function(callback) { 
    var basicStorage = artifacts.require("basicStorage");
    basicStorage.deployed().then(function(instance) {
        contract = instance;
        console.log(contract);
    })
};