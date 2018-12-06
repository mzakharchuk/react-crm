import * as types from  '../types'

export function botReducer(state={}, action){
    switch(action.type) {
        case types.BOT_REGISTER_SUCCESS:
            return  { items:[...state.items,action.bot]}
        case types.BOT_UPDATE_MESSAGE:
            return {messages:action.bot}
        default :
            return state
    }
}