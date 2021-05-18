import React, { ReactChild, ReactNode } from "react";
import Button from "../components/Button";


function CooporativeGroups(){

    return(
            <div className='esusu-cycles'>
                <div className='esusu-cycle-status'>
                    <div className='esusu-status-text'>pending</div>
                </div>  
                <div className="flex">
                    <div className='esusu-cycle-symbol'>
                        MG
                    </div>
                    <div className='esusu-cycle-name'>
                        Medical Students Group
                    </div>
                </div>
                <div className="flex justify-space-between ">
                    <div className="mt1">
                        <div className="esusu-cycle-label ml1">
                            <div className="mr1">Contribution</div>
                        </div>
                        <div className='esusu-cycle-value'>
                            2,000 DAI
                        </div>
                    </div>
                    <div className="mt1">
                        <div className="esusu-cycle-label">
                            <div className="mr1">Payout Interval</div>
                        </div>
                        <div className='esusu-cycle-value'>
                            12 hours
                        </div>
                    </div>
                    <div className="mt1">
                        <div className="esusu-cycle-label">
                            <div className="mr1">Available Slots</div>
                        </div>
                        <div className='esusu-cycle-value'>
                            0 of 3
                        </div>
                    </div>
                    <div className="esusu-cycle-join-button">
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
export default CooporativeGroups;