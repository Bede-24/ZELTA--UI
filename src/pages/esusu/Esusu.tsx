import React, { ReactChild, ReactNode, useEffect } from "react";
import Layout from '../components/layout/Layout'
import TopBar from '../esusu/TopBar'
import Monies from './EsusuMonies'
import SearchTab from './SearchTab'
import EsusuGroups from './EsusuCycles'
import getEsusuCycles  from '../../methods/redux/actions/esusu/get-esusu-cycles'
import { useDispatch } from "react-redux";

function Personal(){

    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getEsusuCycles())
    })

    return(
        <Layout> 
            <div>
                <TopBar />
                <Monies />
                <SearchTab />
                <EsusuGroups />
                <EsusuGroups />
                <EsusuGroups />
            </div>    
        </Layout>
    )

}
export default Personal;