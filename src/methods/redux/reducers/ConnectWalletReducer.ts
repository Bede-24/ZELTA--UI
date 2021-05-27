import _const from '../../_const';

type Action = {
    type: string;
    payload: any;
};

const initialState = {
    address: '',
    wallet: [],
    walletCreated : false,
    currency : '',
    sharecurrency : '',
};

const ConnectWalletReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case _const.WALLET_CREATED:
            return { ...state, walletCreated: action.payload };

        case _const.CREATED_WALLET:
            return {...state, wallet: action.payload};
            
        case _const.ADDRESS:
            return {...state, address: action.payload}

        case _const.CURRENCY:
            return {...state, currency: action.payload}

        case _const.SHARE_CURRENCY:
            return {...state, sharecurrency: action.payload}

        default:
            return state;
    }
};

export default ConnectWalletReducer;
