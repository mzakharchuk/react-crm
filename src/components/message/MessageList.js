import React from 'react'

export const MessageList = ({messages}) => {
    return (
        <ul className="message-list">                 
        {messages ? messages.map(m => {
            return (
            <li key={ m.message.message_id } className="message">
                <div>{ m.message.from.first_name }</div>
                <div>{ m.message.text?m.message.text:null }</div>
            </li>
            )
        }): null}
        </ul>
    )
}