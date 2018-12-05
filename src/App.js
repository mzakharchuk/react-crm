import React from 'react'
import { Router, Route, Switch } from "react-router-dom";

import { history } from './_helpers'
import { 
    Header,
    Sidebar
} from './components/_common'

import { HomePage } from "./components/home"
import { SettingsPage } from "./components/settings"
import { PageNotFound } from './components/notfound/PageNotFound'

class App extends React.Component {
    render(){
        return (
            <div>
                <Header/>
                <Sidebar/> 
                <div className="container">
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/settings" exact component={SettingsPage}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </Router>
                </div>
            </div>
        )
    }
}
export default App
