import axios from 'axios';

export const createPost = ({ dispatch, getState }) => next => action => {
    console.log('hi');
    if (action.type == 'CREATE_POST') {

        axios.post('http://localhost:4000/addPost', action.payload)
            .then(res => {
                console.log('createPost works ' + JSON.stringify(res.data));
                // res.JSON(res.data)
            })
            .catch(err => { console.log(err) })
    }
    return next(action);
}