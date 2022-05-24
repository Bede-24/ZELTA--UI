import _const from "../../_const";

const init = {
    tokenPrice : 0

};


type Action = {
  type: string
  payload: any
  [key: string]: string
}

function usersReducer(state = init, action: Action) {

  switch (action.type) {

    case _const.ZELTA_TOKEN_PRICE:
        return {...state, tokenPrice : action.payload}

    default: return state;
  }

}


export default usersReducer;
