import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as botActions from '../../_actions/botActions'
import * as messageActions from '../../_actions/messageActions'
import {toastr} from 'react-redux-toastr'
import { withRouter } from 'react-router-dom'

import './MessagePage.css'
import {Tabs, Tab,Jumbotron} from 'react-bootstrap'
import styled from 'styled-components';
import { TabContent } from './TabContent';

const TabsStyled = styled(Tabs)`
    border-radius: 5px 5px 0 0;
    
    li[role="presentation"].active{
        background-color: #556797;
        border-radius: 5px 5px 0 0;
        padding: 5px;
        color:white;
    }
    li[role="presentation"]{
        background-color: #b8cacd;
        border-radius: 5px 5px 0 0;
        padding: 5px;
        & a {
            color:white;
        }
    }
    li[role="presentation"]:hover{
         & a {
            color:#ff886f;
        }
    }
`
export class MessagePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            key: this.props.botItems.length >0?this.props.botItems[0].name: '',
            selectedChat:'',
            message:'',
            messages:this.props.messages ? this.props.messages.filter(x=>x.chatId === this.props.groups[0].id) : []        
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSelectGroupHandler = this.onSelectGroupHandler.bind(this)
        this.onSendMessageHandler = this.onSendMessageHandler.bind(this)
        this.onSelectTabHandler = this.onSelectTabHandler.bind(this)
        this.onDeleteMessageHandler = this.onDeleteMessageHandler.bind(this)
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

    onSelectGroupHandler({groupId,type}){
        const selectedBot = this.props.botItems.find(x=>x.name===this.state.key)
        if(!selectedBot) return
        if(type==='channel')
            this.setState({selectedChat:selectedBot.channel})
        else
            this.setState({selectedChat:groupId})
        const messages = selectedBot.messages.filter(x=>x.chat.id === groupId)
        this.setState({messages})
    }
    onChangeHandler(e){
        e.preventDefault()
        this.setState({message:e.target.value})
    }

    onSendMessageHandler(e){
        e.preventDefault()
        const senddata = {
            chat_id: this.state.selectedChat,
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
    onDeleteMessageHandler(messageId){
        const senddata = {
            chat_id: this.state.selectedChat,
            message_id:messageId     
        }

        this.props.actions.deleteMessage(this.props.botItems.find(x => x.name == this.state.key).token,senddata).then((data)=>{
            this.setState({messages:this.state.messages.filter(x=>  x.chat.id !== senddata.chat_id && x.message_id !== senddata.message_id)})
        }).catch(error=> toastr.error(error))
    }
   
    render(){
        return (
            <Jumbotron>
                 <TabsStyled
                    activeKey={this.state.key}
                    animation={true}
                    onSelect={this.onSelectTabHandler}
                    id="controlled-tab-example"
                >
                    {this.props.botItems.map((item, index) => 
                        <Tab eventKey={item.name} key={index} title={item.name}>
                             <TabContent 
                                item={item}
                                value={this.state.message}
                                messages={this.state.messages}
                                onSelectGroup={this.onSelectGroupHandler}
                                onChange={this.onChangeHandler}
                                onDelete={this.onDeleteMessageHandler}
                                onSendMessage={this.onSendMessageHandler}
                                selectedChat={this.state.selectedChat}/>
                        </Tab>
                    )}
                </TabsStyled>
            </Jumbotron>
        )
    }
}

export function mapStateToProps(state){
    return {
        botItems: state.bots
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators({ ...botActions,...messageActions},dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MessagePage))