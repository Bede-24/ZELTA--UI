import React, { ReactChild, ReactNode, useState } from "react";
import Button from "../components/Button";
// import flexibledeposit from '../../methods/redux/actions/individual/flexible-deposit'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


function ViewTransactions(){

    const dispatch = useDispatch();
    const history = useHistory();

    return(
        <div>
            <Button 
                type='secondary'
                block
                onClick={() => 
                {
                    history.push('/transactions')
                }}
            >
                {' View Transactions '} 
            </Button>
          
        </div>
    )
}
export default ViewTransactions;

