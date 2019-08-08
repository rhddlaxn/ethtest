const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');

async function getBlock(blockNumber, includeTxs = false) {
    const result = await web3.eth.getBlock(blockNumber, includeTxs);
    console.log(result);

}

getBlock(57291, true);
//include txs
//getBlock(57291, true);