import React from 'react'
import ReactDOM from 'react-dom'
import { Router} from 'react-router-dom';

import {Provider} from 'react-redux'
import {history, configureStore } from './_helpers'

import App from './App'
import './style/global.css'

const store = configureStore()

class Index extends React.Component {

    render(){
        return( 
            <Provider store={store}>
                 <Router history={history}>
                    <App/>
                </Router>
        </Provider>
        )
    }   
}


ReactDOM.render(<Index/>,document.getElementById("app"))