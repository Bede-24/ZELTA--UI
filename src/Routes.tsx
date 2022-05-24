import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Personal from './pages/Dashboard'
import Transaction from './pages/transactions/Transaction'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Personal} />
                <Route exact path="/transactions" component={Transaction} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;