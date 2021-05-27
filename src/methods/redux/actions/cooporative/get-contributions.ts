import randomgen from '../../../random-gen';
import _const from '../../../_const';
import loader from '../add-to-que';
import {CooporativeInstance } from '../../../../Xendfinance'

function cooperativeContributions() {
    return async (dispatch: Function) => {
        const id = randomgen();
        dispatch(loader(id));

        try {
            //change to contributions
            const cycles = await CooporativeInstance().getAllCycles();
            const slicedcycles = cycles.slice(0,3)

            dispatch({
                type: _const.COOPERATIVE_CONTRIBUTION,
                payload: slicedcycles,
            });

            dispatch(loader(id));
        } catch (e) {
            dispatch(loader(id));
            console.error(e);
        }
    };
}

export default cooperativeContributions;
