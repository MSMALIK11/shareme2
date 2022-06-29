import { LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "../Constant/constant"

const initialState={
    user:'',
    loading:false,

    isAuthenticated:false
}

export const loadUserReducer=(state=initialState,action)=>{
    switch(action.type){
        case  LOAD_USER_REQUEST:
            return {...state,loading:true}

        case LOAD_USER_SUCCESS:
            return {...state,loading:false,user:action.payload}
        case LOAD_USER_FAIL:
            return {...state,loading:true}    

      default:
        return state

    }


}