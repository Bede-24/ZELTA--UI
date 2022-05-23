import axios from "axios";
import { BASE_URL } from "./baseApi";
import Cookies from "./cookies";
import { useHistory } from "react-router";
import Swal from "sweetalert2";



    //getting the jwt token from cookie
    // const token = Cookies.getToken();

    // console.log(token, 'JWT')

    //creating the config object with base api
    const config = {
        baseURL: `${BASE_URL}/api/v1`,
        timeout: 50000,
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    };
    const service = axios.create(config);

function Api(){

    const history = useHistory();

    service.interceptors.response.use(
        response => {
          console.log(response);
          const description = response.data.message;
          if (!response.data.customHandle) {
              Swal.fire(
                  'Approved!',
                  'Your login request is successful.',
                  'success'
              )
           
          }
          return Promise.resolve(response);
        },
        err => {
          const description = err.response.data.message;
          console.log(err.response, "response");
      
          if (!err.response.data.customHandle) {
              Swal.fire(
                  'error!',
                  'Your login request was denied.',
                  'error'
              )
          } else if (err.response.data.extraData.login) {
                //this is to route the person back to the admin login page if error occured.
                history.push("/");
              //store.dispatch("user/logout");
          }
          return Promise.reject(err.response);
        }
    );
}

export default service;