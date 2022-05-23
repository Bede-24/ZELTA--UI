import _const from '../../../_const'
import api from '../../../api/api'
import cookie from '../../../api/cookies'
import {  toast } from 'react-toastify';

type Data = {

    amount: Number
    cryptoAddress : string
}

function Withdraw(props : Data) {

  return async (dispatch: Function) => {

    try {
        const userId = cookie.getUserId()

        const data = {
          ...props,
          userId,
          transactionType : 'withdraw'
        }

        api.post(`/user/withdraw/${userId}`, data)
            .then((result: any) => {
                let message = result.data.message
                toast.success(`${message}`)
                dispatch({ type: _const.DEPOSIT_SUCCESSFUL, payload: true})
            })
            .catch((err: any ) => {
              if(err.response){ toast.error(`${err.response.data.message}`) }
              else{ toast.error('something occured try again')}
            });
    }
    catch (err) {
      throw err;
    }
  }
}


export default Withdraw;