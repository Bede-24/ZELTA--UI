import { useHistory } from 'react-router';
import Button from '../../components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fromBigNumber } from '../../../methods/utils/bignumber-converter'
import commas from '../../../methods/utils/commas'
import { secondsConverterFunc } from '../../../methods/utils/converters/from-second-converter';
import moment from 'moment';
import joinEsusu from '../../../methods/redux/actions/esusu/join-esusu'
import IsUserAmember from '../../../methods/redux/actions/esusu/is-esusu-member'
import {esusucycleStatusIndicator} from '../../../methods/utils/status-indicator'
import startCycle from '../../../methods/redux/actions/esusu/start-cycle'
// import WithdrawROI from '../WithdrawEsusuROI'
import WithdrawROI from '../WithdrawROI'
import _const from '../../../methods/_const';

function MyEsusuCycles(props : any ){

    const dispatch = useDispatch();

    const {IsMember} = useSelector((state : any) => state.esusu)


    const {
        CycleState,
        CycleId,
        CycleStartTimeInSeconds,
        DepositAmount,
        MaxMembers,
        PayoutIntervalSeconds,
        TotalAmountDeposited,
        TotalBeneficiaries,
        TotalCapitalWithdrawn,
        TotalCycleDurationInSeconds,
        TotalMembers,
        TotalShares,
    } = props.props;

    const statusEnded = Number(CycleState) === 3;
    const slotsRemaining =  Number(MaxMembers) - Number(TotalMembers);
    const notMemberAndStatusNotPending = !Boolean(IsMember) && Number(CycleState) > 0;
    // // const isMemberAndHasWithdrawnCapital = Boolean(IsMember) && Number(Capital) > 0;


    useEffect(() =>{
        dispatch(IsUserAmember(CycleId))
    },props)

    function showJoinButton() {
        if (IsMember && IsMember) {
            return false;
        } else if (slotsRemaining === 0) {
            return false;
        } else if (Number(CycleState) > 0) {
            return false;
        } else return true;
    }

    // console.log(props, IsMember, 'esusu props')

    return(
        <div className='esusu-cycles'>
              <div className='esusu-cycle-status'>
                  {/* I hard coded capital here, I will correct this */}
                                <div className='esusu-status-text'>{esusucycleStatusIndicator(showJoinButton(), CycleState, 6)}</div>
                            </div>  
                            <div className="flex">
                                <div className='esusu-cycle-symbol'>
                                    MJT
                                </div>
                                <div className=''>
                                    <div className="esusu-cycle-label">
                                        <div className="mr1">Start Date</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                        {moment.unix(CycleStartTimeInSeconds).format('lll')}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-space-between ">
                                <div className="mt1">
                                    <div className="esusu-cycle-label ml1">
                                        <div className="mr1">Contribution</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                         {commas(fromBigNumber(DepositAmount))} {_const.CURRENCY}
                                    </div>
                                </div>
                                <div className="mt1">
                                    <div className="esusu-cycle-label">
                                        <div className="mr1">Payout Interval</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                        {secondsConverterFunc(PayoutIntervalSeconds)}
                                    </div>
                                </div>
                                <div className="mt1">
                                    <div className="esusu-cycle-label">
                                        <div className="mr1">Available Slots</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                        {TotalMembers} of {MaxMembers}
                                    </div>
                                </div>
                                <div className="esusu-cycle-join-button">
                                    {/* to join this cycle */}
                                    {showJoinButton() && (
                                        <Button
                                            type='secondary'
                                            onClick={() => dispatch(joinEsusu(CycleId))}
                                        >
                                            Join
                                        </Button>
                                    )}
                                    {/* check is you can start this cycle */}
                                    {Number(CycleState) === 0 && Boolean(IsMember) && Number(TotalMembers) < 2 && moment().isBefore(moment.unix(CycleStartTimeInSeconds)) && (
                                    // {(
                                        <Button
                                            type='secondary'
                                            onClick={() => dispatch(startCycle(CycleId))}
                                        >
                                            Start
                                        </Button>
                                    )}
                                     {/* If is not a member and cannot join because no slots left or some other conditions that disables joining cycle */}
                                     {!Boolean(IsMember) && Number(CycleState) === 0 && Number(slotsRemaining) === 0 && (
                                            <Button disabled>
                                                can't join
                                            </Button>
                                    )}
                                    {/* chech if user can withdraw ROI  */}
                                    {/* {Boolean(IsMember) && Number(ROIBalance) > 0 && moment().isAfter(moment.unix(NextWithdrawal)) ( */}

                                    {Boolean(IsMember) && (

                                        <WithdrawROI 
                                            cycleInfo={props}
                                            IsMember={IsMember}
                                        />
                                    )}
                                     {/* {Boolean(IsMember) && Number(TotalAmountDeposited) > 0 && (

                                        <div>withdraw Capital</div>
                                    )} */}


                                   
                                </div>
                            </div>
        </div>
    )
}
export default MyEsusuCycles;