import { useHistory } from 'react-router';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout'
import TopBar from '../TopBar'
import SearchTab from './CycleSearchTab'
import getEsusuCycles from '../../../methods/redux/actions/esusu/get-esusu-cycles'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyList from '../../components/EmptyList'
import EsusuCycle from './EsusuCycle'
import { useParams } from 'react-router-dom';

function MyEsusuCycles(){

    const history = useHistory();
    const dispatch = useDispatch();

    const params : any = useParams();
   
    const {esusucycles} = useSelector((state : any) => state.esusu)


    useEffect(() =>{
        dispatch(getEsusuCycles(params.id))
    },[])

    return(
        <Layout>
            <div>
            <TopBar />
            <SearchTab />
            {esusucycles.length === 0 && <EmptyList message='No Cycles' />}
            {esusucycles.length > 0 && (
                esusucycles.map((cycle:any, i:any) => ( < EsusuCycle props={cycle} />) )
            )}   
            </div>
        </Layout>
    )
}
export default MyEsusuCycles;