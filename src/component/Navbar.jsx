import React from 'react'
import { useNavigate } from 'react-router-dom'
import cart from '../icons-size-logo/cart-large-2-svgrepo-com.svg'
import { useCartContext } from '../context/cart_context'
import './CSS/navbar.css'

const Navbar = ({ setShowNav }) => {

    const { total_item } = useCartContext();
    const navigate = useNavigate();
    const data = JSON.parse(localStorage.getItem('token'));

    const logout = () => {
        if (data) {
            localStorage.removeItem('token')
        }
        navigate('/loginNew')
        setShowNav(false)
    }

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <nav>
                <div className="navbar">
                    <h2 className='logo' onClick={handleClick}>Sasta Mart</h2>
                    <ul>
                        <li onClick={handleClick}>Home</li>
                        <li onClick={() => navigate('/aboutUs')}>About</li>
                        <li onClick={() => navigate('/products')}>Products</li>
                        <li onClick={() => navigate('/contact-form')}>Contact</li>
                        <button onClick={logout} className='nav-btn'>  {data ? 'Log out' : 'Log in'}</button>
                        <li className='cart-icon'> <img src={cart} alt='' width={36} onClick={() => navigate('/cart')} /> <span className='cart-total-items'>{total_item}
                        </span></li>
                    </ul>


                    <div className='nav-right-side'>
                        <button onClick={logout} className='nav-btn'>  {data ? 'Log out' : 'Log in'}</button>
                        <img src={cart} alt='' width={45} onClick={() => navigate('./cart')} />
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar