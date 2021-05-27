import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {EsusuInstance} from '../../../../Xendfinance'
import _const from '../../../_const';

// this action gets esusu groups
 function getContributions(){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));

        try{

            let res = await EsusuInstance().contrubution();

                dispatch({type: _const.ESUSU_CONTRIBUTIONS, payload:res});
            
            dispatch(loader(id));
        }
        catch(err){
            // notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default getContributions;