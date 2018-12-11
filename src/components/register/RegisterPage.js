import React from 'react'
import RegisterForm from './RegisterForm'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { withRouter } from 'react-router-dom'
import toastr from 'react-redux-toastr'

import * as userActions from '../../_actions/userActions';

class RegisterPage  extends React.Component {
    constructor(props){
        super(props)

        this.state= {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            }
        }

        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.onSaveHandler = this.onSaveHandler.bind(this)
    }
    onChangeHandler(e){
        const field = e.target.name
        const {user} = this.state

        return this.setState({user : {
            ...user,
            [field]: event.target.value
        }})
    }
    onSaveHandler(e){
        e.preventDefault()
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
           this.props.actions.register(user)
           .then(() => this.redirect())
           .catch(error => toastr.error(error))
        }
    }
    redirect(){
        toastr.success("User Saved")
        this.props.history.push('/login')
    }
    render() {
        return(
            <div className="jumbotron">
                <h1>Register form</h1>
                <br/>
                <RegisterForm
                    onChange={this.onChangeHandler}
                    onSave={this.onSaveHandler} />
              
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(userActions,dispatch)
    }
}
export default withRouter(connect(undefined,mapDispatchToProps)(RegisterPage))