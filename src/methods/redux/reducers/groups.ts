import _const from '../../_const';

const init = {
    cgroups: [],
    groupsEsusu: [],
    csingle: {},
    esingle: {},
};

type Action = {
    type: string;
    payload: any;
};

function groupsReducer(state = init, action: Action) {
    // switch (action.type) {
    //     case _const.GROUPS_COOPERATIVE:
    //         return { ...state, cgroups: action.payload };

    //     case _const.SINGLE_GROUP_COOPERATIVE:
    //         return { ...state, csingle: action.payload };

    //     case _const.GROUPS_ESUSU:
    //         return { ...state, groupsEsusu: action.payload };

    //     case _const.SINGLE_GROUP_ESUSU:
    //         return { ...state, esingle: action.payload };


    //     default:
    //         return state;
    // }
}

export default groupsReducer;
