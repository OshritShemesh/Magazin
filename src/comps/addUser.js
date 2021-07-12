import React, { useState, userEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';
import './login.css'
import $ from 'jquery';

export default withRouter(function AddUser(props) {
    const firstName = useRef('');
    const lastName = useRef('');
    const email = useRef('');
    const password = useRef('');
    const [image, setImage] = useState({});
    $(function() {

        $('#login-form-link').click(function(e) {
            $("#login-form").delay(100).fadeIn(100);
             $("#register-form").fadeOut(100);
            $('#register-form-link').removeClass('active');
            $(this).addClass('active');
            e.preventDefault();
        });
        $('#register-form-link').click(function(e) {
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

        })
        console.log(data);


    }


    // <form>
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
    //     {/* <img src={image} /> */}
    //     {/* <input type="file" accept="image/*" name="myImage" onChange={(e) => { onImageChange(e) }} /> */}
    // </form>
    return (
        <>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <div class="panel panel-login">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xs-6">
                                    <a href="#" class="active" id="login-form-link">Login</a>
                                </div>
                                <div class="col-xs-6">
                                    <a href="#" id="register-form-link">Register</a>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="login-form" action="http://phpoll.com/login/process" method="post" role="form" style={{display:"block"}}>
                                        <div class="form-group">
                                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="form-group text-center">
                                            <input type="checkbox" tabindex="3" class="" name="remember" id="remember" />
                                            <label for="remember"> Remember Me</label>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="text-center">
                                                        <a href="http://phpoll.com/recover" tabindex="5" class="forgot-password">Forgot Password?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <form id="register-form" action="http://phpoll.com/register/process" method="post" role="form" style={{display: "none"}}>
                                        <div class="form-group">
                                            <input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password" />
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
})