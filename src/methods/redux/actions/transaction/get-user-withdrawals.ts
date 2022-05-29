import _const from '../../../_const'
import api from '../../../api/api'
import { toast } from 'react-toastify';
import cookie from '../../../api/cookies'


function getWithdrawalTransaction() {

  return async (dispatch: Function) => {

    try {

        const userId = cookie.getUserId()

        if(userId){
          api.get(`/user/get-withdrawal-history/${userId}`)
          .then((res : any) => {
              //dispatch this action that triggers the route to admin dashboard if res.status == 200
              if(res.status == 200){
                  dispatch({ type: _const.WITHDRAWAL_TRANSACTION_HISTORY, payload : res.data.data })
              }   
          })
          .catch((err) => {
              console.log(err.response)
              toast.error('something happened, refresh your browser')
          })
        }
        else{
          toast.info("Please connect your wallet")
        }

        
    }
    catch (err) {

      throw err;
    }
  }
}


export default getWithdrawalTransaction;