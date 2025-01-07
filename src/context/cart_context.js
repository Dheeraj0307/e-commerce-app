import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cart_reducer'
import { useNavigate } from "react-router-dom";



const CartContext = createContext();

const localStorageData = () => {
    let localData = localStorage.getItem('cart');

    if (localData) return JSON.parse(localData);
    else {
        return []
    }
}

const initialState = {
    cart: localStorageData(),
    total_item: '',
    total_price: '',
    shipping_fee: 5,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const navigate = useNavigate();


    const addToCart = (perProduct, amount) => {
        dispatch({ type: 'ADD_TO_CART', payload: { perProduct, amount } })
    };

    const removeItem = (id) => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const increment = (id) => {
        dispatch({ type: 'INCREMENT', payload: id })
    }
    const decrement = (id) => {
        dispatch({ type: 'DECREMENT', payload: id })
    }

    const completePayment = (token) => {
        dispatch({ type: 'EMPTY_CART' })
        console.log(token)
        localStorage.setItem('cart', [])
        navigate('/payment-success')
    }

    useEffect(() => {

        dispatch({ type: 'TOTAL_ITEM' })
        dispatch({ type: 'TOTAL_PRICE' })

        // const getlocalData = JSON.parse(localStorage.getItem('apiData')) || '';
        // setApiData(getlocalData)

        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, increment, decrement, completePayment }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}


export { CartProvider, useCartContext };