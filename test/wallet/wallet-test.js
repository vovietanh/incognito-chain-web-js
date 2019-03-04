import {Wallet, DefaultStorage} from '../../lib/wallet/wallet'
import {KeyWallet as keyWallet} from "../../lib/wallet/hdwallet";
import {AccountWallet} from "../../lib/wallet/wallet";
import * as key from "../../lib/key";
import bn from 'bn.js';
import {CustomTokenParamTx, TxTokenVout} from "../../lib/tx/txcustomtokendata";
import {CustomTokenInit, CustomTokenTransfer} from "../../lib/tx/constants";
import {CustomTokenPrivacyParamTx} from "../../lib/tx/txcustomkenprivacydata";

async function Test() {
  // let ID  = "1AF5782F86BDA63F884C7D8F872FF135A6F567FC0932DA3A675ECB2DD344DA40";
  // let tokenBalance = await wallet.getCustomTokenBalance(priK,ID);
  // console.log(tokenBalance);
  //
  //
  // let wallet2 = new Wallet()
  // let privateKey = '112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV'
  // let balance = await wallet2.getBalance(privateKey);
  // console.log(balance);
  // console.log(privKey);
  // let balance = await  wallet.getBalance()
  // console.log(balance);

  // wallet.save("12345678")
  //
  // let wallet2 = new Wallet()
  // wallet2.storage = storage
  // wallet2.loadWallet("12345678")
  //
  // wallet2.createNewAccount("Test 2")
  // let privKey = wallet2.exportAccount(0)
  // console.log(privKey);
  // console.log("End test")
}

async function TestCreateAndSendConstant() {
  // // HN1
  // let senderSpendingKeyStr = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  // let senderKeyWallet = keyWallet.base58CheckDeserialize(senderSpendingKeyStr);
  // senderKeyWallet.KeySet.importFromPrivateKey(senderKeyWallet.KeySet.PrivateKey);
  //
  // let accountSender = new AccountWallet();
  // accountSender.key = senderKeyWallet;
  // let n = 1;
  // let paymentInfos = new Array(n);
  //
  // // receivers
  // //HN2
  // let receiverSpendingKeyStr = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  // let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr);
  // receiverKeyWallet.KeySet.importFromPrivateKey(receiverKeyWallet.KeySet.PrivateKey);
  // paymentInfos[0] = new key.PaymentInfo(receiverKeyWallet.KeySet.PaymentAddress, new bn(2300));
  //
  //
  // // create and send constant tx
  // await accountSender.createAndSendConstant(paymentInfos);

  // sender: HN1
  let storage = new DefaultStorage();
  let senderSpendingKeyStr2 = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  let wallet = new Wallet();
  wallet.init("12345678", 0, "Wallet", storage);
  wallet.importAccount(senderSpendingKeyStr2, "Dat", "12345678");

  // // receivers
  // //HN2
  // let receiverSpendingKeyStr1 = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  // let receiverKeyWallet1 = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr1);
  // receiverKeyWallet1.KeySet.importFromPrivateKey(receiverKeyWallet1.KeySet.PrivateKey);
  // let n = 1;
  // let paymentInfos = new Array(n);
  // paymentInfos[0] = new key.PaymentInfo(receiverKeyWallet1.KeySet.PaymentAddress, new bn(2300));
  //
  // // let balance1 = await wallet.MasterAccount.child[1].getBalance();
  // // console.log("Before: ", balance1);
  //
  // await wallet.MasterAccount.child[1].createAndSendConstant(paymentInfos);
  //
  // let balance = await wallet.MasterAccount.child[1].getBalance();
  // console.log("After: ", balance);
}

// TestCreateAndSendConstant();

async function TestCreateAndSendCustomTokenInit() {
  // sender: HN1
  let storage = new DefaultStorage();
  let senderSpendingKeyStr = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  let wallet = new Wallet();
  wallet.init("12345678", 0, "Wallet", storage);
  wallet.importAccount(senderSpendingKeyStr, "Dat", "12345678");

  // receivers
  //HN2
  // let receiverSpendingKeyStr = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  // let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr);
  // receiverKeyWallet.KeySet.importFromPrivateKey(receiverKeyWallet.KeySet.PrivateKey);
  let n = 0;
  let paymentInfos = new Array(n);

  // prepare token param for tx custom token init


  let tokenParams = new CustomTokenParamTx();
  tokenParams.propertyName = "token1";
  tokenParams.propertySymbol = "token1";
  tokenParams.amount = 100;
  tokenParams.tokenTxType = CustomTokenInit;
  tokenParams.receivers = new Array(1);
  tokenParams.receivers[0] = new TxTokenVout();
  tokenParams.receivers[0].set(wallet.MasterAccount.child[1].key.KeySet.PaymentAddress, 100);

  await wallet.MasterAccount.child[1].createAndSendCustomToken(paymentInfos, tokenParams);
}

// TestCreateAndSendCustomTokenInit();

