import * as types from '../types'
import {telegramApi} from '../_api/telegramAPI'

export function registerBot(bot){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bot)
    };

     return dispatch => {
        return fetch(`/bot/register`,requestOptions)
        .then(user => {
            dispatch(success(bot))
        }).catch(error=>{
            throw(error)
        })
     }

    function success(bot){ return { type:types.BOT_REGISTER_SUCCESS, bot } }
}

export function loadBots(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };

     return dispatch => {
        return fetch(`/bot/getAll`,requestOptions)
        .then(user => {
            dispatch(success(bot))
        }).catch(error=>{
            throw(error)
        })
     }

    function success(bots){ return { type:types.LOAD_BOTS_SUCCESS, bots } }
}


export function getUpdates(token){
    return dispatch => {
            telegramApi.post(`/bot${token}/getUpdates`,{offset:0})
        .then(response => {
            dispatch(success(response.data.result))
        }).catch(error=>{
            throw(error)
        })
    }

    function success(bot){ return { type:types.BOT_UPDATE_MESSAGE, bot } }
}

