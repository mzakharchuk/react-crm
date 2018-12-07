import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as botActions from '../../_actions/botActions'
import * as messageActions from '../../_actions/messageActions'
import toastr from 'toastr'
import { withRouter } from 'react-router-dom'
import { GroupsBlock } from '../_common'
import {MessageForm,MessageList} from './'
import {
    reduceMessage,
    reduceMessages,
    getChats} from '../../selectors'
import './MessagePage.css'

const token = '511249933:AAGRiRrdE-DkPdIcM1wouJvak3ZB2rbkuvw'
class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            selectedChat:'',
            message:'',
            messages:[]//this.props.messages ? this.props.messages.filter(x=>x.chatId === this.props.groups[0].id) : []        
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.loadMessages()
        this.props.actions.getUpdates(token)
    }

    onSelectHandler(id){
        this.setState({selectedChat:id})
        this.setState({messages:[...this.props.messages.filter(x=>x.chatId === id)]})
    }
    onChangeHandler(e){
        e.preventDefault()
        this.setState({message:e.target.value})
    }

    onSendMessageHandler(e){
        e.preventDefault()
        const senddata = {
            chat_id:this.state.selectedChat,
            text:this.state.message,
            options:{
                disable_web_page_preview: true,
                disable_notification: false,
                }

        }
        this.props.actions.sendMessage(token,senddata).then((data)=>{
            this.setState({messages:[
                ...this.state.messages,
                reduceMessage(data)
            ]})
            this.setState({message:''})
        }).catch(error=> toastr.error(error))
    }
   
    render(){
        return (
            <div className="jumbotron">
            <h2>messages</h2>
                <div className="container-message">
                    <GroupsBlock
                        selectedChat={this.state.selectedChat}
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

function mapStateToProps(state){
    console.log(state)
    return{
        messages:reduceMessages(state.messages),
        chats: getChats(state.bot.messages)
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({ ...botActions,...messageActions},dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage))