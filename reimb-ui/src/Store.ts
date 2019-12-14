import { compose, applyMiddleware, Store, createStore } from "redux"
import logger from "redux-logger"
import { state } from "./reducers"
import reduxThunk from 'redux-thunk'


const a:any = window

//if they have devtools installed, let them be used
//otherwise use the default from redux
const composeEnhancers = a.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(reduxThunk, logger)//exists in dispatch step
)

//this will be the store object that we use to give data to our components
export const store: Store<any> = createStore(
    state,
    enhancer
)