import React, { ReactChild, ReactNode, useState } from "react";
import Button from "./components/Button";
import Modal from './components/Modal'
// import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch, useSelector } from "react-redux";
// import InputNumber from "./components/InputNumber";
import Input from "./components/Input";
import withdraw from "../methods/redux/actions/send/withdraw";
import Select from "./components/Select";


function FlexibleWithdrawal(){

    const dispatch = useDispatch();

    const tokenPrice = useSelector((state : any) => state.prices.tokenPrice)
    
    const [visible, setvisible ] = useState(false)
    const [amount, setamount] = useState(0);
    // const [cryptoAddress, setaddress] = useState('');


    function submitDepostForm(e: any) {
        e.preventDefault();
        let amountInUSD = tokenPrice * amount;
        const data = { amount : Number(amountInUSD)}
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
                            <Input
                                value={amount}
                                required
                                label="Withdrawal Amount in ZLT"
                                onChange={(e : any)  => setamount(e.target.value) }
                            />
                        </div>
                        {/* <div className="mt2">
                            <Select label="Select Withdrawal Token">
                                
                            </Select>
                        </div> */}
                        <p>submit your withdrawal request and you will recieve your ZLT tokens into your ZLT wallet once your request is confirmed.</p>
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

