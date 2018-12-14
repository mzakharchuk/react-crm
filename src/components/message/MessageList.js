import React from 'react'
import styled from 'styled-components';

const MessageListContainer = styled.ul`
    box-sizing: border-box;
    padding: 0 0 0 6px;
    margin: 0;
    width: 100%;
    height: 350px;
    overflow: scroll;
    max-height: 350px;
    background: white;
`
const Message = styled.li`
    margin: 15px 0;
    div:nth-child(1) {
        font-size: 11px;
        color: darkgray;
        opacity: 0.9;
        margin-bottom: 6px;
    }
    .text-message {
        position: relative;
        background:#20ade7;
        color: white;
        display: inline;
        padding: 4px 8px;
        border-radius: 8px;
      }
    .deletemessage{
        position: absolute;
        right: -9px;
        top: -12px;
        display:none
    }  
      .text-message:hover .deletemessage{
        color:red;
        display:block;
        cursor:pointer;
    }  
`

export const MessageList = ({messages,onDelete}) => {
    const mess = messages.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)); 
    return (
        <MessageListContainer>                 
        {mess ? mess.map(m => {
            return (
            <Message key={ m.id }>
                <div>{m.is_bot?m.name +' (bot)' :m.name }</div>
                <div className="text-message">{ m.text?m.text:null }
                    <div className="deletemessage" onClick={()=> onDelete(m.id)}><i className="far fa-times-circle fa-lg"></i></div>
                </div>
            </Message>
            )
        }): null}
        </MessageListContainer>
    )
}