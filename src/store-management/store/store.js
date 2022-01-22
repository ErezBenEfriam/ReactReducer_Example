import {countReducer} from '../Reducers/CountReducer'
import { createStore,combineReducers } from 'redux';


//we can combine more reducer.  when we want to display the state that
//change by countReducer we will use 'count' 
//  (in DisplayCount.JS  for example)
const  combineMyReducers = combineReducers({count:countReducer})

export default createStore(combineMyReducers)