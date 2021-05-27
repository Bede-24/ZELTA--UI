import React from 'react';
import { useDispatch } from 'react-redux';
import withdrawRoi from '../../methods/redux/actions/esusu/withdraw-ROI';
import Button from '../components/Button';
import moment from 'moment';

type Props = {
    cycleInfo: any;
    IsMember : any;
};

function WithdrawEsusuROI(props: Props) {
    const dispatch = useDispatch();



    
    const {  CycleId,  CycleState } = props.cycleInfo;
    const { IsMember } = props.IsMember;


    return (
        <div>
            <div>
                {IsMember === true &&  (
                    
                    <Button
                        // disabled={!nextPayoutHasReached}
                        onClick={() => dispatch(withdrawRoi(Number(CycleId)))}
                    >
                        Withdraw ROI
                    </Button>
                )}
            </div>
            <div />
        </div>


    // const { NextWithdrawal, CycleId, ROIBalance, IsMember, CycleState } = props.cycleInfo;


    // const nextPayoutHasReached = moment().isAfter(moment.unix(NextWithdrawal));

    // const cycleStillUngoing = Number(CycleState) === 1 || Number(CycleState) === 2;


    // return (
    //     <div>
    //         <div>
    //             {IsMember === true && Number(ROIBalance) === 0 && cycleStillUngoing && (
    //                 <Button
    //                     disabled={!nextPayoutHasReached}
    //                     block
    //                     onClick={() => dispatch(withdrawRoi(Number(CycleId)))}
    //                 >
    //                     Withdraw ROI
    //                 </Button>
    //             )}
    //         </div>
    //         <div />
    //     </div>


    
    );
}

export default WithdrawEsusuROI;
