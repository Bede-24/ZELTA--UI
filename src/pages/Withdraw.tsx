import React, { ReactChild, ReactNode, useState } from "react";
import Button from "./components/Button";
import Modal from './components/Modal'
// import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch } from "react-redux";
import InputNumber from "./components/InputNumber";
import Input from "./components/Input";
import withdraw from "../methods/redux/actions/send/withdraw";


function FlexibleWithdrawal(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [amount, setamount] = useState(0);
    const [cryptoAddress, setaddress] = useState('');
 

    function submitDepostForm(e: any) {
        e.preventDefault();
        const data = { amount, cryptoAddress}
        dispatch(withdraw(data));
        setamount(0);
        setvisible(false);
    }

    return(
        <div>
            <Button 
                block
                type='secondary'
                onClick={() => 
                    {setvisible(true)
                }}
            >
                {' Withdraw '} 
            </Button>
            <Modal visible={visible} onCancel={() => setvisible(false)} title='Withdraw Savings'>
                <div>
                    <form onSubmit={submitDepostForm}>
                        <div className="mt2">
                            <InputNumber
                                value={amount}
                                required
                                label="Withdrawal Amount"
                                onChange={(e : any)  => setamount(e) }
                            />
                        </div>
                        <div className="mt2">
                            <Input
                                value={cryptoAddress}
                                required
                                label="Destination Address"
                                onChange={(e : any)  => setaddress(e.target.value) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Withdraw
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default FlexibleWithdrawal;