async function TestCreateAndSendCustomTokenTransfer() {
  // sender: HN1
  let storage = new DefaultStorage();
  let senderSpendingKeyStr = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  let wallet = new Wallet();
  wallet.init("12345678", 0, "Wallet", storage);
  wallet.importAccount(senderSpendingKeyStr, "Dat", "12345678");

  // receivers
  //HN2
  let receiverSpendingKeyStr = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr);
  receiverKeyWallet.KeySet.importFromPrivateKey(receiverKeyWallet.KeySet.PrivateKey);
  let n = 0;
  let paymentInfos = new Array(n);

  // prepare token param for tx custom token init
  let tokenParams = new CustomTokenParamTx();
  tokenParams.propertyID = "35b86fa135bda5f54bbad07c2d0f95d366d3126798c4b8bef4055ca7cba28ef2";
  tokenParams.propertyName = "token1";
  tokenParams.propertySymbol = "token1";
  tokenParams.amount = 10;
  tokenParams.tokenTxType = CustomTokenTransfer;
  tokenParams.receivers = new Array(1);
  tokenParams.receivers[0] = new TxTokenVout();
  tokenParams.receivers[0].set(receiverKeyWallet.KeySet.PaymentAddress, 10);

  await wallet.MasterAccount.child[1].createAndSendCustomToken(paymentInfos, tokenParams);
}

// TestCreateAndSendCustomTokenTransfer();

async function TestCreateAndSendPrivacyCustomTokenInit() {
  // sender: HN1
  let storage = new DefaultStorage();
  let senderSpendingKeyStr = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  let wallet = new Wallet();
  wallet.init("12345678", 0, "Wallet", storage);
  wallet.importAccount(senderSpendingKeyStr, "Dat", "12345678");

  // receivers
  //HN2
  // let receiverSpendingKeyStr = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  // let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr);
  // receiverKeyWallet.KeySet.importFromPrivateKey(receiverKeyWallet.KeySet.PrivateKey);
  let n = 0;
  let paymentInfos = new Array(n);

  // prepare token param for tx custom token init
  let tokenParams = new CustomTokenPrivacyParamTx();
  tokenParams.propertyName = "token2";
  tokenParams.propertySymbol = "token2";
  tokenParams.amount = 100;
  tokenParams.tokenTxType = CustomTokenInit;
  tokenParams.receiver = new Array(1);
  tokenParams.receiver[0] = new key.PaymentInfo(wallet.MasterAccount.child[1].key.KeySet.PaymentAddress, 100);

  await wallet.MasterAccount.child[1].createAndSendPrivacyCustomToken(paymentInfos, tokenParams);

  // token Id byte: 143, 217, 194, 26, 59, 57, 37, 169, 7, 25, 191, 49, 90, 203, 176, 52, 37, 163, 55, 241, 180, 189, 196, 206, 99, 221, 215, 238, 67, 236, 13, 103
  // token id: 670DEC43EED7DD63CEC4BDB4F137A32534B0CB5A31BF1907A925393B1AC2D98F
}

// TestCreateAndSendPrivacyCustomTokenInit();

async function TestCreateAndSendPrivacyCustomTokenTransfer() {
  // sender: HN1
  let storage = new DefaultStorage();
  let senderSpendingKeyStr = "112t8rqnMrtPkJ4YWzXfG82pd9vCe2jvWGxqwniPM5y4hnimki6LcVNfXxN911ViJS8arTozjH4rTpfaGo5i1KKcG1ayjiMsa4E3nABGAqQh";
  let wallet = new Wallet();
  wallet.init("12345678", 0, "Wallet", storage);
  wallet.importAccount(senderSpendingKeyStr, "Dat", "12345678");

  // receivers
  //HN2
  let receiverSpendingKeyStr = "112t8rqGc71CqjrDCuReGkphJ4uWHJmiaV7rVczqNhc33pzChmJRvikZNc3Dt5V7quhdzjWW9Z4BrB2BxdK5VtHzsG9JZdZ5M7yYYGidKKZV";
  let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverSpendingKeyStr);
  receiverKeyWallet.KeySet.importFromPrivateKey(receiverKeyWallet.KeySet.PrivateKey);
  let n = 0;
  let paymentInfos = new Array(n);

  // prepare token param for tx custom token init
  let tokenParams = new CustomTokenPrivacyParamTx();
  tokenParams.propertyID = "670DEC43EED7DD63CEC4BDB4F137A32534B0CB5A31BF1907A925393B1AC2D98F";
  tokenParams.propertyName = "token2";
  tokenParams.propertySymbol = "token2";
  tokenParams.amount = 10;
  tokenParams.tokenTxType = CustomTokenTransfer;
  tokenParams.receiver = new Array(1);
  tokenParams.receiver[0] = new key.PaymentInfo(receiverKeyWallet.KeySet.PaymentAddress, new bn(10));

  await wallet.MasterAccount.child[1].createAndSendPrivacyCustomToken(paymentInfos, tokenParams);
}

TestCreateAndSendPrivacyCustomTokenTransfer();












