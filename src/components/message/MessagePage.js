import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as botActions from '../../_actions/botActions'
import * as messageActions from '../../_actions/messageActions'
import {toastr} from 'react-redux-toastr'
import { withRouter } from 'react-router-dom'
import { GroupsBlock } from '../_common'
import {MessageForm,MessageList} from './'
import {
    reduceMessage,
    reduceMessages,
    getChats} from '../../selectors'
import './MessagePage.css'
import {Tabs, Tab} from 'react-bootstrap'


const token = '511249933:AAGRiRrdE-DkPdIcM1wouJvak3ZB2rbkuvw'
class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: this.props.botItems.length >0?this.props.botItems[0].name: '',
            selectedChat:'',
            message:'',
            messages:this.props.messages ? this.props.messages.filter(x=>x.chatId === this.props.groups[0].id) : []        
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
        this.onSelectTabHandler = this.onSelectTabHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.loadBots().then(()=>{
            if(this.props.botItems.length>0){
                this.loadBotConversation(this.props.botItems[0])
            }
        })      
    }
    loadBotConversation(bot){
        this.props.actions.getUpdates(bot)
        this.props.actions.loadMessages(bot)
        this.setState({key:bot.name})
    }

    onSelectHandler(id){
        this.setState({selectedChat:id})
        const messages = this.props.botItems.find(x=>x.name===this.state.key).messages.filter(x=>x.chat.id === id)
        this.setState({messages})
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
        this.props.actions.sendMessage(this.props.botItems.find(x=>x.name== this.state.key).token,senddata).then((data)=>{
            this.setState({messages:[
                ...this.state.messages,
                data
            ]})
            this.setState({message:''})
        }).catch(error=> toastr.error(error))
    }
    onSelectTabHandler(key){
        this.setState({ key });
        this.loadBotConversation(this.props.botItems.find(x=>x.name==key))
        this.setState({selectedChat:'',messages:[]})
    }
   
    render(){
        console.log('render')
        return (
            <div className="jumbotron">
                 <Tabs
                    activeKey={this.state.key}
                    animation={true}
                    onSelect={this.onSelectTabHandler}
                    id="controlled-tab-example"
                >
                    {this.props.botItems.map((item, index) => {
                        return (
                        <Tab key={index}  eventKey={item.name} title={item.name}>
                        <h2>messages</h2>
                        <div className="container-message">
                            <GroupsBlock
                                selectedChat={this.state.selectedChat}
                                groups={getChats(item.messages)} onSelect={this.onSelectHandler}/>
                        {this.state.messages && this.state.selectedChat
                    
                            ?<div>
                                <MessageList   
                                    messages={reduceMessages(this.state.messages)}/>
                                <MessageForm
                                    placeholder="Type your message and hit ENTER"
                                    message={this.state.message}
                                    onChange={this.onChangeHandler}
                                    onSendMessage={this.onSendMessageHandler}/>
                            </div>
                        :<h1>Please select and start you conversation</h1>}
                        </div>
                        </Tab>
                        )
                    })}
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state',state)
    
    return {
       // chats: state.bots.includes('messages') ? getChats(state.bot.messages.result): [],
        botItems: state.bots
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({ ...botActions,...messageActions},dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage))