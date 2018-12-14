import React from 'react'
import {connect} from 'react-redux'
import CreateForm from './CreateForm'
import {bindActionCreators} from 'redux'
import * as botActions from '../../_actions/botActions'
import {toastr} from 'react-redux-toastr'
import { withRouter } from 'react-router-dom'

class CreatePage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            bot:{
                userId: this.props.user.id,
                token:'',
                name:''
            }
        }

        this.onChangeHandle = this.onChangeHandle.bind(this)
        this.onCancelHandle = this.onCancelHandle.bind(this)
        this.onSaveHandle = this.onSaveHandle.bind(this)
    }
    onChangeHandle(e){
        const {name} = e.target
        this.setState({bot:{
            ...this.state.bot,
            [name]:e.target.value
        }})
    }
    onCancelHandle(e){
        e.preventDefault()
        this.props.history.push('/settings')
    }
    onSaveHandle(e){
        e.preventDefault()
        this.props.actions.registerBot(this.state.bot)
        .then(() => this.redirect())
        .catch(error => toastr.warning(error))
    }

    redirect(){
        toastr.success('Saved')
        this.setState({bot:{
            token:'',
            name:''
        }})
        this.props.history.push('/settings')
    }
    render(){
        return (
            <div className="jumbotron">
                <h2>Creation a bot for Telegram</h2>
            <CreateForm
                onChange={this.onChangeHandle}
                onCancel={this.onCancelHandle}
                onSave={this.onSaveHandle}
            />
            </div>
        )
    }
}
function mapStateToProps(state){
    const { user } = state.authentication
    return{
        user
    }

}
function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(botActions,dispatch)
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CreatePage))