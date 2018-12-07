import * as types from '../types'
import {authHeader,handleResponse} from '../_helpers'

export function register(user){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

     return dispatch => {
        return fetch(`/users/register`,requestOptions)
        .then(user => {
            dispatch(success(user))
        }).catch(error=>{
            throw(error)
        })
     }

    function success(user){ return { type:types.USER_REGISTER_SUCCESS, user } }
}

export function getAllUsers(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    
    return dispatch =>{
        dispatch(requst())

        return fetch('/users',requestOptions)
        .then(handleResponse)
        .then(users =>{
            dispatch(success(users))
        })
        .catch(error =>{
            throw(error)
        })
    }
    function success(users){ return { type:types.LOAD_USERS_SUCCESS, users } }
    function requst(){ return { type:types.LOAD_USERS_REQUEST } }
}

export function deleteUser(id){
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader(),
    }
    
    return dispatch =>{
        dispatch(request(id))

        return fetch(`/users/${id}`,requestOptions)
        .then(handleResponse)
        .then( ()=>{
            dispatch(success(id))
        })
        .catch(error =>{
            dispatch(failed(id))
            throw(error)
        })
    }
    function request(id){ return { type:types.DELETE_USER_REQUEST, id } }
    function success(id){ return { type:types.DELETE_USER_SUCCESS, id } }
    function failed(id){ return { type:types.DELETE_USER_FAILED, id } }
}
