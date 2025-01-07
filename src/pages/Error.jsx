import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/error.css'
const Error = () => {

    const navigate = useNavigate();

    return (
        <div className='error-page'>
            <h2>404</h2>
            <h3>UH OH! You're lost.</h3>
            <p>
                The page you are looking for does not exist. How you got here is a mystery. But you can click the button bellow to go backto the home page.
            </p>
            <button onClick={() => navigate('/')}>Go Back to Home</button>
        </div>
    )
}

export default Error