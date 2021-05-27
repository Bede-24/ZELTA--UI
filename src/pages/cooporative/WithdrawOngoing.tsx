import React from 'react';
import { useDispatch } from 'react-redux';
import withdrawGoing from '../../methods/redux/actions/cooporative/withdraw-ongoing';
import Button from '../components/Button';
import moment from 'moment';

type Props = {
    cycleInfo: any;
    IsMember : any;
};

function WithdrawOngoing(props: Props) {

    const dispatch = useDispatch();

    
    const {  CycleId,  CycleState } = props.cycleInfo;
    const { IsMember } = props.IsMember;


    return (
        <div>
            <div>
                {IsMember === true &&  (
                    
                    <Button
                        // disabled={!nextPayoutHasReached}
                        onClick={() => dispatch(withdrawGoing(Number(CycleId)))}
                    >
                        Withdraw Capital
                    </Button>
                )}
            </div>
            <div />
        </div>

    
    );
}

export default WithdrawOngoing;
