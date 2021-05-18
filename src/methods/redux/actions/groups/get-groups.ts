import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {GroupInstance} from '../../../../Xendfinance'

// this action gets esusu groups
export const getEsusuGroup = () => {
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'esusu'

        try{
            // const res = sdkInstance().group.getGroup(1);
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}

// this action fetches cooporative Groups
export const getCooporativeGroup = () => {
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'cooporative'

        try{
            // const res = await sdkInstance.group.getGroup(1);
            // console.log(res, 'create group res......')
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}