import React, { useState } from 'react';
import { connect } from 'react-redux';
import { action } from '../redux/action';

function CreateMagazine(props) {

    const [magazine, setMagazine] = useState({
        title: "",
        subTitle: "",
        content: "",
        userId: ""//add the user id
    })

    function addMagazine() {
        console.log(magazine);
        props.createMagazine(magazine);
    }

    return (
        <>
            {props.user && props.user.firstName}
            <input name='title' type="text" onChange={e => setMagazine({ ...magazine, title: e.target.value })}></input>
            <textarea name="subTitle" cols="50" rows="3" onChange={e => setMagazine({ ...magazine, subTitle: e.target.value })}></textarea>
            <textarea name="content" cols="50" rows="10" onChange={e => setMagazine({ ...magazine, content: e.target.value })}></textarea>
            <button onClick={addMagazine}>Add Magazine</button>
        </>
    )
}


export default connect(
    (state) => {
        return {
            // user: state.user.user
        }
    },
    (dispatch) => {
        return {
            createMagazine: (magazin) => {
                dispatch(action.createMagazine(magazin))
            }
        }
    }
)(CreateMagazine)