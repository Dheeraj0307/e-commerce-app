import React from 'react'
import CartAmountToggle from "../../component/CartAmountToggle"
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../../context/cart_context";
import FormatPrice from '../../helpers/FormatPrice';

export const CartProducts = ({ id, image, name, price, amount }) => {

    const { removeItem, increment, decrement } = useCartContext();


    return (
        <div className="grid-cart-products">

            <div className="cart-image" id="para1" >
                <img src={image} alt={id} width={100} />
            </div>
            <div className="cart-name" id="para2" >
                <p className="cart-item-name">{name} </p>
            </div>

            <div id="para3" className="cart-hide">
                <p> <b> <FormatPrice price={price} /></b> </p>
            </div>

            <div id='para4'>
                <CartAmountToggle amount={amount} setDecrease={() => decrement(id)} setIncrease={() => increment(id)} />
            </div>

            <div id="para5"   >
                <p> <b> <FormatPrice price={(price * amount).toFixed(2)} /></b>  </p>

            </div>

            <div id="para6"  >
                <MdDelete fill="red" size={30} onClick={() => removeItem(id)} />
            </div>
        </div>
    )
}
export default CartProducts