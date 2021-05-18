import React, { ReactChild, ReactNode, useEffect } from "react";
import ToolTip from "../components/Tooltip";
import DaiLogo from '../../images/DaiLogo.svg'
import FlexibleDepositButton from './PersonalFlexibleDeposit'
import FlexibleWithdrawalButton from './PersonalFlexibleWithdrawal'
import {PersonalInstance} from '../../Xendfinance'

function SavingsTab(){

   
    async function wait(){
        // const res = await sdkInstance().esusu.getDaiBalance();
        // console.log(res, ';res')
    }
    wait();

    return(
        <div className="personal-savings-tab">
            <div className='share-balance flex  justify-space-around '>
                <div className='flex mt3' style={{marginLeft : '-20px'}}> 
                    <span><img src={DaiLogo} alt="Personal Icon"/></span> 
                    <div className="dai-label">DAI</div>
                    <div  className='dai-stable-coin'>
                        <br />
                        DAI Stablecoin
                    </div>
                   
                </div>
                <div className="mt3">
                    <div className="savings-tab-label flex">
                       <div className="mr1">Est. APY </div><ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='savings-tab-values'>
                        Up to 23.0324%
                    </div>
                </div>
            </div>
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="savings-tab-label flex">
                        <div className='mr1'>Wallet Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='savings-tab-values'>
                        0.000 DAI
                    </div>
                </div>
                <div className="mt2">
                    <div className="savings-tab-label">
                        Savings Balance
                    </div>
                    <div className='savings-tab-values'>
                        0.8999 BUSD
                    </div>
                </div>
            </div>
            <div className='share-balance justify-space-around flex mt3'>
                <FlexibleDepositButton />
                <FlexibleWithdrawalButton />
            </div>
        </div>
    )
}
export default SavingsTab;