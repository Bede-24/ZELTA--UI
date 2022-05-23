
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import _const from '../_const';
import users from './reducers/users'
import transaction from './reducers/transaction'
import prices from './reducers/prices'

const reducers = combineReducers({
    users, transaction, prices,
})

async function reduxstore() {
  let initstore: any = undefined;

  return createStore(
    reducers,
    initstore,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        // saver
      ),
    )
  )
}
export default reduxstore;