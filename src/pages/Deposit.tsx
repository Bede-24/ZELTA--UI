import React, { ReactChild, ReactNode, useState } from "react";
import Button from "./components/Button";
import Modal from './components/Modal'
// import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch } from "react-redux";
import InputNumber from "./components/InputNumber";
import Input from "./components/Input";
import commas from "./components/commas";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { cryptoAddressReturner } from "../methods/utils/currencies";
import deposit from '../methods/redux/actions/recieve/deposit'


function FlexibleDeposit(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [secondVisible, setSecondVisible ] = useState(false)
    const [depositamount, setdepositamount] = useState(0);
 

    function submitDepostForm(e: any) {
        e.preventDefault();

         const data ={ amount : depositamount}
        dispatch(deposit(data));
        setdepositamount(0);
        setvisible(false);
    }
    async function copyAddress(e : any){
        // e.preventDefault();
        await navigator.clipboard.writeText(cryptoAddressReturner());
        toast.success('address copied successfully')
    }

    return(
        <div>
            <Button 
                block
                onClick={() => 
                    {setvisible(true)
                }}
            >
                {' Deposit '} 
            </Button>
            <Modal visible={visible} onCancel={() => setvisible(false)} title='Deposit To Your Staking Wallet'>
                <div>
                        <div className="mt2">
                            <InputNumber
                                value={depositamount}
                                required
                                label="Deposit Amount in USD"
                                onChange={(e : any)  => setdepositamount(e) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block onClick={() => {
                                setvisible(false)
                                setSecondVisible(true)}}>
                                Next
                            </Button>
                        </div>
                </div>
            </Modal>
            <Modal visible={secondVisible} onCancel={() => setSecondVisible(false)} title='Deposit To staking wallet'>
                <div>
                    <div className="mt2">
                            <p>To complete your deposit, you are to send exacly ${commas(depositamount).slice(0,-5)} worth
                             of BNB to the BNB address below.</p>
                        </div>
                        <div className="mt2">
                            <p>{cryptoAddressReturner()}</p>
                            <Button
                                // block
                                onClick={(e : any) => copyAddress(e)}>
                                Copy Address
                            </Button>
                        </div>
                    <form onSubmit={submitDepostForm}>
                        
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Deposit
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
            <ToastContainer />
        </div>
    )
}
export default FlexibleDeposit;

