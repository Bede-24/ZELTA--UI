import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout'
import TopBar from '../TopBar'
import {getEsusuGroup} from '../../../methods/redux/actions/groups/get-groups'
import { useDispatch, useSelector } from 'react-redux';
import { esusuNameFilter } from '../../../methods/utils/esusu-group-identifier'
import EmptyList from '../../components/EmptyList'





function MyEsusuGroups(){

    const history = useHistory();
    const dispatch = useDispatch();

    const {esingle} = useSelector((state : any) => state.groups)

    console.log(esingle)

    useEffect(() =>{
        dispatch(getEsusuGroup());    
    },[])

    //map groups 
    return(
        <Layout>
            <div>
                <TopBar />
                {/* <div className='esusu-groups-container'> */}
                {/* mapping of the groups starts here */}

                {esingle.length === 0 && <EmptyList message="No Group" />}
                {esingle.length > 0 && (
                    esingle.map((group : any, i : any) => (
                        <div key={i}>
                        <div className='esusu-groups-container'>
                            <div className="MyEsusuGroup">
                                <div className="flex">
                                    <div className='esusu-cycle-symbol'>
                                        {group.groupSymbol}
                                    </div>
                                    <div className='esusu-group-name'>
                                        {esusuNameFilter(group.groupName)}
                                    </div>
                                </div>
                                <div className='esusu-group-info'>
                                    Cycles : 4
                                </div>
                                <div className='esusu-group-info'>
                                    Opened : 2
                                </div>
                                <div className='esusu-group-info'>
                                    Closed : 2
                                </div>
                                <div className="open-cycles-button">
                                    <Button
                                        type='secondary'
                                        onClick={() => history.push(`/MyEsusuCycles/${group.groupId}`)}
                                    >
                                        Open
                                    </Button>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))
                )}

               
            </div>
        </Layout>
    )
}
export default MyEsusuGroups;