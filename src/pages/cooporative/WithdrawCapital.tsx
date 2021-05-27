import React from 'react';
import { useDispatch } from 'react-redux';
import WithdrawCapital from '../../methods/redux/actions/cooporative/withdraw-capital';
import Button from '../components/Button';
import moment from 'moment';

type Props = {
    cycleInfo: any;
    IsMember : any;
};

function WithdrawEsusuROI(props: Props) {
    const dispatch = useDispatch();



    
    const {  CycleId,  cycleStatus } = props.cycleInfo;
    const { IsMember } = props.IsMember;


    return (
        <div>
            <div>
                {IsMember === true &&  (
                    
                    <Button
                        onClick={() => dispatch(WithdrawCapital(Number(CycleId)))}
                    >
                        Withdraw
                    </Button>
                )}
            </div>
            <div />
        </div>
    
    );
}

export default WithdrawEsusuROI;
