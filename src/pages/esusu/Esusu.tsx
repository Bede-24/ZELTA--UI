import React, { ReactChild, ReactNode, useEffect } from "react";
import Layout from '../components/layout/Layout'
import TopBar from '../esusu/TopBar'
import Monies from './EsusuMonies'
import SearchTab from './SearchTab'
import EsusuGroups from './EsusuCycles'
import getEsusuCycles  from '../../methods/redux/actions/esusu/get-contributions'
import { useDispatch, useSelector } from "react-redux";
import EmptyList from "../components/EmptyList";

function Esusu(){

    const dispatch = useDispatch();
    
    const { contributions } = useSelector((state : any) => state.esusu)

    useEffect(() =>{
        dispatch(getEsusuCycles())
    },[])


    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SearchTab />
                {contributions.length === 0 && <EmptyList message='No Cycles' />}
                {contributions.length > 0 && (
                    contributions.map((cycle:any, i:any) => ( <EsusuGroups props={cycle} />) )
                )}   
                
            </div>    
        </Layout>
    )

}
export default Esusu;