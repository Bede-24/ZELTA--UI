import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ToolTip from '../components/Tooltip'
import getflexibledepositrecordforcurrentuser from '../../methods/redux/actions/individual/get-flexible-deposit-record'
import { useDispatch, useSelector } from "react-redux";
import AmountsComplete from '../components/AmountsComplete'
import commas from "../../methods/utils/commas";
import _const from "../../methods/_const";
import web3 from 'web3';
import { fromBigVenusNumber } from "../../methods/utils/bignumber-converter";


function PersonalMonies(){

    const dispatch = useDispatch();

    const individualRecord = useSelector((state : any) => state.individual.individualRecord )

    const [records, setRecords] = useState({
        totalBalance: 0,
        shareBalance: 0,
      });


    useEffect(() =>{
        dispatch(getflexibledepositrecordforcurrentuser())
    }, [])

 
      useEffect(() => {
        const recordsData = individualRecord;
        if (recordsData !== undefined || null) {
          setRecords({
            totalBalance: recordsData.derivativeBalance,
            shareBalance: fromBigVenusNumber(Number(recordsData.derivativeShareBalance)),
          });
        } else {
          setRecords(records);
        }
    
        // eslint-disable-next-line
      }, [individualRecord]);
 

    return(
        <div className="monies">
            <div className='share-balance flex  justify-space-around'>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Personal Balance + Interest</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={records.totalBalance}>{commas(records.totalBalance)}</AmountsComplete>{ _const.CURRENCY}
                        </span>
                    </div>
                </div>
                <div className="mt2">
                    <div className="monies-label flex">
                        <div className="mr1">Share Balance</div> <ToolTip content="This cycle currently has just one member." />
                    </div>
                    <div className='monies-values'>
                        <span>
                            <AmountsComplete completeAmount={records.shareBalance}>
                                {commas(records.shareBalance)}
                                {/* {commas(web3.utils.fromWei(sbalance))} */}
                            </AmountsComplete>{_const.SHARE_CURRENCY}
                            
                        </span>
                    </div>
                </div>
               
            </div>

        </div>
    )

}
export default PersonalMonies;
