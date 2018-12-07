import React from 'react'

export const MessageList = ({messages}) => {
    const mess = messages.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
    console.log(messages)
    return (
        <ul className="message-list">                 
        {mess ? mess.map(m => {
            return (
            <li key={ m.id } className="message">
                <div>{m.is_bot?m.name +' (bot)' :m.name }</div>
                <div>{ m.text?m.text:null }</div>
            </li>
            )
        }): null}
        </ul>
    )
}