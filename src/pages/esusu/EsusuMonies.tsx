import React, { ReactChild, ReactNode, useEffect } from "react";
import Button from "../components/Button";
import ToolTip from '../components/Tooltip'
import getContributions from '../../methods/redux/actions/esusu/get-contributions'
import { useDispatch, useSelector } from "react-redux";
import AmountsComplete from "../components/AmountsComplete";
import calculateEsusuPortfolio from "../../methods/utils/calculate-esusu-portfolio";
import commas from "../components/commas";
import _const from "../../methods/_const";

function EsusuMonies(){

    const contributions = useSelector((state : any ) => state.esusu.contributions)
    const dispatch = useDispatch();

    useEffect(() =>{

        dispatch(getContributions());
    },[])

    const esusubalance = commas(calculateEsusuPortfolio(contributions));
    // const shareBalance = commas(calculateEsusuPortfolio(contributions));
    console.log(esusubalance)

    return(
        <div className="esusu-monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt1">
                    <div className="monies-label flex">
                        <div className="mr1">Estimated Portfolio Balance</div> <ToolTip content="This is the total amount of money locked in your Esusu contributions" />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={esusubalance}>{commas(esusubalance)}</AmountsComplete> { _const.CURRENCY}
                           
                        </span> 
                    </div>
                </div>
                {/* <div className="mt1">
                    <div className="monies-label flex">
                        <div className="mr1">Accumulated Interest</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={esusubalance}>{commas(esusubalance)}</AmountsComplete> { _const.CURRENCY}
                           
                        </span> 
                    </div>
                </div> */}
            </div>
        </div>
    )

}
export default EsusuMonies;

