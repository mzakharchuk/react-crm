import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as botActions from '../../_actions/botActions'
import toastr from 'toastr'
import { withRouter } from 'react-router-dom'
import { GroupsBlock } from '../_common'
import {MessageForm,MessageList} from './'
import './MessagePage.css'
import {TelegramClient} from 'messaging-api-telegram'

const token = '511249933:AAGRiRrdE-DkPdIcM1wouJvak3ZB2rbkuvw'
class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedChat:'',
            message:'',
            messages:this.props.messages ? this.props.messages.filter(x=>x.chatId === this.props.groups[0].id) : []        
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.getUpdates(token)
    }

    onSelectHandler(id){
        this.setState({selectedChat:id})
        this.setState({messages:[...this.props.messages.filter(x=>x.message.chatId === id)]})
    }
    onChangeHandler(e){
        e.preventDefault()
        this.setState({message:e.target.value})
    }

    onSendMessageHandler(e){
        e.preventDefault()
        const senddata = {
            id:this.state.selectedChat,
            message:this.state.message,
            options:{
                disable_web_page_preview: true,
                disable_notification: false,
                }

        }
        this.props.actions.sendMessage(token,senddata).then(()=>{
            this.setState({message:''})
        }).catch(error=> toastr.error(error))
    }
   
    render(){
        return (
            <div className="jumbotron">
            <h2>messages</h2>
                <div className="container-message">
                    <GroupsBlock 
                        groups={this.props.chats} onSelect={this.onSelectHandler}/>
                <div>
                    <MessageList   
                        messages={this.state.messages}/>
                    <MessageForm
                        placeholder="Type your message and hit ENTER"
                        message={this.state.message}
                        onChange={this.onChangeHandler}
                        onSendMessage={this.onSendMessageHandler}/>
                </div>
                </div>
            </div>
        )
    }
}

function getChats(updates){
    if(updates===undefined)
    return []
    return updates.map(x=>{
            return {
                id:   x.message.chat.id,
                name: x.message.chat.title !==undefined ? x.message.chat.title:  x.message.chat.last_name!== undefined ? x.message.chat.first_name +' '+  x.message.chat.last_name:x.message.chat.first_name,
                type: x.message.chat.type,
            }  
        }).reduce((acc,curr)=> acc.find(x=>x.id === curr.id)?acc:[...acc,curr],[])

}

function reduceMessage(messages){
    if(messages===undefined)
    return []

    return messages.map(x=>{
        return {
            chatId:   x.message.chat.id,
            name: x.message.chat.title !==undefined ? x.message.chat.title:  x.message.chat.last_name!== undefined ? x.message.chat.first_name +' '+  x.message.chat.last_name:x.message.chat.first_name,
            text: x.message.text ? x.message.text : null,
            id: x.update_id
        }  
    }).reduce((acc,curr)=> acc.find(x=>x.id === curr.id)?acc:[...acc,curr],[])

}

function mapStateToProps(state){
    console.log(state.bot.messages)
    return{
        messages:reduceMessage(state.bot.messages),
        chats: getChats(state.bot.messages)
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(botActions,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage))