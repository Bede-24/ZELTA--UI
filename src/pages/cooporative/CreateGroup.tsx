import React, { ReactChild, ReactNode, useState } from "react";
import Button from "../components/Button";
import searchLogo from '../../images/search.svg'
import plusCircle from '../../images/pluscircle.svg'
import Input from '../components/Input'
import Modal from '../components/Modal'
import { groupNameKeyDown, groupSymbolKeyDown } from "../../methods/utils/group-alphabet-filter";
import {createCooporativeGroup} from '../../methods/redux/actions/groups/create-group'
import { useDispatch } from "react-redux";
import { notify } from "../components/Notifier";
import EE from 'event-emitter'


function CreateEsusuGroup(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [cooporativeGroupName, setCooporativeGroupName] = useState('');
    const [cooporativeGroupSymbol, setCooporativeGroupSymbol] = useState('');

 

    function submitCreateForm(e: any) {
        e.preventDefault();
       
            if (cooporativeGroupName.length < 5 || cooporativeGroupSymbol.length < 3) {
                alert('Please review the groups details you have provided and make sure name is more than 5 letters and symbol is up to 3 letters')
                // notify(
                //     'warning',
                //     'Please review the groups details you have provided and make sure name is more than 5 letters and symbol is up to 3 letters',
                // );
            } else {
                dispatch(createCooporativeGroup(cooporativeGroupName.toLowerCase(), cooporativeGroupSymbol.toUpperCase()));
                setCooporativeGroupName('');
                setCooporativeGroupSymbol('');
                setvisible(false);
            }
        
    }

    return(
        <div className='create-esusu-group-button'>
            <Button 
                onClick={() => 
                    {setvisible(true)
                }}
            >
                <div className='create-esusu-group-button'>
                    <span>
                        <img src={plusCircle} alt="search" className='plus-img'/>
                    </span>
                    Create Cooporative Group
                </div>
            </Button>
            <Modal visible={visible} onCancel={() => setvisible(false)} title='Create Esusu Group'>
                <div>
                    <form onSubmit={submitCreateForm}>
                        <div className="mt2">
                            <Input
                                value={cooporativeGroupName}
                                required
                                minLength={5}
                                autoFocus={true}
                                label="Group Name"
                                onKeyDown={(e) => groupNameKeyDown(e, cooporativeGroupName, setCooporativeGroupName)}
                            />
                        </div>
                        <div className="mt2">
                            <Input
                                value={cooporativeGroupSymbol}
                                required
                                label="Create Symbol"
                                minLength={3}
                                maxLength={3}
                                onKeyDown={(e) => groupSymbolKeyDown(e, cooporativeGroupSymbol, setCooporativeGroupSymbol)}
                            />
                            <div className="font12" style={{ marginTop: 5 }}>
                                A three letter unique identifier for the group
                            </div>
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Create Cooporative Group
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default CreateEsusuGroup;

