import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const navigate = useNavigate();
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    })
    const [isLoading, setIsLoading] = useState(false);
    function handleLogIn(e) {
        e.preventDefault();
        setIsLoading(true);

        axios.post('http://127.0.0.1:8000/api/login', {
            email: formLogin.email,
            password: formLogin.password
        }).then(res => {
            if (res.status === 200) {

                window.localStorage.setItem('token', res.data.authorisation.token)
                setIsLoading(false);

                navigate('/dashboard/box');
            }
        })


    }
    return (
        <div className="body-login">
            <form onSubmit={(e) => handleLogIn(e)} className='form-login' action="">
                <h2 className="title-form">Login</h2>
                <div className="item">
                    <label htmlFor="email">Email :</label>
                    <input onChange={(e) => setFormLogin({ ...formLogin, email: e.target.value })} value={formLogin.email} type="email" name="email" id="email" placeholder='Enter Your Email' />
                </div>
                <div className="item">
                    <label htmlFor="password">Password :</label>
                    <input onChange={(e) => setFormLogin({ ...formLogin, password: e.target.value })} value={formLogin.password} type="password" name="password" id="password" placeholder='Enter Your Password' />
                </div>
                <button disabled={isLoading} className='btn-log' type="Sign Up"> {isLoading ?'... Sending' : 'Sign Up'}</button>
                </form>

        </div>
    )
}
