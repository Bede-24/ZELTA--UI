import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ToolTip from './components/Tooltip'
// import getflexibledepositrecordforcurrentuser from '../../methods/redux/actions/individual/get-flexible-deposit-record'
import getuserbalance from '../methods/redux/actions/get-user-balance'
import gettokenprice from '../methods/redux/actions/get-token-prices'
import { useDispatch, useSelector } from "react-redux";
import AmountsComplete from './components/AmountsComplete'
import commas from "../methods/utils/commas";
import _const from "../methods/_const";
import web3 from 'web3';
import InputNumber from "./components/InputNumber";
import Button from "./components/Button";
// import { fromBigVenusNumber } from "../../methods/utils/bignumber-converter";


function PersonalMonies(){

    const dispatch = useDispatch();

    const balance = useSelector((state : any) => state.users.balance )
    const tokenPrice = useSelector((state : any) => state.prices.tokenPrice)
  console.log(tokenPrice, 'balance is logged')

  const [priceamount, setpriceamount] = useState(0)
        

    // const [records, setRecords] = useState({
    //     walletBalance: 0,
    //     APY: 0,
    //     stakedAmount: 0
    //   });


    useEffect(() =>{
        dispatch(getuserbalance())
        dispatch(gettokenprice());
    }, [])

 
// function submitsetorm(e: any){
//     e.preventDefault();
//     dispatch(gettokenprice());
// }

    return(
        <div className="monies">
            <div className='share-balance flex  justify-space-around mt3'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Wallet Balance</div> <ToolTip content="This is your withdrawable balance." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance.walletBallance/tokenPrice}>Zelta {commas(balance.walletBallance/tokenPrice)}</AmountsComplete>
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Interest Earned</div> <ToolTip content="This is your total interest earned on the platform." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance.APY/tokenPrice}>
                                Zelta {commas(balance.APY/tokenPrice)}
                            </AmountsComplete>
                            
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Staked Amount</div> <ToolTip content="This is your current staked amount." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance.stakedAmount/tokenPrice}>Zelta {commas(balance.stakedAmount/tokenPrice)}</AmountsComplete>
                        </span>
                    </div>
                </div>
            </div>
            {/* <div>
                      
        
            <form onSubmit={submitsetorm}>
                        <InputNumber
                                value={priceamount}
                                required
                                label="setpriceamount"
                                onChange={(e : any)  => setpriceamount(e) }
                            />
                        
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                set
                            </Button>
                        </div>
                    </form>
            </div> */}

        </div>
    )

}
export default PersonalMonies;
