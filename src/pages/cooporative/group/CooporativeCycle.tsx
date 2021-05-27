import { useHistory } from 'react-router';
import Button from '../../components/Button';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fromBigNumber } from '../../../methods/utils/bignumber-converter'
import commas from '../../../methods/utils/commas'
import { secondsConverterFunc } from '../../../methods/utils/converters/from-second-converter';
import moment from 'moment';
import joinEsusu from '../../../methods/redux/actions/esusu/join-esusu'
import IsUserAmember from '../../../methods/redux/actions/cooporative/is-cooporative-member'
import {cooporativeStatusIndicator} from '../../../methods/utils/status-indicator'
import startCycle from '../../../methods/redux/actions/esusu/start-cycle'
import WithdrawCapital from '../WithdrawCapital'
import WithdrawOngoing from '../WithdrawOngoing'

function MyCooporativeCycles(props : any){

    const dispatch = useDispatch();

    const {IsMember} = useSelector((state : any) => state.cooporative)

    const {
        id,
        cycleDuration,
        cycleStakeAmount,
        cycleStartTimeStamp,
        cycleStatus,
        exists,
        groupId,
        hasMaximumSlots,
        maximumSlots,
        numberOfDepositors,
        stakesClaimed,
        stakesClaimedBeforeMaturity,
        totalStakes,
    } = props.props;

    const statusEnded = Number(cycleStatus) === 2;
    const slotsRemaining =  Number(maximumSlots) - Number(numberOfDepositors);
    const notMemberAndStatusNotPending = !Boolean(IsMember) && Number(cycleStatus) > 0;
    const hasClaimedAnyStake = Number(stakesClaimed) + Number(stakesClaimedBeforeMaturity);
    // // const isMemberAndHasWithdrawnCapital = Boolean(IsMember) && Number(Capital) > 0;


    useEffect(() =>{
        dispatch(IsUserAmember(groupId))
    },props)

    function showJoinButton() {
        if (IsMember && IsMember) {
            return false;
        } else if (slotsRemaining === 0) {
            return false;
        } else if (Number(cycleStatus) > 0) {
            return false;
        } else return true;
    }

    console.log(props, IsMember, 'esusu props')

    return(
        <div className='esusu-cycles'>
          <div className='esusu-cycle-status'>
                  {/* I hard coded capital here, I will correct this */}
                                <div className='esusu-status-text'>{cooporativeStatusIndicator(showJoinButton(), cycleStatus, hasClaimedAnyStake)}</div>
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
                                        {moment.unix(cycleStartTimeStamp).format('lll')}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-space-between ">
                                <div className="mt1">
                                    <div className="esusu-cycle-label ml1">
                                        <div className="mr1">Contribution</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                         {commas(fromBigNumber(cycleStakeAmount))} BUSD
                                    </div>
                                </div>
                                <div className="mt1">
                                    <div className="esusu-cycle-label">
                                        <div className="mr1">Cycle Duration</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                        {secondsConverterFunc(cycleDuration)}
                                    </div>
                                </div>
                                <div className="mt1">
                                    <div className="esusu-cycle-label">
                                        <div className="mr1">Available Slots</div>
                                    </div>
                                    <div className='esusu-cycle-value'>
                                        {numberOfDepositors} of {maximumSlots}
                                    </div>
                                </div>
                                <div className="esusu-cycle-join-button">
                                    {/* to join this cycle */}
                                    {showJoinButton() && (
                                        <Button
                                            type='secondary'
                                            onClick={() => dispatch(joinEsusu(groupId))}
                                        >
                                            Join
                                        </Button>
                                    )}
                                    {/* check is you can start this cycle */}
                                    {Number(cycleStatus) === 0 && Boolean(IsMember) && Number(numberOfDepositors) < 2 && moment().isBefore(moment.unix(cycleStartTimeStamp)) && (
                                    // {(
                                        <Button
                                            type='secondary'
                                            onClick={() => dispatch(startCycle(groupId))}
                                        >
                                            Start
                                        </Button>
                                    )}
                                     {/* If is not a member and cannot join because no slots left or some other conditions that disables joining cycle */}
                                     {!Boolean(IsMember) && Number(cycleStatus) === 0 && Number(slotsRemaining) === 0 && (
                                            <Button disabled>
                                                can't join
                                            </Button>
                                    )}
                                    {/* chech if user can withdraw from completed cycle  */}
                                    {/* {Boolean(IsMember) && Number(ROIBalance) > 0 && moment().isAfter(moment.unix(NextWithdrawal)) ( */}

                                    {Boolean(IsMember) && Number(hasClaimedAnyStake) <= 0 && statusEnded && (

                                        <WithdrawCapital 
                                            cycleInfo={props}
                                            IsMember={IsMember}
                                        />
                                    )}

                                    {/* check if user can withdraw from an ongoing cycle */}
                                     {Boolean(IsMember) && Number(hasClaimedAnyStake) <= 0 && Number(cycleStatus) === 1 && (

                                        <WithdrawOngoing
                                            cycleInfo={props}
                                            IsMember={IsMember}
                                        />
                                    )}


                                   
                                </div>
                            </div>
        </div>
    )
}
export default MyCooporativeCycles;