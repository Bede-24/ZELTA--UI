import _const from '../../_const'
import api from '../../api/api'
import cookie from '../../api/cookies'
import { toast } from 'react-toastify'


function login() {

  return async (dispatch: Function) => {

    try {
        const id = cookie.getUserId()

        if(id){
          api.get(`/user/user-balance/${id}`)
          .then((res : any) => {
               

                //dispatch this action that triggers the route to admin dashboard if res.status == 200
                if(res.status === 200){
                  dispatch({
                    type: _const.USER_BALANCE,
                    payload : res.data.data
                  })
                }   
          })
          .catch((err) => {
              console.log(err.response)
              toast.error('something happened, refresh your browser')
          })
        }
        else{
          toast.info('Please connect your wallet')
        }
        
    }
    
    catch (err) {
      console.log(err)
      throw err;
    }
  }
}
export default login;