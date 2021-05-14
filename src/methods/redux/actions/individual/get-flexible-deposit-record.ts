import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import XendFinance from '../../../init'
import _const from '../../../_const';

const sdkInstance = new XendFinance();


// this action gets esusu groups
 function getFlexibleDepositRecordForCurrentUser(){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));

        try{
            
            let res = await sdkInstance.individual.flexibleDepositInformation();
            const arrayOfResProperties = Object.keys(res);
            if(arrayOfResProperties.includes('balance')){
                dispatch({type: _const.FLEXIBLE_DEPOSIT_RECORD, payload: res});
            }
            else{
                res = { balance: 0.00, derivativeWithdrawn: 0.00, shareBalance: 0.00 }
                dispatch({type: _const.FLEXIBLE_DEPOSIT_RECORD, payload: res});
            }

            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default getFlexibleDepositRecordForCurrentUser;