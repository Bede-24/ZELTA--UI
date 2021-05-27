import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import esusu from './reducers/esusu';
import individual from './reducers/individual';
import groups from './reducers/groups';
import cooporative from './reducers/cooporative';
import ConnectWalletReducer from './reducers/ConnectWalletReducer';
import activity from './reducers/activity'

const reducers = combineReducers({
    esusu,
    groups,
    cooporative,
    individual,
    ConnectWalletReducer,
    activity,
});



async function reduxStore() {
    const initstore: any = undefined;

    return createStore(
        reducers,
        initstore,
        composeWithDevTools(
            applyMiddleware(
                thunk,
                // saver
            ),
        ),
    );
}

export default reduxStore;
