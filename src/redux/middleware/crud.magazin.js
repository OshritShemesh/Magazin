import axios from 'axios';


export const getAllMagazin = ({ dispatch, getState }) => next => action => {

    if (action.type == 'GET_ALL_MAGAZIN') {

        await axios.get('http://localhost:4000/getAllMagazin').then(res => {
            console.log("getAllMagazin work" + JSON.stringify(res.data));
        }, err => {
            console.log("error in getAllMagazin " + err);
        })

    }


    return next(action);
} 