import React, { ReactChild, ReactNode, useState } from "react";
import searchLogo from '../../../images/search.svg'
import Input from '../../components/Input'
import CreateCooporativeCycle from './CreateCycle'


function CycleSearchTab(){

    return(
            <div className='search-tab flex  justify-space-around'>
                <div className="mt1">
                    <div className="search-bar">
                        <img src={searchLogo} alt="search" className='search-img'/>
                        <Input 
                            placeholder='Search cycle'
                    />
                   
                    </div>
                </div>
                <div className="esusu-filter mt1">
                    {'Filter: '}
                    <select style={{border:'0px', fontSize:'12px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                        <option>play</option>
                    </select>
                </div>
                <div className="mt1">
                    < CreateCooporativeCycle />
                </div> 
            </div>
    )
}
export default CycleSearchTab;
