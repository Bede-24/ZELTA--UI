import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {CooporativeInstance} from '../../../../Xendfinance'
import _const from '../../../_const';


// this action gets esusu groups
 function isEsusuMember(cycleId : number){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        try{

            console.log(cycleId)
            
            const res = await CooporativeInstance().doesCycleMemberExist(cycleId);

            // console.log(res,  'is memeber')
            dispatch({type:_const.IS_COOPORATIVE_MEMBER, payload: res})
            
            dispatch(loader(id));
        }
        catch(err){
            // notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default isEsusuMember;