import React, { useState } from 'react'
import { FaDiscord } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './CSS/footer.css'

const Footer = () => {
    const [input, setInput] = useState();

    const navigate = useNavigate();

    const handleResponse = (e) => {
        e.preventDefault();

        if (input.includes('@') && input.includes('.')) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you for Subscribing",
                showConfirmButton: false,
                timer: 1500,
                scrollbarPadding: false,
            });

            setInput('')
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    return (
        <>
            <footer className='real-footer'>
                <div className='footer-top'>
                    <p>Ready to get Started? <br /> Talk to us today</p>
                    <button onClick={() => navigate('/contact-form')}>Get Started</button>
                </div>
                <div className='footer-container'>
                    <div className='footer-data'>
                        <div>
                            <h2>Sasta Mart</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
                        </div>
                        <div>
                            <h2>Subscribe to get latest updates.</h2>
                            <form onSubmit={handleResponse} className='form-in-footer'>
                                <input type="email" required placeholder='YOUR EMAIL...' onChange={handleChange} value={input} />
                                <button type='submit'>Subscribe</button>
                            </form>
                        </div>
                        <div>
                            <h2>Follow us</h2>
                            <p className='social-links'>
                                <i> <FaDiscord size={30} /></i>
                                <i> <CiInstagram size={30} /></i>
                                <i> <FaYoutube size={30} /></i>
                            </p>

                        </div>
                        <div>
                            <h2>Call Us</h2>
                            <p> +91 1234567890</p>
                        </div>
                    </div>

                    <hr />

                    <div className='footer-line'>
                        <div>
                            <p>@{new Date().getFullYear()} SastaMart. All Rights Reserved</p>
                        </div>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>

                    </div>
                </div>
            </footer>

        </>

    )
}

export default Footer