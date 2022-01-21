import {countReducer} from '../Reducers/CountReducer'
import {addCount} from '../actions/CounterAction'
import { createStore,combineReducers } from 'redux';

const  combineMyReducers = combineReducers({count:countReducer})

export default createStore(combineMyReducers)