import _const from '../../_const';

type Action = {
    type: string;
    payload: any;
};

const initialState = {
    address: '',
    wallet: [],
    walletCreated : false,
};

const ConnectWalletReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case _const.WALLET_CREATED:
            return { ...state, walletCreated: action.payload };

        case _const.CREATED_WALLET:
            return {...state, wallet: action.payload};
            
        case _const.ADDRESS:
            return {...state, address: action.payload}
        default:
            return state;
    }
};

export default ConnectWalletReducer;
