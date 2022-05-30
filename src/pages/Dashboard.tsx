import React, { ReactChild, ReactNode, useEffect } from "react";
import Layout from './layout/Layout'
import TopBar from './TopBar'
import Monies from './PersonalMonies'
import SavingsTab from './SavingsTab'
import TransactionTab from './transactions/TransactionsTab'
import { useDispatch, useSelector } from "react-redux";

function Personal(){

    const dispatch = useDispatch();

    // const {individualRecord, totalBalance, totalWithdrawn} = useSelector((state : any) => state.individual )

    useEffect(() =>{
       
    }, [])
    return(
        <Layout> 
            <div className="dashboard-div">
                <TopBar />
                <Monies />
                <SavingsTab />
                <TransactionTab/>
            </div>    
        </Layout>
    )

}
export default Personal;