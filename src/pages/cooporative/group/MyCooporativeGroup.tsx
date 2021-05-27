import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout'
import TopBar from '../TopBar'
import {getCooporativeGroup} from '../../../methods/redux/actions/groups/get-groups'
import { useDispatch, useSelector } from 'react-redux';
import { cooporativeNameFilter } from '../../../methods/utils/cooporative-group-identifier'
import EmptyList from '../../components/EmptyList'





function MyCooporativeGroups(){

    const history = useHistory();
    const dispatch = useDispatch();

    const {csingle} = useSelector((state : any) => state.groups)


    useEffect(() =>{
        dispatch(getCooporativeGroup());    
    },[])

    //map groups 
    return(
        <Layout>
            <div>
                <TopBar />
                <div className='esusu-groups-container'>
                {/* mapping of the groups starts here */}

                {csingle.length === 0 && <EmptyList message="No Group" />}
                {csingle.length > 0 && (
                    csingle.map((group : any, i : any) => (
                        <div key={i}>
                            <div className="MyEsusuGroup">
                                <div className="flex">
                                    <div className='esusu-cycle-symbol'>
                                        {group.groupSymbol}
                                    </div>
                                    <div className='esusu-group-name'>
                                        {cooporativeNameFilter(group.groupName)}
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
                                        onClick={() => history.push('/MyCooporativeCycles')}
                                    >
                                        Open
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                )}

                </div>
            </div>
        </Layout>
    )
}
export default MyCooporativeGroups;