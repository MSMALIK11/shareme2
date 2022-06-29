import * as AuthApi from '../Api/authRequest';


import {AUTH_REQUEST, AUTH_SUCCESS,AUTH_FAIL } from '../Constant/constant';
export const signUp=(formData)=>async(dispatch)=>{

   
      dispatch({type:AUTH_REQUEST})
    try {
        const {data}=await AuthApi.signUp(formData);
       
        dispatch({type:AUTH_SUCCESS,payload:data.token})
        
    } catch (error) {
        console.log(error);
        dispatch({type:AUTH_FAIL})
        
    }
    
}
export const  logIn=(formData)=> async(dispatch)=>{
  
    dispatch({type:AUTH_REQUEST})
    try {
        const {data}=await AuthApi.logIn(formData);
      
        dispatch({type:AUTH_SUCCESS,payload:data})
        
    } catch (error) {
        console.log(error);
        dispatch({type:AUTH_FAIL})
        
    }


}