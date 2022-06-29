import axios from 'axios'


import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "../Constant/constant";



let URL = "http://localhost:4000";
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

// const crediencial={
//   credensials: true
// }


export const  fetchMyprofile=()=>async(dispatch)=>{

    dispatch({
        type:LOAD_USER_REQUEST
    })
    try {

        const {data} = await axios.get(
          `${URL}/user/profile/me`,
          config,
        
        );

    


        dispatch({
          type:LOAD_USER_SUCCESS,
          payload:data.user
        })
        
    } catch (error) {
        console.log('error',error)
        
    }




}