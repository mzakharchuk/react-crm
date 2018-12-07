import React from 'react'
import {connect} from 'react-redux'
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history,PrivateRoute } from './_helpers'
import { 
    Header,
    Sidebar
} from './components/_common'

import { HomePage } from "./components/home"
import  SettingsPage  from "./components/settings/SettingsPage"
import { PageNotFound } from './components/notfound/PageNotFound'
import CreatePage from './components/create/CreatePage'
import MessagePage from './components/message/MessagePage'
import RegisterPage from './components/register/RegisterPage'
import LoginPage from './components/login/LoginPage'

class App extends React.Component {
    render(){
        return (
            <div>
                 {this.props.isLoggin ?<div>
                <Header/>
                 <Sidebar/></div>: null }
                <div className="container">
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <PrivateRoute exact path="/message" component={MessagePage}/>
                        
                        <PrivateRoute exact path="/settings"  component={SettingsPage}/>
                        <Redirect from="/settings/create" to="/create"/>
                        <PrivateRoute exact path="/create" component={CreatePage}/>

                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {loggedIn} = state.authentication
    return {
        isLoggin:loggedIn
    }
}
export default connect(mapStateToProps)(App)
