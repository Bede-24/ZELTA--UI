import React, { ReactChild, ReactNode, useState } from "react";
import Button from "../../components/Button";
import plusCircle from '../../../images/pluscircle.svg'
import Modal from '../../components/Modal'
import createEsusu from '../../../methods/redux/actions/esusu/create-esusu-cycle'
import { useDispatch } from "react-redux";
import { notify } from "../../components/Notifier";
import moment from "moment";
import InputNumber from "../../components/InputNumber";
import TimeIntervalSelector from "../../components/TimeIntervalSelector";
import TimePicker from "../../components/TimePicker";
import DatePicker from "../../components/DatePicker";
 import web3 from 'web3'


function CreateCooporativeCycle(){

    const dispatch = useDispatch();
    
    const [visible, setvisible ] = useState(false)
    const [esusuData, setEsusuData] = useState({
        maxMembers: '2',
        depositAmount: '10',
        interval: '0',
        startDate: moment().format('YYYY-MM-DD'),
        startTime: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm'),
    });

 

    function submitCreateForm(e: any) {
        e.preventDefault();
       
        if (Number(esusuData.maxMembers) < 2) {
            notify('error', 'Please there has to be 2 or more members of a cycle to create a cycle.');
        } else{
            if (Number(esusuData.maxMembers) > 1000) {
                notify('error', '1,000 is the maximum number for members in a cycle.');
            } else if (Number(esusuData.depositAmount) < 10) {
                notify('error', 'Cannot create cycle with contribution amount less than 10 BUSD');
            } else if (Number(esusuData.interval) === 0) {
                notify('error', 'Cycle duration cannot be zero (0)');
            } else{
                //
                const date = new Date(esusuData.startDate + ' ' + moment(esusuData.startTime).format('HH:mm'));

                const depositAmount = web3.utils.toWei(esusuData.depositAmount, 'ether');

                console.log(Number(esusuData.maxMembers), depositAmount, Number(esusuData.interval),moment(date.valueOf()).unix(),  1)

                dispatch(
                    createEsusu(
                        {
                            maxMembers: Number(esusuData.maxMembers),
                            depositAmount,
                            payoutIntervalInSeconds: Number(esusuData.interval),
                            startTimeInSeconds: moment(date.valueOf()).unix(),
                            groupId: 1,
                        },
                    ),
                );
            }

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
                    Create Esusu Cycle
                </div>
            </Button>
            <Modal 
                visible={visible} 
                onCancel={() => {
                    setvisible(false)
                    setEsusuData({
                        ...esusuData,
                        maxMembers: '2',
                        depositAmount: '10',
                        startDate: moment().format('YYYY-MM-DD'),
                        startTime: moment().format('YYYY-MM-DD HH:mm'),
                    });
                }
                } 
                title='Create Esusu Group'
            >
                <div>
                    <form onSubmit={submitCreateForm}>
                        <div className="mt2">
                            <InputNumber
                                required
                                min={10}
                                label="Deposit Amount"
                                value={esusuData.depositAmount}
                                onChange={(value) => setEsusuData({ ...esusuData, depositAmount: value })}
                            />
                        </div>
                        <div className="mt2">
                            <TimeIntervalSelector onChange={(e) => setEsusuData({ ...esusuData, interval: e })} />
                        </div>
                        <div className="date-time-side-by-side mt2">
                            <div>
                                <DatePicker
                                    value={new Date(esusuData.startDate)}
                                    onChange={(date) => setEsusuData({ ...esusuData, startDate: date })}
                                    minDate={new Date()}
                                />
                            </div>
                            <div>
                                <TimePicker
                                    value={new Date(esusuData.startTime)}
                                    onChange={(time) => setEsusuData({ ...esusuData, startTime: time })}
                                />
                            </div>
                        </div>
                        <div className="mt2">
                            <InputNumber
                                required
                                label="Max Members"
                                value={esusuData.maxMembers}
                                min={2}
                                onChange={(e) => setEsusuData({ ...esusuData, maxMembers: e })}
                            />
                        </div>
                        <div className="mt5 flex justify-space-around">
                            <Button block htmlType="submit">
                                Create Cycle
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}
export default CreateCooporativeCycle;

