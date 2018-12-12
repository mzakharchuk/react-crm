import {combineReducers} from 'redux'
import {botReducer} from './botReducers'
import {userReducer} from './userReducer'
import {authReducer} from './authReducer'
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
    bots:botReducer,
    user:userReducer,
    authentication: authReducer,
    toastr: toastrReducer 
})

export default rootReducer