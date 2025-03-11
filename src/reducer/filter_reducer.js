const filterReducer = (state, action) => {

    switch (action.type) {

        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true,
            }

        case 'SET_API_DATA': {

            return {
                ...state,
                products: action.payload,
                isLoading: false,
            }
        }

        case 'API_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }


        case 'SET_SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading: true,
            }

        case 'SET_SINGLE_DATA':
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }

        case 'LOAD_FILTER_PRODUCTS':

            const productPrices = action.payload.map((arr) => {
                return arr.price;
            })

            // // first method
            // let maxPrice = Math.max(...productPrices);
            // console.log(maxPrice)

            //second method

            let maxPrice = productPrices.reduce((init, current) => Math.max(init, current), 0)

            return {
                ...state,
                filter_product: [...action.payload],
                all_products: [...action.payload],
                filter: {
                    ...state.filter,
                    max_price: maxPrice,
                    price: maxPrice
                }
            }

        case 'HOMEFILTER':
            return {
                ...state,
                filter: {
                    ...state.filter,
                    category: action.payload,
                }
            }

        case 'SET_GRID_VIEW':
            return {
                ...state,
                grid_view: true
            }

        case 'SET_LIST_VIEW':
            return {
                ...state,
                grid_view: false
            }

        case 'GET_SORT_VALUE':

            return {
                ...state,
                sorting_products: action.payload,
            }

        case 'SORTING_PRODUCT':

            let newSortData;

            const { filter_product, sorting_products } = state;

            let AltData = [...filter_product];


            const sortingProduct = (a, b) => {

                if (sorting_products === 'a-z') {
                    return a.title.localeCompare(b.title)
                }

                if (sorting_products === 'z-a') {
                    return b.title.localeCompare(a.title)
                }

                if (sorting_products === 'lowest') {
                    return a.price - b.price
                }

                if (sorting_products === 'highest') {
                    return b.price - a.price
                }
            }

            newSortData = AltData.sort(sortingProduct);

            return {
                ...state,
                filter_product: newSortData
            }

        case 'UPDATE_FILTER_VALUES':

            const { name, value } = action.payload;

            return {
                ...state,
                filter: {
                    ...state.filter, [name]: value
                }
            }

        case 'FILTER_PRODUCTS':

            let alteredData = [...state.all_products];

            const { text, category, price } = state.filter;



            if (text) {

                alteredData = alteredData.filter((elem) => {
                    return elem.title.toLowerCase().includes(text)
                })
            }

            if (category !== 'All') {
                alteredData = alteredData.filter((arr) => {
                    return arr.category === category
                })
            }

            if (price === 0) {
                alteredData = alteredData.filter((arr) => {
                    return arr.price === price
                })
            } else {

                alteredData = alteredData.filter((arr) => {
                    return arr.price <= price
                })
            }

            return {
                ...state,
                filter_product: alteredData
            }

        case 'REMOVE_ALL_FILTERS':
            return {
                ...state,
                sorting_products: 'none',
                filter: {
                    ...state.filter,
                    text: '',
                    category: 'All',
                    min_price: 0,
                    price: state.filter.max_price,
                    max_price: state.filter.max_price
                }
            }


        default:
            return state
    }
}

export default filterReducer;