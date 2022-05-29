import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ToolTip from "./components/Tooltip";
import ZeltaLogo from '../images/zeltatoken.png'
import DepositButton from './Deposit'
import WithdrawalButton from './Withdraw'
import StakeButton from './Stake'
// import {PersonalInstance} from '../../Xendfinance'
import AmountsComplete from "./components/AmountsComplete";
import commas from "./components/commas";
import _const from "../methods/_const";

function SavingsTab(){


    return(
        <div className="personal-savings-tab">
            <div className='share-balance flex  justify-space-around '>
                <div className='flex mt3' style={{marginLeft : '-20px'}}> 
                    <span><img src={ZeltaLogo} alt="Personal Icon" height={35}/></span> 
                    <div className="dai-label">ZLT</div>
                    
                    <div  className='dai-stable-coin'>
                    <br />
                        Zelta Token
                    </div>
                   
                </div>
                <div className="mt3">
                    <div className="savings-tab-label flex">
                       <div className="mr1">Est. APY </div><ToolTip content="This is the estimated profit you will make." />
                    </div>
                    <div className='savings-tab-values'>
                        Up to 240%
                    </div>
                </div>
            </div>
            <div className='share-balance justify-space-around flex mt5 '>
                <DepositButton />
                <WithdrawalButton />
                <StakeButton />
            </div>
        </div>
    )
}
export default SavingsTab;