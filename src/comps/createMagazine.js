import React, { useState } from 'react'

export default function CreateMagazine() {

    const [magazine, setMagazine] = useState({
        title: "",
        subTitle: "",
        content: ""
    })

    function addMagazine() {
        console.log(magazine);
    }

    return (
        <>
            <input name='title' type="text" onChange={e => setMagazine({ ...magazine, title: e.target.value })}></input>
            <textarea name="subTitle" cols="50" rows="3" onChange={e => setMagazine({ ...magazine, subTitle: e.target.value })}></textarea>
            <textarea name="content" cols="50" rows="10" onChange={e => setMagazine({ ...magazine, content: e.target.value })}></textarea>
            <button onClick={addMagazine}>Add Magazine</button>
        </>
    )
}