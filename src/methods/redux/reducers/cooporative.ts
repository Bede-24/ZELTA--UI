import _const from '../../_const';

const init = {
    cycles: [],
};

type Action = {
    type: string;
    payload: any;
    [key: string]: string;
};

function cooporativeReducer(state = init, action: Action) {
    // switch (action.type) {
    //     case _const.WALLET_CREATED:
    //         return { ...state, cycles: action.payload };
    //     default:
    //         return state;
    // }
}

export default cooporativeReducer;
