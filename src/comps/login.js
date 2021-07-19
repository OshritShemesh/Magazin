import React, { useState, useEffect, useRef } from 'react'
import { withRouter } from 'react-router-dom';
import { connect, } from 'react-redux';
import { action } from '../redux/action'
// import {userReducer} from '../redux/store/userReducer'

function mapStateToProps(state) {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    setFirstName: (firstName) => dispatch(action.setFirstName(firstName)),
    setLastName: (lastName) => dispatch(action.setLastName(lastName))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(function Login(props) {

    // const [name, setName] = useState(['']);
    const { history, setFirstName, setLastName, user } = props
    const emailRef = useRef()
    const passwordRef = useRef()


    async function login(e) {
        e.preventDefault()
        // console.log(passwordRef.current.value);
        const data = await fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
        }
        );
        const body = await data.json();

        if (body != false) {
            console.log(body);
            debugger;
            await setFirstName(body.user.firstName) 
            await console.log("fistName",user.firstName)
            await setLastName(body.user.lastName)
           
            history.push("/pictures")
        }
        else {
            console.log("not found!!!!");

        }

    }

    // {
    function register() {
        history.push('/register')
    }


    return (
        <>
            <div class="container">
                <div class="row mt-5" >
                    <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
                        <form role="form">
                            <fieldset>
                                <h2>Please Sign In</h2>
                                <hr class="colorgraph" />
                                <div class="form-group">
                                    <input type="email" ref={emailRef} name="email" id="email" class="form-control input-lg" placeholder="Email Address" />
                                </div>
                                <div class="form-group">
                                    <input type="password" ref={passwordRef} name="password" id="password" class="form-control input-lg" placeholder="Password" />
                                </div>
                                <span class="button-checkbox">
                                    <button type="button" class="btn" data-color="info">Remember Me</button>
                                    <input type="checkbox" name="remember_me" id="remember_me" checked="checked" class="hidden" />
                                    <a href="" class="btn btn-link pull-right">Forgot Password?</a>
                                </span>
                                <hr class="colorgraph" />
                                <div class="row">
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <input type="submit" onClick={(e) => { login(e) }} class="btn btn-lg btn-success btn-block" value="Sign In" />
                                    </div>
                                    <div class="col-xs-6 col-sm-6 col-md-6">
                                        <a href="" onClick={() => { register() }} class="btn btn-lg btn-primary btn-block">Register</a>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>
        </>

    )
}))