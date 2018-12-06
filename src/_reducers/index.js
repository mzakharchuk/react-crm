import {combineReducers} from 'redux'
import {botReducer} from './botReducers'
import {routerReducer} from 'react-router-redux'

const rootReducer = combineReducers({
    bot:botReducer,
    router:routerReducer,
})

export default rootReducer