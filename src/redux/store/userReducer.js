import produce from 'immer'
import createReducer from './reducerUtill'

const initialState = {
    user: {
        firstName: "tamar",
        lastName: "",
        id: "",
        email: "",
        password: ""
    }
}

const user = {
    setFirstName(state, action) {
        state.user.firstName = action.payload;
        console.log(state.user.firstName);

    },
    setLastName(state, action) {
        state.user.lastName = action.payload;
        console.log(state.user.lastName);

    },
    setId(state, action) {
        state.user.id = action.payload;
    },
    setEmail(state, action) {
        state.user.email = action.payload;
    },
    setPassword(state, action) {
        state.user.password = action.payload;
    }

}

export default produce((state, action) => createReducer(state, action, user), initialState)