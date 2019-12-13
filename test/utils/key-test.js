import * as key from "../../lib/key"
import * as base58 from "../../lib/base58"
import CryptoJS from "crypto-js";
import { stringToBytes } from "../../lib/privacy/utils";

async function sleep(sleepTime) {
  return new Promise(resolve => setTimeout(resolve, sleepTime));
}

async function TestKey() {
  await sleep(5000);
  let sk = key.GeneratePrivateKey([123]);
  console.log("Spending key : ", sk.join(", "));

  let pk = key.GeneratePublicKey(sk);
  console.log("Public key : ", pk.join(", "));

  let rk = key.GenerateReceivingKey(sk);
  console.log('Receiving key: ', rk.join(", "));

  let tk = key.GenerateTransmissionKey(rk);
  console.log('Transmission key: ', tk.join(", "));

  let vk = new key.ViewingKey(sk);
  console.log('Viewing key: ', vk.toBytes().join(", "));

  let paymentAddr = new key.PaymentAddress().fromPrivateKey(sk);
  console.log('Payment addr: ', paymentAddr);
  let paymentAddrBytes = paymentAddr.toBytes();
  console.log("Payment address bytes: ", paymentAddrBytes.join(", "));
}

// TestKey();

function TestBase58(){
  let pkArray =  [2, 194, 130, 176 ,102, 36, 183, 114, 109, 135, 49, 114, 177, 92, 214, 31, 25, 4 ,72, 103, 196, 161, 36, 69, 121, 102, 159, 24, 31, 131, 101, 20, 0];
  let res = base58.checkEncode(pkArray, 0x00);
  console.log("REs: ", res);
}

// TestBase58()

function TestStringBytes(){
  let str = "abcabcabcabcabcabcabcabcabcabc";
  let bytes = stringToBytes(str);

  console.log("Bytes: ", bytes, bytes.length);
}
// TestStringBytes()