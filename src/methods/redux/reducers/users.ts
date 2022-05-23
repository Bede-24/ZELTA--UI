import _const from "../../_const";

const init = {
  users: [],
  user : [],
  balance : [],
  depostSuccessful : false,
  walletConnected : false,
  address : '',
};

type Action = {
  type: string
  payload: any
  [key: string]: string
}

function usersReducer(state = init, action: Action) {


  switch (action.type) {

    case _const.GET_ALL_USERS:
      return { ...state, users: action.payload }

    case _const.GET_USER_BY_ID:
      return {...state, user : action.payload }


    case _const.USER_BALANCE:
      return { ...state, balance : action.payload}

    case _const.DEPOSIT_SUCCESSFUL:
        return { ...state, depostSuccessful : action.payload}

    case _const.WALLET_CONNECTED:
        return {...state, walletConnected : action.payload}
    case _const.ADDRESS:
        return {...state, address : action.payload}


    default: return state;
  }

}


export default usersReducer;
