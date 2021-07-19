import { applyMiddleware, combineReducers, createStore } from 'redux'
import user from './userReducer'
import magazin from './magazinReducer'
import { createMagazine,getAllMagazin } from '../middleware/crud.magazin'


const reducer = combineReducers({ user, magazin })

const store = createStore(reducer, applyMiddleware(
    createMagazine,
    getAllMagazin
))

export default store;