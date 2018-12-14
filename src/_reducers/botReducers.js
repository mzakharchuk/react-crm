import * as types from  '../types'

const messages = JSON.parse(localStorage.getItem('botMessage'));
const initialState = messages ? messages : [];

export function botReducer(state = initialState, action){
    switch(action.type) {
        case types.SEND_MESSAGE_SUCCESS:
            const bots = state.map(x =>{ return (x.name === action.message.chat.username || x.name === action.message.from.username)? {...x,messages:[...x.messages,action.message]} : x})
            localStorage.setItem('botMessage', JSON.stringify(bots))
            return bots
        case types.DELETE_MESSAGE_SUCCESS:    
            const deletedBots = state.map(x =>{ return x.messages!==undefined ?{...x,messages:x.messages.filter(x=>x.chat.id !== action.message.chat_id && x.message_id  !== action.message.message_id) }:x})
            localStorage.setItem('botMessage', JSON.stringify(deletedBots))
            return deletedBots
        case types.BOT_REGISTER_SUCCESS:
            return  [...state,action.bot]
        case types.LOAD_BOTS_SUCCESS:
            return [...state,...action.bots].reduce((acc,curr) => acc.find(x=>x.name==curr.name)?acc:[...acc,curr],[])
        case types.LOAD_MESSAGE_SUCCESS:
            return state 
        case types.BOT_UPDATE_MESSAGE:
            return state.map(item => item.name === action.bot.name 
                ? {...item,messages:item.messages !== undefined 
                    ? item.messages.concat(action.bot.result.map(curr => (curr.message || curr.channel_post))).reduce((acc,curr) => acc.find(x=>x.message_id == curr.message_id) ? acc : [...acc,curr],[]) 
                    : action.bot.result.map(curr => (curr.message|| curr.channel_post)) 
                 } 
                : item )
        default :
            return state
    }
}