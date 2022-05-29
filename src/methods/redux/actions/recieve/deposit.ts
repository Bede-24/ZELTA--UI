import _const from '../../../_const'
import api from '../../../api/api'
import cookie from '../../../api/cookies'
// import Swal from '../../../utils/swal'
import { cryptoAddressReturner } from '../../../utils/currencies'
import { useHistory } from 'react-router'
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';


type Data = {

    amount: Number
}

function deposit(props : Data) {

  return async (dispatch: Function) => {

    try {
        const userId = cookie.getUserId()
        const cryptoAddress = cryptoAddressReturner()
        const data = {
          ...props,
          userId,
          cryptoAddress,
          transactionType : 'deposit'
        }
        if(userId){
          api.post(`/user/deposit/${userId}`, data)
          .then((result: any) => {
              toast.success(`${result.data.message}`)
              // dispatch({ type: _const.DEPOSIT_SUCCESSFUL, payload: true})
          })
          .catch((err: any ) => {
            if(err.response){ toast.error(`${err.response.data.message}`) }
            else{ toast.error('something occured try again. check your internet connection')}
          });
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


export default deposit;