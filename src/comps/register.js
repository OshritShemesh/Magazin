import React, { useState, userEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'
import $ from 'jquery';

export default withRouter(function Register(props) {
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [image, setImage] = useState({});
    const { history } = props
    $(function () {

        $('#login-form-link').click(function (e) {
            $("#login-form").delay(100).fadeIn(100);
            $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function (e) {
            $("#register-form").delay(100).fadeIn(100);
            $("#login-form").fadeOut(100);
            $('#login-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });

    });

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

        }).then(() => {
            history.push('/pictures')
        })
        console.log(data);


    }



    return (<div class="container">
        <div class="row " >
            <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                <form role="form">
                    <fieldset>
                        <h2>Please Register</h2>
                        <hr class="colorgraph" />
                        <div class="form-group">
                            <input type="text" ref={firstName} name="firstName" id="username" tabindex="1" class="form-control input-lg" placeholder="firstName" />
                        </div>
                        <div class="form-group">
                            <input type="text" ref={lastName} name="lastName" id="username" tabindex="1" class="form-control input-lg" placeholder="lastName" />
                        </div>
                        <div class="form-group">

                            <input type="email" ref={email} name="email" id="email" tabindex="1" class="form-control input-lg" placeholder="Email Address" />
                        </div>
                        <div class="form-group">
                            <input type="password" ref={password} name="password" id="password" tabindex="2" class="form-control input-lg" placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <input type="password" ref={password} name="confirm-password" id="confirm-password" tabindex="2" class="form-control input-lg" placeholder="Confirm Password" />
                        </div>
                        <hr class="colorgraph" />
                        <div class="form-group">
                            <div class="row">
                                <div class="col-12 col-offset-3">
                                    <input type="submit" name="register-submit" onClick={(e) => { addUser(e) }} id="register-submit" tabindex="4" class="form-control btn btn-register bg-primary input-lg" value="Register Now" />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>

    </div>
        //    <form>
        //     <div className="form-group row mt-4 d-flex justify-content-center">
        //         <label for="inputEmail1" className="col-1 col-form-label">First Name</label>
        //         <div className="col-4">
        //             <input type="texy" ref={firstName} className="col-4 form-control " id="inputEmail1" placeholder="First Name..." />
        //         </div>
        //     </div>
        //     <div className="form-group row mt-2 d-flex justify-content-center ">
        //         <label for="inputEmail2" className="col-1 col-form-label mr-5">Last Name</label>
        //         <div className="col-4">
        //             <input type="texy" ref={lastName} className="col-4 form-control " id="inputEmail2" placeholder="Last Name..." />
        //         </div>
        //     </div>
        //     <div className="form-group row mt-2 d-flex justify-content-center">
        //         <label for="inputEmail3" className="col-1 col-form-label">Email</label>
        //         <div className="col-4">
        //             <input type="email" ref={email} className="col-4 form-control " id="inputEmail3" placeholder="Email.." />
        //         </div>
        //     </div>
        //     <div className="form-group row mt-2 d-flex justify-content-center">
        //         <label for="inputEmail4" className="col-1 col-form-label">Password</label>
        //         <div className="col-4">
        //             <input type="password" ref={password} className="col-4 form-control " id="inputEmail3" placeholder="Password" />
        //         </div>
        //     </div>
        //     <div className="form-group row  mt-4 d-flex justify-content-center">
        //         <div className="col-3">
        //             <button type="submit" onClick={(e) => { addUser(e) }} className="btn btn-primary">Register</button>
        //         </div>
        //     </div>
        // </form>
    )
})