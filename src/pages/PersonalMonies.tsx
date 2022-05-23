import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ToolTip from './components/Tooltip'
// import getflexibledepositrecordforcurrentuser from '../../methods/redux/actions/individual/get-flexible-deposit-record'
import getuserbalance from '../methods/redux/actions/get-user-balance'
import { useDispatch, useSelector } from "react-redux";
import AmountsComplete from './components/AmountsComplete'
import commas from "../methods/utils/commas";
import _const from "../methods/_const";
import web3 from 'web3';
// import { fromBigVenusNumber } from "../../methods/utils/bignumber-converter";


function PersonalMonies(){

    const dispatch = useDispatch();

    const balance = useSelector((state : any) => state.users.balance )
  console.log(balance, 'balance is logged')
        

    const [records, setRecords] = useState({
        walletBalance: 0,
        APY: 0,
        stakedAmount: 0
      });


    useEffect(() =>{
        dispatch(getuserbalance())
    }, [])

 
      useEffect(() => {
       const recordsData = balance;
        if (recordsData !== undefined || null) {
          setRecords({
            walletBalance: recordsData.walletBalance,
            APY: recordsData.APY,
            stakedAmount: recordsData.stakedAmount
          });
        } else {
          setRecords(balance);
        }
    
        // eslint-disable-next-line
      }, [balance]);
 

    return(
        <div className="monies">
            <div className='share-balance flex  justify-space-around mt3'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Wallet Balance</div> <ToolTip content="This is your withdrawable balance." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance.walletBallance}>$ {commas(balance.walletBallance)}</AmountsComplete>
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Interest Earned</div> <ToolTip content="This is your total interest earned on the platform." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={records.APY}>
                                $ {commas(records.APY)}
                            </AmountsComplete>{records.APY}
                            
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Staked Amount</div> <ToolTip content="This is your current staked amount." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance.stakedAmount}>$ {commas(balance.stakedAmount)}</AmountsComplete>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )

}
export default PersonalMonies;
