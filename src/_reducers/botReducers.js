import * as types from  '../types'

export function botReducer(state={}, action){
    switch(action.type) {
        case types.BOT_REGISTER_SUCCESS:
            return  { items:[...state.bots,action.bot]}
        default :
            return state
    }
}