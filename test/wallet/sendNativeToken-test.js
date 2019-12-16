import { KeyWallet as keyWallet } from "../../lib/wallet/hdwallet";
import { AccountWallet, Wallet } from "../../lib/wallet/wallet";
import { RpcClient } from "../../lib/rpcclient/rpcclient";
import { CustomTokenInit, CustomTokenTransfer } from "../../lib/tx/constants";
import { PaymentAddressType } from "../../lib/wallet/constants";
import { ENCODE_VERSION } from "../../lib/constants";
import { checkEncode } from "../../lib/base58";

// const rpcClient = new RpcClient("https://mainnet.incognito.org/fullnode");
// const rpcClient = new RpcClient("https://test-mobile.incognito.org");
const rpcClient = new RpcClient("http://localhost:9998");
// const rpcClient = new RpcClient("https://dev-test-node.incognito.org");
// const rpcClient = new RpcClient("http://54.39.158.106:9334");

async function sleep(sleepTime) {
    return new Promise(resolve => setTimeout(resolve, sleepTime));
}

async function TestCreateAndSendNativeToken() {
    Wallet.RpcClient = rpcClient;
    await sleep(5000);

    // sender key (private key)
    let senderPrivateKeyStr = "112t8rnaqXpcge9BETLXdBnSVMq37pVzSr1i3tcvTJ3jQMs5NCWgv5VmMwRwtm9zzELKzz6WgtoPMR9PBgY95Cf15QMGVTFvpPii3TkW2tUB";
    let senderKeyWallet = keyWallet.base58CheckDeserialize(senderPrivateKeyStr);
    senderKeyWallet.KeySet.importFromPrivateKey(senderKeyWallet.KeySet.PrivateKey);

    let accountSender = new AccountWallet();
    accountSender.key = senderKeyWallet;

    // receiver key (payment address)
    let receiverPaymentAddrStr = "12RuEdPjq4yxivzm8xPxRVHmkL74t4eAdUKPdKKhMEnpxPH3k8GEyULbwq4hjwHWmHQr7MmGBJsMpdCHsYAqNE18jipWQwciBf9yqvQ";
    // let receiverKeyWallet = keyWallet.base58CheckDeserialize(receiverPaymentAddrStr);
    // let receiverPaymentAddr = receiverKeyWallet.KeySet.PaymentAddress;

    // get sender's balance before creating tx
    let balanceSender = await accountSender.getBalance();

    let fee = 5;
    let isPrivacy = true;
    let info = "";
    let amountTransfer = 1 * 1e9; // in nano PRV

    let paymentInfosParam = [];
    paymentInfosParam[0] = {
        "paymentAddressStr": receiverPaymentAddrStr,
        "amount": amountTransfer,
        // "message": "A mouse is so cute A mouse is so cute A mouse is so cute A mouse is so cute A mouse is so cute A mouse is so cute A mouse is so cute"
    };

    // create and send PRV
    let reps;
    try {
        reps = await accountSender.createAndSendNativeToken(paymentInfosParam, fee, isPrivacy, info, false);
    } catch (e) {
        console.log("Error when send PRV: ", e);
    }
    console.log("*********** Send native token successfully: ", reps);

    // get sender's balance after creating tx
    await sleep(3*60*1000); // waiting 3 mins

    let balanceSenderAfter = await accountSender.getBalance();
    if (balanceSenderAfter === balanceSender - amountTransfer - fee){
        console.log(" -------- balanceSenderAfter: ", balanceSenderAfter);
    }

}

TestCreateAndSendNativeToken();