import _const from '../../../_const'
import axios from 'axios';
import api from '../../../api/api'
import { toast } from 'react-toastify';
import cookie from '../../../api/cookies'


function getdeposittransaction() {

  return async (dispatch: Function) => {

    try {

        const userId = cookie.getUserId()

        api.get(`/user/get-deposit-history/${userId}`)
            .then((res : any) => {
                //dispatch this action that triggers the route to admin dashboard if res.status == 200
                if(res.status == 200){
                    dispatch({ type: _const.DEPOSIT_TRANSACTION_HISTORY, payload : res.data.data })
                }   
            })
            .catch((err) => {
                console.log(err.response)
                toast.error('something happened, refresh your browser')
            })
    }
    catch (err) {

      throw err;
    }
  }
}


export default getdeposittransaction;