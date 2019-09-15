import { combineReducers } from 'redux'
import catsReducer from '../reducers/cats_reducer'
export default combineReducers({
  cats: catsReducer
})
