import moment from 'moment';
import { useEffect, useState } from 'react';
import ToolTip from "./Tooltip";
import { setSavingsProtocol, getcurrentSavingsProtocol } from '../../methods/utils/savings-protocol'
import { EsusuInstance } from '../../Xendfinance'                    



function ProtocolSelect(){

    const protocols = EsusuInstance().availableProtocols;

    useEffect(() => {

        const currentprotocol = getcurrentSavingsProtocol();

        if(currentprotocol === '' ){
            setSavingsProtocol(protocols[0][0].name)
        } 
    },[])
    

    return(
        <div className='esusu-protocol-select'>
            <div >
                <span style={{fontSize:'10px'}}><ToolTip  content="This cycle currently has just one member." /></span>
                <select 
                    onChange={(e : any) => setSavingsProtocol(e.target.value)}
                    style={{border:'0px', fontSize:' 10px', color : '#969696', backgroundColor:'#F6F6F6'}}>
                    {/* <option value="venus">Venus   19.3</option>
                    <option value="fortube">Fortube  16.85%</option> */}
                    {protocols.length > 0 && (
                        protocols[0].map((protocol : any, i : any ) => {
                            return <option value={protocol.name} key={i}>{protocol.name} 12.5</option>
                        })
                    )}
                </select>
            </div>
        </div>
    );

}
export default ProtocolSelect;