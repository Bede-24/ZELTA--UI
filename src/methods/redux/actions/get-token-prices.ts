import _const from '../../_const'
import api from '../../api/api'
import cookie from '../../api/cookies'
import { toast } from 'react-toastify'
import { Console } from 'console'


function getCryptoPrices() {

  return async (dispatch: Function) => {

    try {

      api.get(`/admin/get-token-price`)
          .then((res : any) => {
              //dispatch this action that triggers the route to admin dashboard if res.status == 200
              if(res.status === 200){
                console.log(res)
                  dispatch({ type: _const.ZELTA_TOKEN_PRICE, payload : res.data.data.PriceInUSD })
              }   
          })
          .catch((err) => {
              // console.log(err.response)
              toast.error('something happened, refresh your browser')
          })

          // console.log(priceamount, 'price amount')
      // const data = {price : priceamount}
      // api.post(`/admin/set-token-price`, data)
      // .then((res : any) => {
      //     //dispatch this action that triggers the route to admin dashboard if res.status == 200
      //     if(res.status === 200){
      //       console.log(res)
      //         // dispatch({ type: _const.ZELTA_TOKEN_PRICE, payload : res.data.data })
      //     }   
      // })
      // .catch((err) => {
      //     console.log(err.response)
      //     toast.error('something happened, refresh your browser')
      // })
  }
  catch (err) {

    throw err;
  }
  }
}


export default getCryptoPrices;