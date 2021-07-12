import { combineReducers, createStore } from 'redux'
import user from './userReducer'

const reducer = combineReducers({ user })
const store = createStore(reducer)

export default store