import produce from 'immer'
import createReducer from './reducerUtill'

const initialState = {
    magazine: []
}

const magazine = {
    setAllMagazines(state, action) {
        state.magazine = action.payload
    }
}

export default produce((state, action) => createReducer(state, action, magazine), initialState)