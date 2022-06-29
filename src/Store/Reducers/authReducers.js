import { AUTH_REQUEST,AUTH_SUCCESS,AUTH_FAIL } from "../Constant/constant"
const initialState={
    authData:null,
    loading:false,
    error:false,
    token:null
}
const authReducer=(state=initialState,action)=>{

    switch(action.type){
        case AUTH_REQUEST:
            return {...state,loading:true,error:false}
        case AUTH_SUCCESS:
           
            return {
                ...state,
                token:action.payload,
                loading:false,
                error:false
            
            } 
               
        case AUTH_FAIL:
            return {
                ...state,
              
                loading:false,
                error:true
            
            } 
               

         default:
            return state   
    }

}


export default authReducer