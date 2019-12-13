import { Wallet } from "../../lib/wallet/wallet"
import { RpcClient } from "../../lib/rpcclient/rpcclient"

async function testIdenticon() {
    Wallet.RpcClient = new RpcClient("https://test-node.incognito.org")
    let resp = await Wallet.RpcClient.hashToIdenticon(["ba62745dea932f8121064d72347ef25a326067643f21c520942dcc642fec6632"])
    console.log(resp.data.Result)
}

testIdenticon()
