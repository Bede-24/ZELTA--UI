import _const from '../../_const';

const init = {
    count: 0,
};

type Action = {
    type: string;
    payload: any;
    [key: string]: string;
};

function esusuReducer(state = init, action: Action) {
    // switch (action.type) {
    //     case _const.WALLET_CREATED:
    //         return { ...state, count: action.payload };
            
    //     default:
    //         return state;
    // }
}

export default esusuReducer;
