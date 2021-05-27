import _const from '../../_const';

const init = {
    esusucycles: [],
    contributions : [],
    IsMember : false
};

type Action = {
    type: string;
    payload: any;
    [key: string]: string;
};

function esusuReducer(state = init, action: Action) {
    switch (action.type) {
        case _const.ALL_ESUSU_CYCLES_BY_GROUPID:
            return { ...state, esusucycles: action.payload };

        case _const.IS_ESUSU_MEMBER:
            return { ...state, IsMember: action.payload };

        case _const.ESUSU_CONTRIBUTIONS:
            return { ...state, contributions: action.payload };
            
        default:
            return state;
    }
}

export default esusuReducer;
