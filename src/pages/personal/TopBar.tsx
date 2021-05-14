import React, { ReactChild, ReactNode } from "react";
import Layout from '../components/layout/Layout'
import ToolTip from "../components/Tooltip";
import WalletConnect from '../components/ConnectWallet'

function TopBar(){

    return(
            <div className="layout-top">
                <div className="flex justify-space-around pt2">
                    <div className='title capitalize' >Personal Savings</div>
                    <div className="w5"></div>
                    <WalletConnect />
                </div>
                <div className='personal-protocol-select'>
                    <div >
                        <span style={{fontSize:'11px'}}><ToolTip  content="This cycle currently has just one member." /></span>
                        <select name="protocols" id="protocols" style={{border:'0px', fontSize:'11.985px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                            <option value="">Venus   19.3</option>
                            <option value="">Fortube  16.85%</option>
                        </select>
                    </div>
                </div>
            </div>
    )

}
export default TopBar;