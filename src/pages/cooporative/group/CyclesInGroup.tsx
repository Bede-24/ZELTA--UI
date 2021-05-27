import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout'
import TopBar from '../TopBar'
import SearchTab from './CycleSearchTab'
import getAllCooporatives from '../../../methods/redux/actions/cooporative/get-cooporative-cycles'
import React, { useEffect } from 'react';
import EmptyList from '../../components/EmptyList';
import CooporativeCycles from './CooporativeCycle'

function MyCooporativeCycles(){


    const history = useHistory();
    const dispatch = useDispatch();

    const {coopCycles} = useSelector((state : any) => state.cooporative)


    useEffect(() =>{
        dispatch(getAllCooporatives())
    },[])
    
    return(
        <Layout>
            <div>
            <TopBar />
            <SearchTab />
            {coopCycles.length === 0 && <EmptyList message='No Cycles' />}
            {coopCycles.length > 0 && (
                coopCycles.map((cycle:any, i:any) => ( < CooporativeCycles props={cycle}/>) )
            )}   
            </div>
        </Layout>
    )
}
export default MyCooporativeCycles;