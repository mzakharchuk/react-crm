import * as types from '../types'

export function userReducer(state={}, action){
    switch(action.type){
        case types.LOAD_USERS_REQUEST:
            return{ loading:true}
        case types.LOAD_USERS_SUCCESS:
            return {items:action.users}
        case types.DELETE_USER_REQUEST:
            return {items:state.items.map(user => user.id === action.id ? {...user, deleting:true} : user)}
        case types.DELETE_USER_SUCCESS:
            return {items:[...state.items.filter(x=>x.id != action.id)]}    
        case types.DELETE_USER_FAILED:
             return state.items.map(user => user.id === action.id ? {...user, deleting:false} : user)
        default:
         return state
    }
}