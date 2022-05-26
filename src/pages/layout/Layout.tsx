import React, { ReactChild, ReactNode, useEffect } from "react";
import Navbar from './Navbar'
// import Activity from '../components/Activity'
// import {ChainId} from '../../methods/utils/constants'
// import { XendfinanceInstance } from '../../Xendfinance'
import { useDispatch } from "react-redux";
import { type } from "node:os";
import _const from "../../methods/_const";
import XendFinance from "@xend-finance/web-sdk";
import cookies from "../../methods/api/cookies";


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
    
        const userId = cookies.getUserId()
        if(userId  !== '' ){
            const address = cookies.get('address')
            dispatch({ type: _const.WALLET_CONNECTED, payload: true})
            dispatch({ type: _const.ADDRESS, payload: address})
        }
     })
    return (
        <div >
            <div className='layout-body'> 
                 {props.children}
            </div>
            {/* <Navbar /> */}
        </div>  
    )
}
export default Layout;