import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {CooporativeInstance} from '../../../../Xendfinance'
import _const from '../../../_const';
import Swal from 'sweetalert2'


// this action gets esusu groups
 function withdrawCapital(cycleId : number){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        try{

            const res = await CooporativeInstance().withdrawCapital(cycleId);

            const arrayOpfProperties = Object.keys(res);
            if(arrayOpfProperties.includes('status') && res.status === true){
                Swal.fire('success', 'withdrawal successfully.', 'success',)
            }else( Swal.fire('Error', 'something happened ', 'error' ) )

            console.log(res,  'withdraw capital response')
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' )
            dispatch(loader(id));
        }
    }
}
export default withdrawCapital;