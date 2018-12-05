import * as types from '../types'


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
