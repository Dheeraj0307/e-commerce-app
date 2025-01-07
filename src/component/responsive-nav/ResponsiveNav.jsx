import React, { useState, useEffect, memo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import cart from '../../icons-size-logo/cart-large-2-svgrepo-com.svg'
import './special.css'
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { useCartContext } from '../../context/cart_context'

export const ResponsiveNav = memo(({ setShowNav }) => {
    const [toggleState, setToggleState] = useState(true);
    const menuRef = useRef(null)

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
        setToggleState(true)
        navigate('/')
    }

    const handleToggle = (pass) => {
        setToggleState(true)
        console.log(toggleState)
        navigate(pass)
    }

    useEffect(() => {
        document.body.style.overflow = toggleState ? 'auto' : 'hidden';
    }, [toggleState]);

    useEffect(() => {
        let handle = (e) => {
            // console.log(e.target, "e");
            // console.log(menuRef.current, "menuRef.current");
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setToggleState(true);
                // console.log(menuRef.current);
            }
        };

        document.addEventListener("mousedown", handle);

        return () => document.removeEventListener("mousedown", handle);
    }, []);


    return (
        <header className='real-navbar'>
            <div className="new-navbar">
                <div className="logo" onClick={handleClick}>
                    Sasta Mart
                </div>
                <ul className="links">
                    <li onClick={handleClick}>Home</li>
                    <li onClick={() => navigate('/aboutUs')}>About</li>
                    <li onClick={() => navigate('/products')}>Products</li>
                    <li onClick={() => navigate('/contact-form')}>Contact</li>
                </ul>
                <div className='nav-btn-div'>
                    <button onClick={logout} className='action_btn'>{data ? 'Log out' : 'Log in'}</button>
                    <div className='cart-icon'>
                        <img src={cart} alt='' width={36} onClick={() => navigate('/cart')} /> <span className='cart-total-items'>{total_item}
                        </span>
                    </div>
                </div>
                <div className="toogle-btn" onClick={() => setToggleState(!toggleState)}>
                    {toggleState ? <FaBars className='toogle_icon' /> :
                        <ImCross />
                    }
                </div>
            </div>


            <div className={`dropdown-menu-box ${!toggleState && 'open'}`} ref={menuRef}>
                <li onClick={handleClick}>Home</li>
                <li onClick={() => handleToggle('/aboutUs')}>About</li>
                <li onClick={() => handleToggle('/products')}>Products</li>
                <li onClick={() => handleToggle('/contact-form')}>Contact</li>
                <li onClick={() => handleToggle('/cart')}>Cart</li>
                <li><button onClick={logout} className='action_btn'>{data ? 'Log out' : 'Log in'}</button></li>
            </div>
        </header>
    )
})
