import React, { ReactChild, ReactNode } from "react";
import Layout from './layout/Layout'
import ToolTip from "./components/Tooltip";
import WalletConnect from './walletconnect/ConnectWallet'
import ZeltaLogo from '../images/zeltatoken.png'
import { useHistory } from "react-router-dom";
// import SavingsProtocol from '../components/ProtocolSetterandGetter'

function TopBar(){

    const history = useHistory();

    return(
            <div className="layout-top">
                <div className="flex justify-space-around pt2">
                    <span onClick={() => history.push('/')}>
                        <img src={ZeltaLogo} alt="Personal Icon" height={35}/>
                        <div className='title capitalize' >
                            ZELTAstake
                        </div>
                    </span> 
                    
                    <div className="w5"></div>
                    <WalletConnect />
                </div>
            </div>
    )

}
export default TopBar;