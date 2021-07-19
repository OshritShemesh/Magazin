import axios from 'axios';


export const getAllMagazin = ({ dispatch, getState }) => next => action => {

    if (action.type == 'GET_ALL_MAGAZIN') {



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