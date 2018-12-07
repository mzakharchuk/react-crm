import * as types from  '../types'
const messages = JSON.parse(localStorage.getItem('messages'));
const initialState = messages ? messages : [];

export function messageReducer(state = initialState, action){
    switch(action.type) {
        case types.SEND_MESSAGE_SUCCESS:
            localStorage.setItem('messages', JSON.stringify([...state,action.message]));
            return [...state,action.message]
        case types.LOAD_MESSAGE_SUCCESS:
            return state//action.messages  
        case types.BOT_UPDATE_MESSAGE:
            return state.concat(action.bot.reduce((acc,cur)=>{ acc.push(cur.message); return acc;},[]))
        default :
            return state
    }
}