import axios from 'axios';
import reducer from '../reducer/product_reducer';
import React, { createContext, useContext, useEffect, useReducer } from 'react'

const ProductContext = createContext();

const API = 'https://dummyjson.com/products';

const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate)

    const getProducts = async (url) => {

        dispatch({ type: 'SET_LOADING' })

        try {
            const res = await axios.get(url);
            const products = await res.data.products;

            dispatch({ type: 'SET_API_DATA', payload: products });

        } catch (error) {
            dispatch({ type: 'API_ERROR' })
        }
    }

    const getSingleProduct = async (url) => {

        dispatch({ type: 'SET_SINGLE_LOADING' });

        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: 'SET_SINGLE_DATA', payload: singleProduct });

        } catch (error) {
            dispatch({ type: 'API_ERROR' });
        }
    }

    useEffect(() => {

        getProducts(API);

    }, [])

    return (
        <ProductContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </ProductContext.Provider >
    )
}

const useProductContext = () => {
    return useContext(ProductContext)
}

export { ProductProvider, useProductContext }