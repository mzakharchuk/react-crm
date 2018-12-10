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
import {Tabs, Tab} from 'react-bootstrap'


const token = '511249933:AAGRiRrdE-DkPdIcM1wouJvak3ZB2rbkuvw'
class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: 1,
            selectedChat:'',
            message:'',
            messages:[]//this.props.messages ? this.props.messages.filter(x=>x.chatId === this.props.groups[0].id) : []        
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectHandler = this.onSelectHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
        this.onSelectTabHandler = this.onSelectTabHandler.bind(this)
    }
    componentDidMount() {
        this.props.actions.loadMessages()
        this.props.actions.loadBots().then(()=>{
            const t = this.props.botItems[0].token
            this.props.actions.getUpdates(t)
        })
      
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
    onSelectTabHandler(key){
        this.setState({ key });
    }
   
    render(){
        return (
            <div className="jumbotron">
            <Tabs
                activeKey={this.state.key}
                onSelect={this.onSelectTabHandler}
                id="controlled-tab-example">
                {this.props.botItems.map((item, index) => {
                    return <Tab key={index}  eventKey={index +1 } title={item.name}>
                content 1
                     </Tab>
                })}
                 <Tab eventKey={2} title="Tab 2">
                    content 2
                </Tab>
               
            </Tabs>



            {/* <h2>messages</h2>
                <div className="container-message">
                    <GroupsBlock
                        selectedChat={this.state.selectedChat}
                        groups={this.props.chats} onSelect={this.onSelectHandler}/>
                {this.state.messages.length >0 ?<div>
                    <MessageList   
                        messages={this.state.messages}/>
                    <MessageForm
                        placeholder="Type your message and hit ENTER"
                        message={this.state.message}
                        onChange={this.onChangeHandler}
                        onSendMessage={this.onSendMessageHandler}/>
                </div>: <h1>Please select and start you conversation</h1>}
                </div> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state)
    return{
        messages:reduceMessages(state.messages),
        chats: getChats(state.bot.messages),
        botItems: state.bot.items !== undefined ? state.bot.items : []
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({ ...botActions,...messageActions},dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage))