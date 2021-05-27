import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {EsusuInstance} from '../../../../Xendfinance'
import _const from '../../../_const';
import Swal from 'sweetalert2'


type EsusuCycle = {
    groupId: number
    depositAmount: any
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
            
            const res = await EsusuInstance().create(args);
            console.log(res)

            const arrayOfProperties = Object.keys(res);

            if(arrayOfProperties.includes('status')){
                Swal.fire('success', 'cycle created successfully.', 'success',)
            } else( Swal.fire('Error', 'something happened ', 'error' ) )
           
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' ) 
            console.log(err)
            dispatch(loader(id));
        }
    }
}
export default createEsusuCycles;