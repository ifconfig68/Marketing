import {createStore , applyMiddleware} from 'redux'
import { thunk  } from 'redux-thunk'
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState={}


const middelware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    //applyMiddleware(...middelware),
    composeWithDevTools(applyMiddleware(...middelware))

)

export default store;
