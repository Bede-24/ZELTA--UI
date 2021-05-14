import React, { ReactChild, ReactNode, useState } from "react";
import Button from "../components/Button";
import searchLogo from '../../images/search.svg'
import plusCircle from '../../images/pluscircle.svg'
import Input from '../components/Input'
import Modal from '../components/Modal'
import CreateEsusuGroup from './CreateGroup'
import { createTextSpan } from "typescript";

function SearchTab(){

    const [visible, setVisible ] = useState(false)

    return(
            <div className='search-tab flex  justify-space-around'>
                <div className="mt1">
                    <div className="search-bar">
                        <img src={searchLogo} alt="search" className='search-img'/>
                        <Input 
                            placeholder='Search Esusu Groups'
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
                    < CreateEsusuGroup />
                </div> 
            </div>
)


}
export default SearchTab;
