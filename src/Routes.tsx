import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom';
import Personal from './pages/Dashboard'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Personal} />
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;