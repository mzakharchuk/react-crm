import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../_reducers'
import thunk from 'redux-thunk';

export function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    )
}