import React, { ReactChild, ReactNode, useState } from "react";
import Button from "./components/Button";
import Modal from './components/Modal'
// import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch } from "react-redux";
import InputNumber from "./components/InputNumber";
import Input from "./components/Input";
import stake from '../methods/redux/actions/stake'


function FlexibleDeposit(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [amount, setamount] = useState(0);
 

    function submitDepostForm(e: any) {
        e.preventDefault();
        const data = {amount}
        dispatch(stake(data));
        setamount(0);
        setvisible(false);
        //
    }

    return(
        <div>
            <Button 
                block
                onClick={() => 
                    {setvisible(true)
                }}
            >
                {' Stake '} 
            </Button>
            <Modal visible={visible} onCancel={() => setvisible(false)} title='Stake Zelta Token'>
                <div>
                    <form onSubmit={submitDepostForm}>
                        <div className="mt2">
                            <InputNumber
                                value={amount}
                                required
                                label="Stake Amount"
                                onChange={(e : any)  => setamount(e) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Stake
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default FlexibleDeposit;

