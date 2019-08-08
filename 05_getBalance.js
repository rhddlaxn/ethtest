const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');

async function getBalance(address) {
    const result = await web3.eth.getBalance(address);
    console.log(result);

    const weiToEther = web3.utils.fromWei(result, 'ether');
    console.log(weiToEther);


}
getBalance('0x1f6C8B72E04559EC419f98AFdB3D18F1e12e1746');
//result : 2957209069100000000