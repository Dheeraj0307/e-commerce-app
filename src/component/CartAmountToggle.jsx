import React from 'react'
import './CSS/cartAmountToggle.css'
import '../App.css'

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
    return (
        <div className="cart-btn">
            <div className="amt-toggle">
                <button onClick={() => setDecrease()}>-</button>
                <div className="amount-style">{amount}</div>
                <button onClick={() => setIncrease()}>+</button>
            </div>
        </div>
    )
}

export default CartAmountToggle