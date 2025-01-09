import React, { useState, useEffect, useReducer } from "react"
import { createContext, useContext } from "react"
import reducer from '../reducer/filter_reducer';
import axios from "axios";

const FilterContext = createContext();

const API = 'https://dummyjson.com/products';

const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    isSingleLoading: false,
    singleProduct: {},
    filter_product: [],
    all_products: [],
    grid_view: true,
    sorting_products: 'none',
    filter: {
        text: '',
        category: 'All',
        price: 0,
        max_price: 0,
        min_price: 0
    },
}


export const FilterProvider = ({ children }) => {

    const [currentPage, setCurrentPage] = useState(1);
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
            setTimeout(() => {
                dispatch({ type: 'SET_SINGLE_DATA', payload: singleProduct });
            }, 1000);

        } catch (error) {
            dispatch({ type: 'API_ERROR' });
        }
    }

    const setGridView = () => {
        setCurrentPage(1)
        return dispatch({ type: 'SET_GRID_VIEW' });
    }

    const setListView = () => {
        setCurrentPage(1)
        return dispatch({ type: 'SET_LIST_VIEW' });
    }

    const Sorting = (e) => {
        setCurrentPage(1)
        const sort_value = e.target.value;

        return dispatch({ type: 'GET_SORT_VALUE', payload: sort_value });
    }

    const handleChange = (e) => {
        setCurrentPage(1)
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_FILTER_VALUES', payload: { name, value } });
    }

    const clearFilter = () => {
        setCurrentPage(1)
        dispatch({ type: 'REMOVE_ALL_FILTERS' })
    }

    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCTS' })
        dispatch({ type: 'SORTING_PRODUCT', payload: state.products });
    }, [state.sorting_products, state.filter])

    useEffect(() => {
        dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: state.products });
    }, [state.products])

    useEffect(() => {
        getProducts(API);
    }, [])

    return <FilterContext.Provider value={{ ...state, setGridView, setListView, Sorting, handleChange, clearFilter, getSingleProduct, currentPage, setCurrentPage }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}
