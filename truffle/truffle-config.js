const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = ['3257df1723bc9348e72f42c794cb0063ffda7986c6cb034fb049db35eef187c0']; // private keys

module.exports = {
  //Network : 배포 할 네트워크에 대한 Config
  networks: {
    development: {
      provider: () => {
        return new HDWalletProvider(privateKeys, 'https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider('3257df1723bc9348e72f42c794cb0063ffda7986c6cb034fb049db35eef187c0', 'https://ropsten.infura.io/v3/f5cc5be19363471096e3912df20b9f0f');
      },
      gasPrice: 20000000000,
      network_id: 3
    },
  },
  compilers: {
    solc: {
      version: '0.4.25',
      docker: false,
    }
  }
};




