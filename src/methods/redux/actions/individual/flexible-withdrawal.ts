import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {PersonalInstance} from '../../../../Xendfinance'
import Swal from 'sweetalert2'

// this action gets esusu groups
 function flexibleWithdrawal(depositAmount : any){  
    return async (dispatch: Function) => {
        const id = randomgen();
        dispatch(loader(id));

        try{   
           
            const res = await PersonalInstance().withdrawFlexible(depositAmount);

            const arrayOpfProperties = Object.keys(res);
            if(arrayOpfProperties.includes('status') && res.status === true){
                Swal.fire('success', 'deposit successful.', 'success',)
            } else( Swal.fire('Error', 'something happened ', 'error' ) )

            console.log(res, 'res is consled')
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' )
            dispatch(loader(id));
        }
    }
}
export default flexibleWithdrawal;