import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './userReducer'
import magazines from './magazineReducer'
import { createMagazine } from '../middleware/crud.magazin'
import { createPost } from '../middleware/crud.post'

const reducer = combineReducers({ user, magazines })

const store = createStore(reducer, applyMiddleware(
    createMagazine,
    createPost
))

export default store