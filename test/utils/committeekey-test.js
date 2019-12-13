import { generateCommitteeKeyFromHashPrivateKey, generateBLSPubKeyB58CheckEncodeFromSeed} from "../../lib/committeekey";
import {KeyWallet} from "../../lib/wallet/hdwallet";
import {checkDecode, checkEncode} from "../../lib/base58";
import { hashSha3BytesToBytes } from "../../lib/privacy/utils";
import { convertHashToStr } from "../../lib/common";


async function sleep(sleepTime) {
    return new Promise(resolve => setTimeout(resolve, sleepTime));
}

async function testCommitteeKey(){
    await sleep(5000);


    // let privateKey = "112t8rqFtYxrQ18ae52tQrCj7kr5HUhL1RXoq2JvTeaJNEcXgQys8B48KFFDFdHsK3CRuiwmmjuPMstkfowfHYHWZG46Pofmo8wKuKH7domP";
    // // generate committee key
    // let keyWallet = KeyWallet.base58CheckDeserialize(privateKey);

    // let privateKeyBytes = keyWallet.KeySet.PrivateKey;
    // console.log("keyWallet.KeySet.PrivateKey:", keyWallet.KeySet.PrivateKey);
    // console.log("len priavte key :", privateKeyBytes.length);
    // // console.log("keyWallet.KeySet.PrivateKey:", )
    // let hash = checkEncode(hashSha3BytesToBytes(hashSha3BytesToBytes(keyWallet.KeySet.PrivateKey)), 0);
    // console.log("HAhs: ", hash);




    // let hash = checkDecode(convertHashToStr(hashSha3BytesToBytes(hashSha3BytesToBytes(privateKeyBytes)))).bytesDecoded;
    // console.log("HAsh: ", hash);
    // let committeeKey = KeyWallet.KeySet.generateCommitteeKeyFromHashPrivateKey(hash);
    // console.log("committeeKey: ", committeeKey);


    let candidateHashPrivateKey = "1EbKxc6Lx7LHAXofQKBVjvDsYXWus9DeVhyNrpNYourT4mNHbr";
    let candidatePaymentAddress = "12RrmgZh54apuNWUQJKuUuwjme14xtWE6s5bW6oEk1gx2etUt4TvDVPhoREveBnogdeQTeBLYifcBqBAvNcEU8yFydhX267VF5PG2K1";

    let keyWallet = KeyWallet.base58CheckDeserialize(candidatePaymentAddress);
    
    let publicKeyBytes = keyWallet.KeySet.PaymentAddress.Pk;
    console.log("publicKeyBytes: ", publicKeyBytes.join(" "));

    let candidateHashPrivateKeyBytes = checkDecode(candidateHashPrivateKey).bytesDecoded;

    console.log("generateCommitteeKeyFromHashPrivateKey")
    let committeeKey = await generateCommitteeKeyFromHashPrivateKey(candidateHashPrivateKeyBytes, publicKeyBytes);
    console.log("committeeKey: ", committeeKey);
}

// testCommitteeKey();


async function TestBLSPubKey(){
    await sleep(5000);
    let seed = "1EbKxc6Lx7LHAXofQKBVjvDsYXWus9DeVhyNrpNYourT4mNHbr";
    let blsPubKey = await generateBLSPubKeyB58CheckEncodeFromSeed(seed);
    console.log("blsPubKey: ", blsPubKey);
}

// TestBLSPubKey()