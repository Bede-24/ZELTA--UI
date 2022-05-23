import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ToolTip from "./components/Tooltip";
import DaiLogo from '../images/DaiLogo.svg'
import DepositButton from './Deposit'
import WithdrawalButton from './Withdraw'
import StakeButton from './Stake'
// import {PersonalInstance} from '../../Xendfinance'
import AmountsComplete from "./components/AmountsComplete";
import commas from "./components/commas";
import _const from "../methods/_const";

function SavingsTab(){


    const [walletBalnce, setbalance] = useState(0)
    const [APY, setAPY] = useState({})
   
    async function setbalanceAndAPY(){

        // const balance =  await PersonalInstance().walletBalance();
        // const APY = await PersonalInstance().fixedInfo()

        // setbalance(Number(balance))
        setAPY(APY);
    }
    
    useEffect(() => {
        setbalanceAndAPY()
    },[])

    // console.log(walletBalnce, APY)

    return(
        <div className="personal-savings-tab">
            <div className='share-balance flex  justify-space-around '>
                <div className='flex mt3' style={{marginLeft : '-20px'}}> 
                    <span><img src={DaiLogo} alt="Personal Icon"/></span> 
                    <div className="dai-label">BUSD</div>
                    <div  className='dai-stable-coin'>
                        <br />
                        BUSD stablecoin
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
            {/* <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="savings-tab-label flex">
                        <div className='mr1'>Wallet Balance</div> <ToolTip content="This is your total wallet balance." />
                    </div>
                    <div className='savings-tab-values'>
                        <span>
                            <AmountsComplete completeAmount={walletBalnce}>{commas(walletBalnce)}</AmountsComplete>{' '}{ _const.CURRENCY}
                        </span>
                    </div>
                </div>
                <div className="w2"></div>
            </div> */}
            <div className='share-balance justify-space-around flex mt5 '>
                <DepositButton />
                <WithdrawalButton />
                <StakeButton />
            </div>
        </div>
    )
}
export default SavingsTab;