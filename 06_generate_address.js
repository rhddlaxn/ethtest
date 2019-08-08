const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');

async function generateaddress() {
    try {
        const result = await web3.eth.accounts.create();
        console.log(result);
    } catch (e) {
        console.error(e);

    }
}
generateaddress();