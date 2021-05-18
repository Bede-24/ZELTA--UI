import React, { ReactChild, ReactNode } from "react";
import ToolTip from "../components/Tooltip";
import XendLogo from '../../images/Xendfinance-Logo.svg'
import Button from "../components/Button";
import WalletConnect from '../components/ConnectWallet'
import { useHistory } from "react-router";

function TopBar(){

    const history = useHistory();

    return(
            <div className="layout-top">
                <div className="flex pt2 justify-space-between">
                    <div className='esusu-xend-logo'><img src={XendLogo} alt="Personal Icon"/></div>
                    <div className='esusu-protocol-select'>
                        <div >
                            <span style={{fontSize:'9px'}}><ToolTip  content="This cycle currently has just one member." /></span>
                            <select style={{border:'0px', fontSize:' 8.79538px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                                <option value="">Venus   19.3</option>
                                <option value="">Fortube  16.85%</option>
                            </select>
                        </div>
                    </div>
                    <div className='mr2'><WalletConnect/></div>
                </div>
                <div className="flex pt1" >
                    <div className='ml1'>
                        <Button
                            type='secondary' 
                            onClick={() => history.push('/MyEsusuGroups')} 
                        >
                            My Esusu Unions
                        </Button>
                    </div>
                    <div className='ml1'>
                        <Button
                            type='secondary'  
                        >
                            View Contributions
                        </Button>
                    </div>
                </div>
                         
            </div>
    )

}
export default TopBar;