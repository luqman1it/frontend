import React from 'react'
import './Login.css'
export default function Login() {
    return (
        <div className="body-login">
            <form className='form-login' action="">
                <h2 className="title-form">Login</h2>
                <div className="item">
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' />
                </div>
                <div className="item">
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="item">
                    <label htmlFor="password">Password :</label>
                    <input type="password" name="password" id="password" placeholder='Enter Your Password' />
                </div>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    )
}
