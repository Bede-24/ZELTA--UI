import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import Button from "./components/Button";
import Modal from './components/Modal'
import gettokenprice from '../methods/redux/actions/get-token-prices'
import { useDispatch, useSelector } from "react-redux";
// import InputNumber from "./components/InputNumber";
import Input from "./components/Input";
import commas from "./components/commas";
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import { cryptoAddressReturner } from "../methods/utils/currencies";
import deposit from '../methods/redux/actions/recieve/deposit'


function FlexibleDeposit(){

    const dispatch = useDispatch();

    const tokenPrice = useSelector((state : any) => state.prices.tokenPrice)



    
    const [visible, setvisible ] = useState(false)
    const [secondVisible, setSecondVisible ] = useState(false)
    const [depositamount, setdepositamount] = useState(0);
 

    function submitDepostForm(e: any) {
        e.preventDefault();
            let amountInUSD = tokenPrice * depositamount;
            const data ={ amount : Number(amountInUSD)}
            dispatch(deposit(data));
            setdepositamount(0);
            setSecondVisible(false);
        
    }
    function checkDepositAmount(){
        // let depositAmountInZelta = Number(depositamount)/tokenPrice;
        let minimumTokendepostitInUSD = 5000 * tokenPrice;

        if(depositamount < 5000){
            let message = `deposit has to be more than 5,000 ZLT ( $${minimumTokendepostitInUSD} )`
            toast.info(message)
            setvisible(false)
        }
        else{
            setvisible(false)
            setSecondVisible(true)
        }
    }
    async function copyAddress(e : any){
        // e.preventDefault();
        await navigator.clipboard.writeText(cryptoAddressReturner());
        toast.success('address copied successfully')
    }
    useEffect(() =>{
        dispatch(gettokenprice());
    }, [])
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
                            <Input
                                value={depositamount}
                                required
                                label="Deposit Amount in ZLT"
                                onChange={(e : any)  => setdepositamount(e.target.value) }
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block onClick={() => {
                                    checkDepositAmount()
                                }}>
                                Next
                            </Button>
                        </div>
                </div>
            </Modal>
            <Modal visible={secondVisible} onCancel={() => setSecondVisible(false)} title='Deposit To staking wallet'>
                <div>
                    <div className="mt2">
                            <p>To complete your deposit, you are to send exacly {commas(depositamount).slice(0,-5)} ZLT
                            to the Staking Pool Contract address below.</p>
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
                        <p>please click this button only after you have sent ZLT to the Staking Pool Contract address above</p>
                        </div>
                        
                        <div className=" flex justify-space-around">
                            <Button block htmlType="submit">
                                I have Deposited BNB
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

