require('@babel/register');
require("@babel/polyfill");
require("./loadwasm");

// wallet test
// require("./test/wallet/wallet-test");
// require("./test/wallet/accountwallet-test");
// require("./test/wallet/hdwallet-test");
// require("./test/wallet/utils-test");
require("./test/wallet/sendNativeToken-test");

// require('./test/tx/txprivacy-test');
// require('./test/tx/txprivacytoken-test');

// require('./test/coin-test');
// require('./test/key-test');

// bigint test
// require("./test/bigint-test");


// elliptic test
// require("./test/elliptic-test");


// identicon test
// require('./test/identicon-test');
// require('./test/hybridencryption-test');
// require('./test/aes-test');
// require('./test/utils-test');
// require('./test/committeekey-test');

/************* SCRIPTS FOR DEV **************/


// require('./test/txfordev/getBalanceMultiUsers');
// require('./test/txfordev/multiStakingTxs.js');
// require('./test/txfordev/multiPRVTx');
// require('./test/txfordev/withdrawReward');
// require('./test/txfordev/sendRewardsToOneAddress');
// require('./test/txfordev/pTokenContribute');
// require('./test/txfordev/PRVContribute');

// require('./test/txfordev/sendPrivateTokentoReceivers');
// require('./test/txfordev/sendPRVToReceivers');

/************* RPC TEST **************/
// require('./test/rpc/rpc-test');

/************* PRIVACY TEST **************/
// require('./test/privacy/hybridenc-test');
// require('./test/privacy/utils-test');
