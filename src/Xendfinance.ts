import { ChainId } from "./methods/utils/constants";
// import { Personal, Esusu, Cooperative, Group } from './methods'
// import XendFinance from './methods/init'
// import { Personal, Esusu, Cooperative, Group, } '@xend-finance/web-sdk'
import {Personal, Esusu, Cooperative} from "@xend-finance/web-sdk";
import { getcurrentSavingsProtocol } from '../src/methods/utils/savings-protocol'
import getsavingsOption from'../src/methods/utils/savings-options'


const privateKey = 'e2c2f8be4687d4e2126941d13f84f1e0e01a850e06a23003d51120eb64a48924';
const chainId = ChainId.BSC_TESTNET;


const savingsProtocol = getcurrentSavingsProtocol();
const options : Options = {
    env: 'testnet',
    protocolName : savingsProtocol,
    
}


export function XendfinanceInstance(){

    const sdkInstance = new Esusu(chainId, privateKey);
    return sdkInstance;

}

export function PersonalInstance(){

    const instance = new Personal(chainId, privateKey)
    return instance;
}

export function EsusuInstance(){

    const instance = new Esusu(chainId, privateKey)
    return instance;
}

export function CooporativeInstance(){

    const instance = new Cooperative(chainId, privateKey)
    return instance;
}

export function GroupInstance(){

    // const instance = new Group(chainId, privateKey);
    // return instance;
}