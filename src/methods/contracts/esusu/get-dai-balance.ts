import DaiContract from '../abis/DaiContract.json';
import createContract from '../create.contract';
import { fromBigNumber } from '../../utils/bignumber-converter';
import { ESUSU } from '../addresses/localhost';
import privateKeyToAddress from '../../utils/privateKeyToAddress'

async function UsersDaiBalance(provider: string, privateKey: string) {
    try {
        const Contract = await createContract(provider, DaiContract, ESUSU.DAI_TOKEN);
     
        const clientAddress = privateKeyToAddress(provider, privateKey);

        const clientBalance = await Contract.methods.balanceOf(clientAddress).call()



        // let fortubeServiceBalance = await busdContract.methods.balanceOf("0x95E103341B32Dff36c23cc963C6d3840B03b0695").call();

        // console.log("fortubeServiceBalance", fortubeServiceBalance)

        return fromBigNumber(clientBalance);
    } catch (e) {
        console.log(e);
        return '0';
    }
}

export default UsersDaiBalance;
