import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import XendFinance from '../../../init'

const sdkInstance = new XendFinance();


// this action gets esusu groups
 function flexibleWithdrawal(depositAmount : any){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));

        try{
            
            const res = await sdkInstance.individual.flexibleWithdrawal(depositAmount);
            console.log(res, 'res is consled')
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default flexibleWithdrawal;