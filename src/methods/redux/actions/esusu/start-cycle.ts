import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {EsusuInstance} from '../../../../Xendfinance'
import _const from '../../../_const';
import Swal from 'sweetalert2'


// this action gets esusu groups
 function startcycle(cycleId : number){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        try{

            const res = await EsusuInstance().start(cycleId);

            const arrayOpfProperties = Object.keys(res)
            if(arrayOpfProperties.includes('status') && res.status === true){
                console.log(res,  'start cycle')
                dispatch({type:_const.IS_ESUSU_MEMBER, payload: res})
                Swal.fire('success', 'started successfully.', 'success',)
            }else( Swal.fire('Error', 'something happened ', 'error' ) )
            
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' ) 
            dispatch(loader(id));
        }
    }
}
export default startcycle;