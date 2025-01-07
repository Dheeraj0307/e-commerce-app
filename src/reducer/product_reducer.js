const product_reducer = (state, action) => {

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


        default:
            return state

    }
}

export default product_reducer 