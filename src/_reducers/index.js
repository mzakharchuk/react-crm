import {combineReducers} from 'redux'
import {botReducer} from './botReducers'
import {messageReducer} from './messageReducer'
import {userReducer} from './userReducer'
import {authReducer} from './authReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    bot:botReducer,
    user:userReducer,
    messages:messageReducer,
    authentication: authReducer,
    router:routerReducer,
})

export default rootReducer