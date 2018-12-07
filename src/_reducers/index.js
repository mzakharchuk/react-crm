import {combineReducers} from 'redux'
import {botReducer} from './botReducers'
import {messageReducer} from './messageReducer'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    bot:botReducer,
    messages:messageReducer,
    router:routerReducer,
})

export default rootReducer