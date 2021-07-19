import produce from 'immer'
import createReducer from './reducerUtill'

const initialState = {
    magazins: [{
        
    }]
}

const magazin = {
    setAllMagazins(state, action) {
        debugger
        state.magazins=action.payload;
        console.log(state.magazin);
    }

}

export default produce((state, action) => createReducer(state, action, magazin), initialState)