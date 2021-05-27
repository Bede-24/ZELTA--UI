import _const from '../../_const';

const init = {
    coopCycles: [],
    IsMember : false,
    pricePerPoolShare: 0,
    contributions: [],
};

type Action = {
    type: string;
    payload: any;
    [key: string]: string;
};

function cooporativeReducer(state = init, action: Action) {
    switch (action.type) {
        case _const.ALL_COOPORATIVE_CYCLES_BY_CREATOR:
            return { ...state, coopCycles: action.payload };

        case _const.IS_COOPORATIVE_MEMBER:
            return { ...state, IsMember: action.payload}

        case _const.COOPERATIVE_CONTRIBUTION:
            return { ...state, contributions: action.payload };

        case _const.PRICE_PER_POOL_SHARE:
            return { ...state, pricePerPoolShare: action.payload };

        default:
            return state;
    }
}

export default cooporativeReducer;
