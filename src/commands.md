### Installing and running parity

```
$brew tap paritytech/paritytech
$brew install parity --stable 
$parity —-chain kovan ui
$parity --chain kovan ui --jsonrpc-apis "eth,net,web3,personal"
```
### Ganache/Truffe

```
npm i -g ganache-cli
npm i -g truffle

mkdir project
cd project
truffle init
ganache-cli

truffle migrate
truffle console
truffle test
```

### Initialize Zeppellin project

```
$ mkdir awesomeProject && cd awesomeProject
$ npm init
$ truffle init 
$ npm install zeppelin-solidity
$ truffle compile
```
