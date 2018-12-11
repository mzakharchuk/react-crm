import {combineReducers} from 'redux'
import {botReducer} from './botReducers'
import {messageReducer} from './messageReducer'
import {userReducer} from './userReducer'
import {authReducer} from './authReducer'
import {routerReducer} from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
const rootReducer = combineReducers({
    bot:botReducer,
    user:userReducer,
    messages:messageReducer,
    authentication: authReducer,
    router:routerReducer,
    toastr: toastrReducer 
})

export default rootReducer