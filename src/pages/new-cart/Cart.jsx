import React from 'react'
import CartProducts from './CartProducts';
import { useCartContext } from '../../context/cart_context'
import { useNavigate } from 'react-router-dom';
import emptyCart from '../../background/empty-cart.webp';
import FormatPrice from '../../helpers/FormatPrice';
import StripeCheckout from 'react-stripe-checkout';

import './cart.css';

const Cart = () => {
    const { cart, clearCart, total_price, shipping_fee, completePayment } = useCartContext();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (<>
            <div className="empty-cart">
                <img src={emptyCart} width={250} alt=" I DON'T KNOW " />
                <h2>Cart is empty</h2>
                <button onClick={() => navigate('/products')}>Continue Shoping</button>
            </div>
        </>)
    }

    return (<>
        <div className="grid-cart-container">

            <div className='grid-cart-headings'>
                <p className='grid-cart-p' >Image</p>
                <p >Name</p>
                <p className='cart-hide'>Price</p>
                <p className='cart-hide-II'>Quantity</p>
                <p className='cart-hide-II' >Subtotal</p>
                <p className='cart-hide-II' >  Remove </p>
            </div>

            <div >
                {
                    cart.map((curEl) => {
                        return <CartProducts key={curEl.id} {...curEl} />
                    })
                }
            </div>


            <div className="cart-two-btns">
                <button onClick={() => navigate('/products')}>Continue Shoping</button>
                <button onClick={clearCart}>Clear Cart</button>
            </div>

            <div className="price-section">
                <div>
                    <p>Subtotal :</p>
                    <p><b><FormatPrice price={total_price} /></b></p>
                </div>
                <div>
                    <p>Shipping fee :</p>
                    <p><b><FormatPrice price={shipping_fee} /></b></p>
                </div>
                <hr />
                <div>
                    <p>Order total :</p>
                    <p><b><FormatPrice price={total_price && ((total_price + shipping_fee).toFixed(2))} /></b></p>
                </div>
            </div>

            <div style={{ textAlign: 'end', marginTop: '10px' }}>

                <div>
                    <StripeCheckout
                        name='Total Payment'
                        amount={(total_price + shipping_fee) * 84.91 * 100}
                        currency="INR"
                        token={completePayment}
                        allowRememberMe
                        stripeKey="pk_test_51QaY1FCHREKHbBbwga4n9rvRtuPn4pioCUQDn6JDg4MoXlU818QhXi5t0mwJO3zzLymYK20SVjEvOZVMaU2TMSR300T8yug4xv"
                    >
                        <button>Payment </button>
                    </StripeCheckout>
                </div>
            </div>

        </div>

    </>
    )
}

export default Cart