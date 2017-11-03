# Coinpouch

 

A NodeJS light Ethereum wallet for the linux terminal.  Zeta is free and open-source software that allows developers to store and spend money directly in their terminal/server to pay for other software libraries and services using an API.  

This is a mix between Geth and Metamask.  It is much lighter than geth since it does not mine or store the chain - it only talks to INFURA. Has a JSONRPC interface like geth.  

## Features
-can create a new account like Geth (password protected)
-there is a console with 'coinpouch console'
-can switch to testnet/realnet (you have to pass in the net name when adding as a library)
-automatically connects to INFURA to check balances


## TODO

Build a JSON-RPC listener
Allow for generation of a new eth address and link into INFURA (like metamask) to grab balances and more
Allow for registering services and setting payment caps (?)

https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/

## Implementing basic web3 functions (like metamask)
--see app/scripts/config.js in metamask repo

https://ethereum.stackexchange.com/questions/22800/simplest-way-to-integrate-infura-with-a-web3-truffle-app





## Packaging
This will be packaged into an executable using 'npm install -g pkg'
https://github.com/zeit/pkg
Then that packaged executable needs to be put into /bin !
