import React from 'react';
import './signIn.css';
import Google from '../../assets/icons/google.svg';
import Apple from '../../assets/icons/apple.svg';
import { Link } from 'react-router-dom';

function SignIn(){
    return(
        <>
            <div id="left-container">
                <h1 className="company-name">Board.</h1>
            </div>

            <div id="right-container">
                <h3 className="sign-in-text">Sign In</h3>
                <p className="sign-in-account-text">Sign in to your account</p>

                <div className="rectangle-1">
                    <button className="btn-1">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="google-icon" src={Google} />
                        <p className='sign-in-google'>Sign in with Google</p>
                    </button>
                </div>

                <div className="rectangle-2">
                    <button className="btn-2">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img className="apple-icon" src={Apple} />
                        <p className='sign-in-apple'>Sign in with Apple</p>
                    </button>
                </div>

                <div className="card">
                    <form action="submit">
                        <label for="email" className='email-heading'>Email address</label>
                        <input type="email" id="email-text-box" name="email" value="johndoe@gmail.com"></input>
                        <label for="password" className='password-heading'>Password</label>
                        <input type="password" id="password-text-box" name="password" value="lorem"></input>
                    </form>

                    <a className='forgot-password-link-text' href="/">Forgot Password?</a>
                    <button className='btn-3'>
                            <p className="sign-in-text-button">
                                <Link className="sign-in-text-link" to="/home"> Sign In</Link>
                            </p>
                    </button>
                </div>

                <div className='account'>
                    <p className='no-account-text'>Don't have an account?</p>
                    <a href="/" className='register-link'>Register here</a>
                </div>
            </div>
        </>
    );
}

export default SignIn;