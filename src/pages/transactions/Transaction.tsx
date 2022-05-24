import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layout/Layout";
import DepositTransaction from './DepositTransaction';
import WithdrawalTransaction from "./WithdrawalTransaction";
import getDepositTransaction from '../../methods/redux/actions/transaction/get-user-deposit-transaction'
import getWithdrawalTransaction from '../../methods/redux/actions/transaction/get-user-withdrawals'
import Button from "../components/Button";

function Transaction(){

    const dispatch = useDispatch();

    let depositTransactions = useSelector((store : any) => store.transaction.depositTransactions )
    depositTransactions = depositTransactions.reverse();

    let withdrawalTransaction = useSelector((store : any) => store.transaction.withdrawalTransaction )
    withdrawalTransaction = withdrawalTransaction.reverse();

    useEffect(() =>{
  
        dispatch(getDepositTransaction());
        dispatch(getWithdrawalTransaction());
    }, [])
  
const array = [
    {
        id : '60c8e09726325233dc8af84b',
        status : "pending",
        amount : 0.06,
        coin : "BTC",
        cryptoAddress : "bc1q7lfnxgh3e9ny7s075cczknr6ml4ldn2z6l8uyp",
        // createdAt : 2021-06-11T17:39:56.358+00:00,

    },
    {
        id : '60c8e09726325233dc8af84b',
        status : "declined",
        amount : 0.06,
        coin : "BNB",
        cryptoAddress : "bc1q7lfnxgh3e9ny7s075cczknr6ml4ldn2z6l8uyp",
    },
    {
        id : '60c8e09726325233dc8af84b',
        status : "completed",
        amount : 0.06,
        coin : "BNB",
        cryptoAddress : "bc1q7lfnxgh3e9ny7s075cczknr6ml4ldn2z6l8uyp",
    }
]
    return (     
        <Layout>
            <div>
                <div className="display-flex">
                    <DepositTransaction  data={array}/>
                    <WithdrawalTransaction data={array} />
                </div>
            </div>
             
        </Layout>
    )
}
export default Transaction;