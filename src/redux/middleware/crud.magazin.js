import axios from 'axios';
import {actions}from '../action'


export const getAllMagazin = ({ dispatch, getState }) => next => action => {
    debugger
    if (action.type == 'GET_ALL_MAGAZINS') {

        axios.get('http://localhost:4000/getAllMagazins').then(res => {
            return res.data
        }).then((res) => {
            console.log(res.allTheMagazins)
            dispatch(actions.setAllMagazins(res.allTheMagazins))
        }).catch(err =>
            console.log(err))

    }

    return next(action);
}




export const createMagazine = ({ dispatch, getState }) => next => action => {
    if (action.type == 'CREATE_MAGAZINE') {

        axios.post('http://localhost:4000/addMagazine', action.payload)
            .then(res => {
                console.log('createMagazine works ' + JSON.stringify(res.data));
                res.JSON(res.data)
            })
            .catch(err => { console.log(err) })
    }
    return next(action);
}