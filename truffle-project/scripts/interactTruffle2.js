module.exports = function(callback) {
    var account = "0xbd5982b3b565cc3a5abdb0f5d31bf08193c4f051";
    var basicStorage = artifacts.require("basicStorage");
    var contractInstance = basicStorage.at("0x48385fea79db561644cc49cf5b1f20b4ebb13635");
    contractInstance.set.sendTransaction(10,{ from: account }).then(function(result) {
        console.log(result);
        contractInstance.get.call().then(function(result){ 
            console.log(result);
        });
    });
}