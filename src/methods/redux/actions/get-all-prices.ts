import _const from '../../_const'
import api from '../../api/api'
import cookie from '../../api/cookies'
import { toast } from 'react-toastify'
import { Console } from 'console'


function getCryptoPrices() {

  return async (dispatch: Function) => {

    try {

        
        fetch(`https://api.nomics.com/v1/currencies/ticker?key=e4c2b772052d0e557db02ac52985c883c50ed391&ids=BTC,ETH,BNB,XRP,DOGE,BCH,TRX,USDT,SAFEMOON,ADA&interval=1h,30d&convert=USD&per-page=100&page=1`)
            .then(response => response.json())
            .then(data => { 

              console.log(data)
              data.map((data : any) =>{
                // switch(data.symbol){
                //   case 'BTC':
                //     console.log(data)
                //     dispatch({type:_const.GET_BTC_BALANCE, payload:  data.price})
                //     break;
                //   case 'ETH':
                //     dispatch({type:_const.GET_ETH_BALANCE, payload:  data.price});
                //     break;
                //   case 'BNB':
                //     dispatch({type:_const.GET_BNB_BALANCE, payload:  data.price})
                //     break;
                //   case 'XRP':
                //     dispatch({type:_const.GET_XRP_BALANCE, payload:  data.price});
                //     break;
                //   case 'DOGE':
                //     dispatch({type:_const.GET_DOGE_BALANCE, payload:  data.price});
                //     break;
                //   case 'BCH':
                //     dispatch({type:_const.GET_BCH_BALANCE, payload:  data.price});
                //     break;
                //   case 'TRX':
                //     dispatch({type:_const.GET_TRX_BALANCE, payload:  data.price});
                //     break;
                //   case 'USDT':
                //     dispatch({type:_const.GET_USDT_BALANCE, payload:  data.price});
                //     break;
                //   case 'SafeMoon':
                //     dispatch({type:_const.GET_SAFEMOON_BALANCE, payload:  data.price});
                //     break;
                //   case 'ADA':
                //     dispatch({type:_const.GET_ADA_BALANCE, payload:  data.price});
                //     break;
                //   }
              })       
            })
            .catch((err) => {
                console.log(err.response)
                toast.error('something happened, please refresh your browser,')
             // dispatch({
            //     type: _const.USER_BALANCE,
            //     payload : res.data.data
            //   })
            })

    }
    catch (err) {
      console.log(err)
      throw err;
    }
  }
}


export default getCryptoPrices;