require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena occur venture struggle dash remain proof gesture light army gather'; 
let testAccounts = [
"0xb8ac72ffce714ffb5778e515ea46ae9336040236f7c188c23b674ee3b19ac861",
"0x4cace90912cd51c6ef4a0188d42bd705eff4c777db74298f76bcad3cbbae2067",
"0x96c51a3f7bf3ce982a1314a0af94ba3123104b16e4b95c2afc630978b2d03acb",
"0x693162272c9b013ee5f793859885bd31f2f51a29e81b52255bb80e12b342b63c",
"0x625a59b25c3336ad94283b52751c0a86f3227ba1cdbf9db8d6a8153d96e62226",
"0xd2dab1b76b940bd973cf3837b91ef9d9924c237b8492446a2ff02f5355e20eb5",
"0xab618310d8dd292173a70ef9c6c9cf34e6ed9d76d7be0ea7489593718ed1c73d",
"0x8c1ca4cdb2f738684f99e408c85805e2119466c84398d986c1d7c1ccd261827e",
"0x84a7e1e3199944e7b79e9a5d8e242186572f271bc6ac5bdceadf86afb1dde9f0",
"0x757823c164e7dddad18a6a26246dc91f3f443058ceb10842fca03e32c894e9f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

