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

export function loadMessages( token, message ){
    return dispatch => {
        return new Promise((resolve,rej) => {
            // telegramApi.post(`/bot${token}/sendMessage`, message)
            // .then(response => {
                dispatch(success("a"))
                resolve()
        //     }).catch(error=>{
        //         throw(error)
        //     })
        })
    }

function success(messages){ return { type:types.LOAD_MESSAGE_SUCCESS, messages } }

}