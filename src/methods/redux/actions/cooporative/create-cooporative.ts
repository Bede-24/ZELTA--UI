import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {CooporativeInstance} from '../../../../Xendfinance'
import _const from '../../../_const';
import Swal from 'sweetalert2'


type EsusuCycle = {
    groupId: number
    cycleStakeAmount: any
    payoutIntervalInSeconds: number
    startTimeInSeconds: number
    maxMembers: number
  }

// this action gets esusu groups
 function createEsusuCycles(args : EsusuCycle){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));

        try{
            
            const res = await CooporativeInstance().create(args);

            const arrayOpfProperties = Object.keys(res)
            if(arrayOpfProperties.includes('status')){
                console.log(res,  'cycle')
                Swal.fire('success', 'created successfully.', 'success',)
            }else( Swal.fire('Error', 'something happened ', 'error' ) )
            
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' )
            dispatch(loader(id));
        }
    }
}
export default createEsusuCycles;