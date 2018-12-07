import * as types from '../types'
let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authReducer(state=initialState, action){
    switch(action.type){
        case types.USER_LOGIN_SUCCESS:
            return {
                loggedIn:true,
                user:{...action.user}
            }
        case types.USER_LOGIN_FAILD:
            return {}
        case types.USER_LOGOUT:
            return {}
        case types.USER_REGISTER_SUCCESS:
            return {}    
        default:
         return state
    }
}