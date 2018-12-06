import React from 'react'
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from './_helpers'
import { 
    Header,
    Sidebar
} from './components/_common'

import { HomePage } from "./components/home"
import  SettingsPage  from "./components/settings/SettingsPage"
import { PageNotFound } from './components/notfound/PageNotFound'
import CreatePage from './components/create/CreatePage'
import MessagePage from './components/message/MessagePage'

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Sidebar/> 
                <div className="container">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/message" component={MessagePage}/>
                        
                        <Route exact path="/settings"  component={SettingsPage}/>
                        <Redirect from="/settings/create" to="/create"/>
                        <Route exact path="/create" component={CreatePage}/>
          
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
                </div>
            </div>
        )
    }
}
export default App
