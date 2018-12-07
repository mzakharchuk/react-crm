import * as types from '../types'
import {handleResponse} from '../_helpers'

export function signIn({login,password}){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username:login, password })
    }

     return dispatch => {
        return fetch(`/users/authenticate`,requestOptions)
        .then(handleResponse)
        .then(user => {
            dispatch(loginSuccess(user))
            localStorage.setItem('user', JSON.stringify(user));
        }).catch(error=>{
            dispatch(loginFaild(error))
            throw(error)
        })
     }

    function loginSuccess(user){ return { type:types.USER_LOGIN_SUCCESS, user } }
    function loginFaild(error){ return { type:types.USER_LOGIN_FAILD, error } }
}

export function  singOut(){
    return dispatch => {
        dispatch(logoutSuccess())
        localStorage.removeItem('user')
    }

    function logoutSuccess(){ return { type:types.USER_LOGOUT } }
}