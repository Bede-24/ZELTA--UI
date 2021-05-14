import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import XendFinance from '../../../init'

const sdkInstance = new XendFinance();


// this action gets esusu groups
 function getEsusuCycles(){
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'esusu'

        try{
            
            const res = await sdkInstance.esusu.esusuInformation(1)
            console.log(res, 'res is consled')
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}
export default getEsusuCycles;