import React, { useState, userEffect, useRef } from 'react'

export default function AddUser(props) {
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [image, setImage] = useState({});

    async function addUser(e) {
        e.preventDefault()
        const user = {
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            password: password.current.value,

        }
        const data = await fetch('/addUser', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                email: email.current.value,
                password: password.current.value,
            })

        })
        console.log(data);


    }
    async function onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            debugger;
            var img = event.target.files[0]
            // console.log(img);
            // const data = new FormData()
            // data.concat('file', img)
            // console.log(data);
            // setImage(data)
        }
        console.log(img);
        const pic = await fetch('/uploadImage/60919ef73c9c036c5ca4239a', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: new FormData(img)
        })


    };
    return (
        <form>
            <div className="form-group row mt-4 d-flex justify-content-center">
                <label for="inputEmail1" className="col-1 col-form-label">First Name</label>
                <div className="col-4">
                    <input type="text" ref={firstName} className="col-4 form-control " id="inputEmail1" placeholder="First Name..." />
                </div>
            </div>
            <div className="form-group row mt-2 d-flex justify-content-center ">
                <label for="inputEmail2" className="col-1 col-form-label mr-5">Last Name</label>
                <div className="col-4">
                    <input type="text" ref={lastName} className="col-4 form-control " id="inputEmail2" placeholder="Last Name..." />
                </div>
            </div>
            <div className="form-group row mt-2 d-flex justify-content-center">
                <label for="inputEmail3" className="col-1 col-form-label">Email</label>
                <div className="col-4">
                    <input type="email" ref={email} className="col-4 form-control " id="inputEmail3" placeholder="Email.." />
                </div>
            </div>
            <div className="form-group row mt-2 d-flex justify-content-center">
                <label for="inputEmail4" className="col-1 col-form-label">Password</label>
                <div className="col-4">
                    <input type="password" ref={password} className="col-4 form-control " id="inputEmail3" placeholder="Password" />
                </div>
            </div>
            <div className="form-group row  mt-4 d-flex justify-content-center">
                <div className="col-3">
                    <button type="submit" onClick={(e) => { addUser(e) }} className="btn btn-primary">Register</button>
                </div>
            </div>
            {/* <img src={image} /> */}
            <input type="file" accept="image/*" name="myImage" onChange={(e) => { onImageChange(e) }} />
        </form>
    )
}