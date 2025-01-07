import React from "react"
import CartAmountToggle from "./CartAmountToggle"
import { MdDelete } from "react-icons/md";
import { useCartContext } from "../context/cart_context";
import './CSS/cartItem.css';

export const CartItem = ({ id, image, name, price, amount }) => {
    const { removeItem, increment, decrement } = useCartContext();

    return (
        <>
            <tr style={{ textAlign: 'center' }}>
                <td>
                    <div className="cart-image-name" id="para1" >
                        <div style={{ flex: '0 0 100px' }}>
                            <img src={image} alt={id} width={'100%'} />
                        </div>
                        <div style={{ fontSize: '1rem', flex: '2 1 90%', textAlign: 'left' }}>
                            <p className="cart-item-name">{name.slice(0, 20)}...</p>
                        </div>
                    </div></td>

                <td className="cart-hide"> <div id="para2">
                    <p>
                        ${price}
                    </p>
                </div>
                </td>

                <td style={{ justifyItems: 'center' }}> <CartAmountToggle amount={amount} setDecrease={() => decrement(id)} setIncrease={() => increment(id)} /></td>

                <td className="cart-hide"> <div id="para4">
                    ${(price * amount).toFixed(2)}
                </div></td>

                <td> <div id="para5">
                    <MdDelete fill="red" size={30} onClick={() => removeItem(id)} />
                </div></td>

            </tr>
        </>)
} 