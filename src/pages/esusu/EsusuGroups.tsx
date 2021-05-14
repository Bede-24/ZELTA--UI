import React, { ReactChild, ReactNode } from "react";
import Button from "../components/Button";
import Web3 from 'web3'
import { flattenDiagnosticMessageText } from "typescript";



function EsusuGroups(){


    return(
            <div className='esusu-groups'>
               <div className='esusu-group-status'>
                    <div className='esusu-status-text'>pending</div>
                </div>
                <div className="flex">
                    <div className='esusu-group-symbol'>
                        MG
                    </div>
                    <div className='esusu-group-name'>
                        Medical Students Group
                    </div>
                </div>
                <div className="flex justify-space-between">
                    <div className="mt1">
                        <div className="esusu-group-label ml1">
                            <div className="mr1">Contribution</div>
                        </div>
                        <div className='esusu-group-value'>
                            2,000 DAI
                        </div>
                    </div>
                    <div className="mt1">
                        <div className="esusu-group-label">
                            <div className="mr1">Payout Interval</div>
                        </div>
                        <div className='esusu-group-value'>
                            12 hours
                        </div>
                    </div>
                    <div className="mt1">
                        <div className="esusu-group-label">
                            <div className="mr1">Available Slots</div>
                        </div>
                        <div className='esusu-group-value'>
                            0 of 3
                        </div>
                    </div>
                    <div className="esusu-group-join-button">
                        <Button
                            type='secondary'
                        >
                            Join
                        </Button>
                </div>
                </div>
               
            </div>
            
    )
}
export default EsusuGroups;

