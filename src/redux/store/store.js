import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './userReducer'
import { createMagazine } from '../middleware/crud.magazin'

const reducer = combineReducers({ user })

const store = createStore(reducer, applyMiddleware(
    createMagazine
))

export default store