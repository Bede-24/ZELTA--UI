import _const from '../../../_const'
import api from '../../../api/api'
import cookie from '../../../api/cookies'
import {  toast } from 'react-toastify';
import getuserbalance from '../get-user-balance'

type Data ={
  walletAddress :string
}

function connectWallet(data : Data) {


  return async (dispatch: Function) => {

    try {

      // console.log(data, 'BNBAddress is logged')
      api.post(`/authentication/connectwallet`, data )
      .then((res : any) => {
          if(res.status === 200){
            //store userid and address in browser cookie
            cookie.set('userId', res.data.data._id)
            cookie.set('address', res.data.data.walletAddress)

            toast.success('wallet connected successful');
            dispatch({ type: _const.WALLET_CONNECTED, payload: true})
            dispatch({ type: _const.ADDRESS, payload: res.data.data.walletAddress})
            dispatch(getuserbalance());
          }   
      })
      .catch((err) => {
        if(err.response){
           toast.error(`${err.response.data.message}`)
          }
        else{ toast.error('something occured try again')}
        
      })
      
    }
    catch (err) {
      console.log(err)
      toast.error('something occured try again')
      // throw err;
    }
  }
}


export default connectWallet;