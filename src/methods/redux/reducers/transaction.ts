import _const from "../../_const";

const init = {
    depositTransactions : [],
    withdrawalTransaction : [],

};

type Action = {
  type: string
  payload: any
  [key: string]: string
}

function transactionReducer(state = init, action: Action) {


  switch (action.type) {

    case _const.DEPOSIT_TRANSACTION_HISTORY:
      return { ...state, depositTransactions: action.payload }

    case _const.WITHDRAWAL_TRANSACTION_HISTORY:
      return { ...state, withdrawalTransaction: action.payload }

    default: return state;
  }

}


export default transactionReducer;
