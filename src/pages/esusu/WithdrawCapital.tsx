import React from 'react';
import { useDispatch } from 'react-redux';
import withdrawcapital from '../../methods/redux/actions/esusu/withdraw-capital';
import Button from '../components/Button';
import moment from 'moment';

type Props = {
    cycleInfo: any;
    IsMember : any;
};

function WithdrawEsusuCapital(props: Props) {
    
    const dispatch = useDispatch();
    
    const {  CycleId,  CycleState } = props.cycleInfo;
    const { IsMember } = props.IsMember;


    return (
        <div>
            <div>
                {IsMember === true &&  (
                    
                    <Button
                        // disabled={!nextPayoutHasReached}
                        onClick={() => dispatch(withdrawcapital(Number(CycleId)))}
                    >
                        Withdraw Capital
                    </Button>
                )}
            </div>
            <div />
        </div>

    );
}
export default WithdrawEsusuCapital;
