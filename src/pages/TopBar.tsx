import React, { ReactChild, ReactNode } from "react";
import Layout from './layout/Layout'
import ToolTip from "./components/Tooltip";
import WalletConnect from './walletconnect/ConnectWallet'
// import SavingsProtocol from '../components/ProtocolSetterandGetter'

function TopBar(){

    return(
            <div className="layout-top">
                <div className="flex justify-space-around pt2">
                    <div className='title capitalize' >ZELTAstake</div>
                    <div className="w5"></div>
                    <WalletConnect />
                </div>
            </div>
    )

}
export default TopBar;