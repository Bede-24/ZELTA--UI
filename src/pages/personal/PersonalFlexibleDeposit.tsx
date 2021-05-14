import React, { ReactChild, ReactNode, useState } from "react";
import Button from "../components/Button";
import Modal from '../components/Modal'
import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch } from "react-redux";
import InputNumber from "../components/InputNumber";
import Input from "../components/Input";


function FlexibleDeposit(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [depositamount, setdepositamount] = useState(0);
 

    function submitDepostForm(e: any) {
        e.preventDefault();
        dispatch(flexibledeposit(depositamount.toString()));
        setdepositamount(0);
        setvisible(false);
    }

    return(
        <div>
            <Button 
                block
                onClick={() => 
                    {setvisible(true)
                }}
            >
                {' Save '} 
            </Button>
            <Modal visible={visible} onCancel={() => setvisible(false)} title='Deposit To Savings'>
                <div>
                    <form onSubmit={submitDepostForm}>
                        <div className="mt2">
                            <InputNumber
                                value={depositamount}
                                required
                                label="Deposit Amount"
                                onChange={(e : any)  => setdepositamount(e) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Deposit
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default FlexibleDeposit;

