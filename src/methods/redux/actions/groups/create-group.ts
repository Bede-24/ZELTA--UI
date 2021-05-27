import { notify } from '../../../../pages/components/Notifier';
import randomgen from '../../../random-gen';
import loader from '../add-to-que';
import {EsusuInstance} from '../../../../Xendfinance'
import { esusuGroupMarker, esusuGroupsFilter } from '../../../utils/esusu-group-identifier'
import  { cooperatviGroupMarker, cooperativeGroupsFilter } from '../../../utils/cooporative-group-identifier'
import Swal from 'sweetalert2'


//this action creates esusu groups
export const createEsusuGroup = (groupName: string, groupSymbol: string) => {
    
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        const groupIdentifier = 'esusu'

        try{

            groupName = esusuGroupMarker(groupName)
            
            const res = await EsusuInstance().createGroup(groupName, groupSymbol);
            const arrayOpfProperties = Object.keys(res);
            if(arrayOpfProperties.includes('status') && res.status){
                console.log(res, 'create group res......')
                Swal.fire('success', 'group created successfully.', 'success',)
                
            } else( Swal.fire('Error', 'something happened ', 'error' ) )
            dispatch(loader(id));
          
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' )
            dispatch(loader(id));
        }
    }
}

//this method creates cooporative groups
export const createCooporativeGroup = (groupName: string, groupSymbol: string) => {
    return async (dispatch: Function) => {

        const id = randomgen();
        dispatch(loader(id));
        

        try{

            groupName = cooperatviGroupMarker(groupName);
            const res = await EsusuInstance().createGroup(groupName, groupSymbol);

            const arrayOpfProperties = Object.keys(res);
            if(arrayOpfProperties.includes('status') && res.status){
                console.log(res, 'create group res......')
                Swal.fire('success', 'deposit successful.', 'success',)
                
            } else( Swal.fire('Error', 'something happened ', 'error' ) )
            dispatch(loader(id));
        }
        catch(err){
            Swal.fire('Error', 'something happened ', 'error' )
            dispatch(loader(id));
        }
    }
}