window.addEventListener("load", function() { 
// Checking if Web3 has been injected by the browser (Mist/ MetaMask)
    if (typeof web3 !== "undefined") {
        // Use Mist/MetaMask's provider
        window.web3 = new Web3(web3.currentProvider);
    } else { 
        console.log("No web3? You should consider trying MetaMask!");
        // fallback - use your fallback strategy (local node/ hosted node + in-dapp id mgmt/ fail) 
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));
    }

      const tokenABI = [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_spender", type: "address" },
            { name: "_amount", type: "uint256" }
          ],
          name: "approve",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_from", type: "address" },
            { name: "_to", type: "address" },
            { name: "_amount", type: "uint256" }
          ],
          name: "transferFrom",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "rate",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "balance", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "beneficiary", type: "address" }],
          name: "create",
          outputs: [],
          payable: true,
          stateMutability: "payable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_to", type: "address" },
            { name: "_amount", type: "uint256" }
          ],
          name: "transfer",
          outputs: [{ name: "success", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "amount", type: "uint256" }],
          name: "collect",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            { name: "_owner", type: "address" },
            { name: "_spender", type: "address" }
          ],
          name: "allowance",
          outputs: [{ name: "remaining", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor"
        },
        { payable: true, stateMutability: "payable", type: "fallback" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "_from", type: "address" },
            { indexed: true, name: "_to", type: "address" },
            { indexed: false, name: "_value", type: "uint256" }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "_owner", type: "address" },
            { indexed: true, name: "_spender", type: "address" },
            { indexed: false, name: "_value", type: "uint256" }
          ],
          name: "Approval",
          type: "event"
        }
    ];

    const address = '0xCCeEF52Df5Ff1B80e63E3f211021bd0bAe5323D6';
    const eth = web3.eth.contract(tokenABI);
    const token = eth.at(address);
  
    token.symbol(function(err, tokenSymbol) {
        console.log("Token Symbol:" + tokenSymbol);
    });
    token.name(function(err, tokenName) {
        console.log("Token Name:" + tokenName);
    });
    token.totalSupply(function(err, supply) { 
        console.log("Total Supply:" + supply);
    });

    var coinbase = web3.eth.coinbase;
    web3.eth.getBalance(coinbase, function(error, result) {
        if (error) {
            console.log('Error: ' + error);
        } else {
            // retrieves supply in Wei
            console.log(result.toNumber());
        }
    });

    token.balanceOf(coinbase, function(err, balance) {
        console.log('Your coinbase has a balance of: ' + balance + ' tokens');
    });

    const tokenAccount = '0x00a14a6E5c505F4872D279E74cAcD8D830B00cD4';
    var transactionObject = {
        from: coinbase,
        to: tokenAccount,
        value: web3.toWei(0.5, 'ether'),
        data: '0x' 
    };
    web3.eth.sendTransaction(transactionObject, function(err, result) {
        if (err) {
            console.log('Error: ' + error);
        } else {
            // retrieves supply in Wei
            console.log('Transaction: ' + result);
        }
    });
});
