import React, { ReactChild, ReactNode, useEffect, useState } from "react";
import ViewTransactions from './ViewTransactionsButton'
function SavingsTab(){


    return(
        <div className="personal-savings-tab">
            <div className='share-balance justify-space-around flex mt5 '>
                <ViewTransactions/>
            </div>
        </div>
    )
}
export default SavingsTab;