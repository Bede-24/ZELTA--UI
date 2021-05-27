import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {CooporativeInstance} from '../../../../Xendfinance'
import _const from '../../../_const';

// this action gets esusu groups
 function getCoopCycles(){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'esusu'

        try{
            
            let res = await CooporativeInstance().getAllCycles();
            const last2Cycles = res.slice(res.length - 2);

            if(last2Cycles.length > 0){
                dispatch({type: _const.ALL_COOPORATIVE_CYCLES_BY_CREATOR, payload: last2Cycles});
            }

            console.log(last2Cycles)
            
            dispatch(loader(id));
        }
        catch(err){
            // notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default getCoopCycles;