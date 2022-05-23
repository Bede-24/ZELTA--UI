import _const from "../../_const";

const init = {
  btc : 0,
  eth : 0,
  bnb : 0,
  xrp : 0,
  doge : 0,
  bch : 0,
  trx : 0,
  usdt : 0,
  safemoon : 0,
  ada : 0

};

type Action = {
  type: string
  payload: any
  [key: string]: string
}

function usersReducer(state = init, action: Action) {

  switch (action.type) {

    // case _const.GET_BTC_BALANCE:
    //   return { ...state, btc: action.payload }

    // case _const.GET_ETH_BALANCE:
    //     return {...state, eth : action.payload}

    // case _const.GET_BNB_BALANCE:
    //   return {...state, bnb : action.payload}

    // case _const.GET_XRP_BALANCE:
    //   return {...state, xrp : action.payload}

    // case _const.GET_DOGE_BALANCE:
    //   return {...state, doge : action.payload}

    // case _const.GET_BCH_BALANCE:
    //   return {...state, bch : action.payload}

    // case _const.GET_TRX_BALANCE:
    //     return {...state, trx : action.payload}

    // case _const.GET_USDT_BALANCE:
    //     return {...state, usdt : action.payload}

    // case _const.GET_SAFEMOON_BALANCE:
    //     return {...state, safemoon : action.payload}

    // case _const.GET_ADA_BALANCE:
    //     return {...state, ada : action.payload}

    default: return state;
  }

}


export default usersReducer;
