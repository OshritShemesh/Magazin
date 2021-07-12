import React, { useState, useEffect } from 'react'
import ReactDOM from "react-dom";

export default function Login(props) {

    const [name, setName] = useState([''])

    // async function getImage() {
    //     // const data = await fetch('/"https://via.placeholder.com/600/24f355"')

    // }

    useEffect(async () => {
        const data = await fetch('/login')
        const body = await data.json();
        console.log(body);
        // getImage()
        setName(body)
    }
        , [])
    return (
        <>
            <div>{name}</div>
            {/* <img
                src="https://via.placeholder.com/150/771796/?text=reprehenderit+est+deserunt+velit+ipsam"
                alt="new"
            />
            <img
                src="https://via.placeholder.com/150/8985dc"
                alt="ad-img"
            /> */}
        </>

    )
}