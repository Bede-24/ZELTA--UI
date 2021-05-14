import _const from '../../_const';

const init = {
    queue: [],
    backgroundTask: [],
};

type Actions = {
    type: string;
    payload: any;
};

export default function (state = init, action: Actions) {
    switch (action.type) {
        case _const.QUEUE:
            const queue: Array<string> = state.queue;
            const includes = queue.includes(action.payload);
            if (includes) {
                return {
                    ...state,
                    queue: queue.filter((item) => item !== action.payload),
                };
            } else {
                return {
                    ...state,
                    queue: queue.concat(action.payload),
                };
            }

        case _const.BACKGROUND_QUEUE:
            const backgroundQueue: Array<string> = state.backgroundTask;
            const backgroundIncludes = backgroundQueue.includes(action.payload);
            if (backgroundIncludes) {
                return {
                    ...state,
                    backgroundTask: backgroundQueue.filter((item) => item !== action.payload),
                };
            } else {
                return {
                    ...state,
                    backgroundTask: backgroundQueue.concat(action.payload),
                };
            }

        default:
            return state;
    }
}
