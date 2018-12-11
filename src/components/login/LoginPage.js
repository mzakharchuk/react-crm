import React, { Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router-dom';
import * as loginAction from '../../_actions/loginAction'
import * as botActions from '../../_actions/botActions'
import {TextInput} from '../_common'
import toastr from 'react-redux-toastr'

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.props.actions.singOut()

        this.state = {
            user: {login:'',password:''},
            loggedIn:this.props.user.loggedIn 
        }
        this.LoginHandler = this.LoginHandler.bind(this)
        this.onChangeHandler =this.onChangeHandler.bind(this) 
    }
    onChangeHandler(e){
        const field = e.target.name
        return this.setState({user:{
                ...this.state.user,
                [field]:event.target.value }})
    }

    LoginHandler (e) {
        e.preventDefault()
        this.props.actions.signIn(this.state.user)
        .then(() => 
        {
            this.props.actions.loadBots()
            this.redirect()
        })
        .catch(error=>
            toastr.error(error)
            )    

    }
    redirect(){
        this.setState({saving:false})
        toastr.success("You are signin")
        this.props.history.push('/')
    }

    render () {
        return (
            <div className="jumbotron" style={{textAlign:'center'}}>
             <h1>Sign in</h1>
             <form className="col-md-5" style={{left:'30%'}}>
                <TextInput
                    name={'login'}
                    label="Login"
                    onChange={this.onChangeHandler}
                   />
                <TextInput 
                    name={'password'}
                    label="Password"
                    password={true}
                    onChange={this.onChangeHandler}
                    />

                <input type="submit" 
                    style={{ marginRight: '13px'}}
                    className='btn btn-primary' value="Login" onClick={this.LoginHandler}/>
                <Link to='/register' className='a-left'>Register</Link>
             </form>
             
        </div>)
    }   
}

function mapStateToProps(state){
    return {
        user:state.authentication
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({...loginAction,...botActions}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)