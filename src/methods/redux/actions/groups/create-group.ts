import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import XendFinance from '../../../init'


const sdkInstance = new XendFinance();

//this action creates esusu groups
export const createEsusuGroup = (groupName: string, groupSymbol: string) => {
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'esusu'

        try{
            
            const res = await sdkInstance.group.createGroup(groupName, groupSymbol, groupIdentifier)
            console.log(res, 'create group res......')
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}

//this method creates cooporative groups
export const createCooporativeGroup = (groupName: string, groupSymbol: string) => {
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'cooporative'

        try{
            const res = await sdkInstance.group.createGroup(groupName, groupSymbol, groupIdentifier)
            console.log(res, 'create group res......')
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}