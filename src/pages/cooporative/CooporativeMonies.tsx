import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import ToolTip from '../components/Tooltip'
import cooperativeContributions from '../../methods/redux/actions/cooporative/get-contributions'
import web3 from 'web3';
import commas from "../components/commas";
import _const from "../../methods/_const";

function EsusuMonies(){

    const dispatch = useDispatch();

    const { contributions } = useSelector((store: any) => store.cooporative);

    const [portfolioBalance, setportfolioBalance] = useState('0');

    useEffect(() => {
        dispatch(cooperativeContributions());
        // dispatch(getPricePerPoolShare());
    }, []);

    useEffect(() => {
        if (Array.isArray(contributions)) {
            let portfolioBal = BigInt(0);

            /* eslint-disable */
            contributions.map((cycle) => {
                const depositedAmount = Number(cycle.cycleStakeAmount) * Number(cycle.numberOfCycleStakes) < 0 ? Number(cycle.numberOfCycleStakes) : 1;
               

                if (!cycle.hasWithdrawn) {
                    portfolioBal += BigInt(depositedAmount);
                }
            });
            setportfolioBalance(web3.utils.fromWei(portfolioBal.toString(), 'ether'));
        }
    }, [contributions]);

    return(
        <div className="esusu-monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt1">
                    <div className="monies-label flex">
                        <div className="mr1">Portfolio Balance</div><ToolTip content="This is the total value of all your cooperative savings investments at the moment." />
                    </div>
                    <div className='monies-values'>
                        {commas(portfolioBalance)} {_const.CURRENCY}
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EsusuMonies;

