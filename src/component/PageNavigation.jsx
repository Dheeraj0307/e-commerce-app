import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNavigation = ({ title }) => {

    const navigate = useNavigate();

    return (
        <div className='page-navigation'><span onClick={() => navigate('/')} >Home</span>/{title}</div>
    )
}

export default PageNavigation