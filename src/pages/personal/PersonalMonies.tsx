import React, { ReactChild, ReactNode, useEffect } from "react";
import ToolTip from '../components/Tooltip'
import getflexibledepositrecordforcurrentuser from '../../methods/redux/actions/individual/get-flexible-deposit-record'
import { useDispatch, useSelector } from "react-redux";
import AmountsComplete from '../components/AmountsComplete'
import commas from "../../methods/utils/commas";
import _const from "../../methods/_const";
import web3 from 'web3';


function PersonalMonies(){

    const dispatch = useDispatch();

    const individualRecord = useSelector((state : any) => state.individual.individualRecord )
    const { balance, derivativeWithdrawn, shareBalance, } = individualRecord;


    useEffect(() =>{
        dispatch(getflexibledepositrecordforcurrentuser())
    }, [])
 

    return(
        <div className="monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Balance + Interest</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={balance}>{commas(balance)}</AmountsComplete>{' '}
                            VBUSD
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={shareBalance}>
                                {commas(shareBalance)}
                                {/* {commas(web3.utils.fromWei(sbalance))} */}
                            </AmountsComplete>{' '}
                            VBUSD
                        </span>
                    </div>
                </div>
               
            </div>
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Total Withdrawn</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={derivativeWithdrawn}>
                                {commas(derivativeWithdrawn)}
                                {/* {commas(web3.utils.fromWei(withdrawn))} */}
                            </AmountsComplete>{' '}
                            VBUSD
                        </span>
                    </div>
                </div>
                <div className="w3"></div>
            </div>
        </div>
    )

}
export default PersonalMonies;

