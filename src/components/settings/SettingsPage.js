import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom'
import * as botActions from '../../_actions/botActions'
import {Jumbotron,ListGroup} from 'react-bootstrap'
import {EditForm} from './EditForm'

class SettingsPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editName:'',
            name:''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onSaveHandler = this.onSaveHandler.bind(this)
        this.onCancelHandler = this.onCancelHandler.bind(this)
    }

    componentDidMount(){
        this.props.actions.loadBots()
    }
    onCancelHandler(name){
        this.setState({editName:name,name})
    }
    onChangeHandler(e){
        this.setState({name:e.target.value})
    }
    onDeleteHandler(){

    }
    onSaveHandler(){
        if(this.state.editName === this.state.name)
            this.setState({editName:''})

    }

    render(){
        const {url} = this.props.match
        return (
            <Jumbotron>
                <Link to={`${url}/create`} className='btn btn-primary'>add Telegram bot</Link><br/>
                <h2>Your bots</h2>
                <ListGroup>
                    {this.props.bots.map(item => 
                    <EditForm 
                        editName={this.state.editName}
                        key={item.id}
                        bot={item}
                        value={this.state.name}
                        onChange={this.onChangeHandler} 
                        onDelete={this.onDeleteHandler}
                        onCancel={this.onCancelHandler}
                        onEditMode={this.onCancelHandler}
                        onSave={this.onSaveHandler}/>
                    )}
                </ListGroup>
            </Jumbotron>
        )
    }
}
function mapStateToProps(state){
    return{
        bots:state.bots
    }

}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(botActions,dispatch)
    }

}
export default connect(mapStateToProps,mapDispatchToProps)(SettingsPage)