import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './css/newlogin.css';
import logo from '../icons-size-logo/sasta-logo.png'

const LoginPageNew = ({ setShowNav }) => {

    const [userLogin, setUserLogin] = useState({
        email: '', password: ''
    });

    const navigate = useNavigate();

    function handleChange(e) {
        e.preventDefault();
        const { name, value } = e.target;

        setUserLogin((prev) => ({ ...prev, [name]: value }))
    }

    const handleClick = () => {
        navigate('/')
        setShowNav(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // eve.holt@reqres.in
        try {
            const res = await axios.post('https://reqres.in/api/login', {
                email: userLogin.email,
                password: userLogin.password
            })
            localStorage.setItem('token', JSON.stringify(res.data.token))
            toast.success("Login Successfully!")
            navigate('/')
            setShowNav(true)
        } catch (error) {
            console.log(error.message || error,
                'error in response'
            )
        }
    }

    useEffect(() => {
        setShowNav(false)
    }, [setShowNav])


    return (
        <div className='loginParent'>
            <div className='loginPageContainer' >
                <h1 className='Loginlogo' onClick={handleClick}>
                    <img src={logo} alt="" width={50} />
                    <p> Sasta Mart</p>
                </h1>
                <h2>Log in</h2>
                {/* <div className='loginOptions'>
                    <a href='https://accounts.google.com/'> <img src={googleLogo} alt="" /></a>
                    <a href="https://www.facebook.com/login.php/"> <img src={facebookLogo} alt="" /></a>
                </div> */}
                <div className='divider'>
                    {/* <hr /> <p>or</p> */}
                </div>

                <form action="" onSubmit={handleSubmit} className='inputform' >
                    <input type="email" name='email' className='inputData' value={userLogin.email} onChange={handleChange} required placeholder='Email' />
                    <input type="password" name='password' className='inputData' value={userLogin.password} onChange={handleChange} required placeholder='Password' />

                    <button id='form-btn' type="submit"   >
                        Login
                    </button>

                    {/* <div className='form-link'><a>
                        Forgot password?
                    </a></div> */}

                </form>
            </div>
        </ div>
    )
}

export default LoginPageNew