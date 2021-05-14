import React, { ReactChild, ReactNode, useEffect } from "react";
import Navbar from './Navbar'
import Activity from '../Activity'
import {ChainId} from '../../../methods/utils/constants'
import XendFinance from '../../../methods/init'
import { useDispatch } from "react-redux";
import { type } from "node:os";
import _const from "../../../methods/_const";


type Props = {
    children: ReactChild;
    extra?: ReactNode;
    title?: string;
    description?: string;
    balance?: string;
  };


function Layout(props: Props){

    const dispatch = useDispatch();

    useEffect(() =>{
        async function createWallet(){
            const sdkInstance = new XendFinance();
            const wallet = await sdkInstance.retrieveWallet();

            const arrayOfResProperties = Object.keys(wallet)
            if (arrayOfResProperties.includes('address')) {
                dispatch({type : _const.ADDRESS, payload : wallet.address})
                dispatch({type: _const.WALLET_CREATED, payload: true})
                dispatch({type: _const.CREATED_WALLET, payload: wallet})
            }
            else{
                const wallet = await sdkInstance.createWallet()
                dispatch({type : _const.ADDRESS, payload : wallet.address})
                dispatch({type: _const.WALLET_CREATED, payload: true})
                dispatch({type: _const.CREATED_WALLET, payload: wallet})
            }  
        }     
        createWallet();
    })
    return (
        <div >
            <div className='layout-body'> 
                 <Activity>{props.children}</Activity>
            </div>
            <Navbar />
        </div>  
    )
}
export default Layout;