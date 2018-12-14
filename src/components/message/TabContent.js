import React from 'react'
import {MessageForm,MessageList} from '.'
import { GroupsBlock } from '../_common'
import {
    reduceMessages,
    getChats} from '../../selectors'

export const TabContent = ({item,selectedChat,onSelectGroup,onChange,onDelete,onSendMessage,messages,value }) => {
    const messagesGroup = getChats(item.messages)
    const privatGroup = messagesGroup.filter(x=> x.type == 'private')
    const channelGroup = messagesGroup.filter(x=> x.type == 'channel')

    return (
        <div>
            <div className="container-message">
            <div>
                {channelGroup.length > 0
                ?<div>
                    <br/>
                    <em>Channels</em>
                    <GroupsBlock
                        selectedChat={selectedChat}
                        groups={channelGroup} onSelect={onSelectGroup}
                        />
                </div>
                :null}
                {privatGroup.length > 0
                ?<div>
                    <br/>
                    <em>Messages</em>
                    <GroupsBlock
                        selectedChat={selectedChat}
                        groups={privatGroup} onSelect={onSelectGroup}
                        />
                </div>
                :null}
            </div>
            {messages && selectedChat
        
                ?<div>
                    <MessageList   
                        messages={reduceMessages(messages)}
                        onDelete={onDelete}/>
                    <MessageForm
                        placeholder="Type your message and hit ENTER"
                        message={value}
                        onChange={onChange}
                        onSendMessage={onSendMessage}/>
                </div>
            :<h1>Please select and start you conversation</h1>}
            </div>
        </div>
        )
}