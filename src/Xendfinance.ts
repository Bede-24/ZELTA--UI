import { ChainId } from "./methods/utils/constants";
import { Personal, Esusu, Cooperative, Group } from './methods'
import XendFinance from './methods/init'

const privateKey = 'e2c2f8be4687d4e2126941d13f84f1e0e01a850e06a23003d51120eb64a48924';
const chainId = ChainId.BSC_TESTNET;

export function XendfinanceInstance(){

    const privateKey = 'e2c2f8be4687d4e2126941d13f84f1e0e01a850e06a23003d51120eb64a48924';
    const chainId = ChainId.BSC_TESTNET;

    const sdkInstance = new XendFinance(chainId, privateKey);
    return sdkInstance;
    
}
export function PersonalInstance(){

    const instance = new Personal(chainId, privateKey)
    return instance;
}

export function EusuInstance(){

    const instance = new Esusu(chainId, privateKey)
    return instance;
}

export function CooporativeInstance(){

    const instance = new Cooperative(chainId, privateKey)
    return instance;
}

export function GroupInstance(){

    const instance = new Group(chainId, privateKey)
    return instance;
}