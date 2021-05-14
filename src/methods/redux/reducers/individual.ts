import _const from '../../_const';

const init = {
    individualRecord: {},
    totalBalance: '0',
    totalWithdrawn: '0',
};

type Action = {
    type: string;
    payload: any;
};

function IndividualReducer(state = init, action: Action) {
    switch (action.type) {
        case _const.FLEXIBLE_DEPOSIT_RECORD:
            return {
                ...state,
                individualRecord: action.payload,
                totalBalance: action.payload.derivativeBalance,
                totalWithdrawn: action.payload.derivativeWithdrawn,
            };

        default:
            return state;
    }
}

export default IndividualReducer;
