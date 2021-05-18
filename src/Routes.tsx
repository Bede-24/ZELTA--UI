import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Personal from './pages/personal/Personal'
import Esusu from './pages/esusu/Esusu'
import Cooporative from './pages/cooporative/Cooporative'
import MyEsusuGroups from './pages/esusu/group/MyEsusuGroups'
import MyCooporativeGroups from './pages/cooporative/group/MyCooporativeGroup'
import MyCooporativeCycles from './pages/cooporative/group/CyclesInGroup'
import MyEsusuCycles from './pages/esusu/group/CyclesInGroup'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Personal} />
                <Route exact path="/esusu" component={Esusu} />
                <Route exact path="/cooporative" component={Cooporative} />
                <Route exact path="/MyEsusuGroups" component={MyEsusuGroups} />
                <Route exact path="/MyCooporativeGroups" component={MyCooporativeGroups} />
                <Route exact path="/MyCooporativeCycles" component={MyCooporativeCycles} />
                <Route exact path="/MyEsusuCycles" component={MyEsusuCycles} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;