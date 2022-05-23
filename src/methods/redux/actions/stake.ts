import _const from '../../_const'
import api from '../../api/api'
import cookie from '../../api/cookies'
// import Swal from '../../../utils/swal'
import { cryptoAddressReturner } from '../../utils/currencies'
import { useHistory } from 'react-router'
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import getuserbalance from './get-user-balance'


type Data = {

    amount: Number
}

function stake(props : Data) {

  return async (dispatch: Function) => {

    try {
        const userId = cookie.getUserId()
        const data = {
          ...props,
          userId,
          transactionType : 'stake'
        }
        api.post(`/user/stake/${userId}`, data)
            .then((result: any) => {
                toast.success(`${result.data.message}`)
                dispatch(getuserbalance());
                // dispatch({ type: _const.DEPOSIT_SUCCESSFUL, payload: true})
            })
            .catch((err: any ) => {
              if(err.response){ toast.error(`${err.response.data.message}`) }
              else{ toast.error('something occured try again. check your internet connection')}
            });
    }
    catch (err) {
      throw err;
    }
  }
}


export default stake;