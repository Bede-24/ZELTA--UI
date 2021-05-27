import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import { EsusuInstance } from '../../../../Xendfinance'
import _const from '../../../_const';
import { esusuGroupsFilter } from '../../../utils/esusu-group-identifier'
import { cooperativeGroupsFilter } from '../../../utils/cooporative-group-identifier'

// this action gets esusu groups
export const getEsusuGroup = () => {
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));     

        try{
            let res = await EsusuInstance().getGroups()
            console.log(res)
        
            if(res.length > 0){
                res = esusuGroupsFilter(res);
                // remove after ui is fixed
                res = res.slice(0,2)

                console.log(res)
                dispatch({ type : _const.SINGLE_GROUP_ESUSU, payload: res})
            }

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

            let res = await EsusuInstance().getGroups();

            if(res.length > 0){
                res = cooperativeGroupsFilter(res)
                // remove after ui is fixed
                res = res.slice(0,2)

                console.log(res,)
                dispatch({type:_const.SINGLE_GROUP_COOPORATIVE, payload : res})
            }
           
            dispatch(loader(id));
        }
        catch(err){
            notify('error', 'Could not create group.')
            dispatch(loader(id));
        }
    }
}