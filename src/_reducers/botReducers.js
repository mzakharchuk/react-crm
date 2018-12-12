import * as types from  '../types'

const messages = JSON.parse(localStorage.getItem('botMessage'));
const initialState = messages ? messages : [];

export function botReducer(state = initialState, action){
    switch(action.type) {
        case types.SEND_MESSAGE_SUCCESS:
            const bots =state.map(x =>{ return x.name === action.message.from.username ?{...x,messages:[...x.messages,action.message]} :x})
            localStorage.setItem('botMessage', JSON.stringify(bots))
            return bots
        case types.BOT_REGISTER_SUCCESS:
            return  [...state.items,action.bot]
        case types.LOAD_BOTS_SUCCESS:
            return  state
        case types.LOAD_MESSAGE_SUCCESS:
            return state 
        case types.BOT_UPDATE_MESSAGE:
            return state.map(item => item.name === action.bot.name 
                ? {...item,messages:item.messages !== undefined 
                    ? item.messages.concat(action.bot.result.map(curr => curr.message)).reduce((acc,curr) => acc.find(x=>x.message_id == curr.message_id) ? acc : [...acc,curr],[]) 
                    : action.bot.result.map(curr => curr.message) 
                 } 
                : item )
        default :
            return state
    }
}