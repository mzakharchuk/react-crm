import * as types from '../types'
import {telegramApi} from '../_api/telegramAPI'

export function sendMessage( token, message ){
    return dispatch => {
        return new Promise((resolve,rej) => {
            telegramApi.post(`/bot${token}/sendMessage`, message)
            .then(response => {
                dispatch(success(response.data.result))
                resolve(response.data.result)
            }).catch(error=>{
                throw(error)
            })
        })
    }

    function success(message){ return { type:types.SEND_MESSAGE_SUCCESS, message } }
}

export function deleteMessage( token, message ){

    return dispatch => {
        return new Promise((resolve,rej) => {
            telegramApi.post(`/bot${token}/deleteMessage`, message)
            .then(response => {
                dispatch(success(message))
                resolve(response.data.result)
            }).catch(error=>{
                throw(error)
            })
        })
    }

    function success(message){ return { type:types.DELETE_MESSAGE_SUCCESS, message } }
}
export function changeChatTitle( token, message ){
    const sendData = {
        chat_id:message.chatId,
        title:message.text
    }
    return dispatch => {
        return new Promise((resolve,rej) => {
            telegramApi.post(`/bot${token}/setChatTitle`, sendData)
            .then(response => {
                dispatch(success(response.data.result))
                resolve(response.data.result)
            }).catch(error=>{
                throw(error)
            })
        })
    }

    function success(message){ return { type:types.CHANGE_TITLE_CHANNEL_SUCCESS, message } }
}
export function getChat(token, chatId){
    const sendData = {
        chat_id:chatId,
    }
    return dispatch => {
        return new Promise((resolve,rej) => {
            telegramApi.get(`/bot${token}/getChat`, sendData)
            .then(response => {
            //    dispatch(success(response.data.result))
                resolve(response.data.result)
            }).catch(error=>{
                throw(error)
            })
        })
    }

 //   function success(message){ return { type:types.GET_CHAT_CHANNEL_SUCCESS, message } }
}

export function loadMessages( bot){
    return dispatch => {
        return new Promise((resolve,rej) => {
            // telegramApi.post(`/bot${token}/sendMessage`, message)
            // .then(response => {
                dispatch(success(bot.name))
                resolve()
        //     }).catch(error=>{
        //         throw(error)
        //     })
        })
    }

    function success(botname){ return { type:types.LOAD_MESSAGE_SUCCESS, botname } }
}