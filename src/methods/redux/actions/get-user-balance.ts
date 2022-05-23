import _const from '../../_const'
import api from '../../api/api'
import cookie from '../../api/cookies'
import { toast } from 'react-toastify'


function login() {

  return async (dispatch: Function) => {

    try {

        const id = cookie.getUserId()

        api.get(`/user/user-balance/${id}`)
          .then((res : any) => {
                console.log(res)

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
    
    catch (err) {
      console.log(err)
      throw err;
    }
  }
}
export default login;