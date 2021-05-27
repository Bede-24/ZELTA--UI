import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {EsusuInstance} from '../../../../Xendfinance'
import _const from '../../../_const';

// this action gets esusu groups
 function getEsusuCycles(groupId : any){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));

        try{

            let res = await EsusuInstance().cyclesInGroup(groupId);

            console.log(res, groupId,'group ')
                dispatch({type: _const.ALL_ESUSU_CYCLES_BY_GROUPID, payload:res});
            
            dispatch(loader(id));
        }
        catch(err){
            // notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default getEsusuCycles;