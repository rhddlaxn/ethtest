const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');

async function transfer(to, value) {
    let tx = {
        to,
        value,
        gas: 2000000
    };
    try {
        let account = await web3.eth.accounts.privateKeyToAccount('0x3257df1723bc9348e72f42c794cb0063ffda7986c6cb034fb049db35eef187c0');
        console.log(account);
        const result = await account.signTransaction(tx);
        console.log(result);

        const txid = await web3.eth.sendSignedTransaction(result.rawTransaction);
        console.log(txid);


    } catch (e) {
        console.error(e);
    }
}
const amount = '0.1'
const etherTowei = web3.utils.toWei(amount);
console.log(etherTowei);

transfer('0x1E56b701f4E089B2E7387b738422c3347d6603D9', etherTowei);