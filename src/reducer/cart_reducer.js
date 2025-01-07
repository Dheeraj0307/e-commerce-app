const cart_reducer = (state, action) => {

    if (action.type === 'ADD_TO_CART') {
        let { perProduct, amount } = action.payload;
        let existingProduct = state.cart.find((cueItem) =>
            cueItem.id === perProduct.id
        );

        if (existingProduct) {

            let updatedProduct = state.cart.map((curElem) => {
                if (curElem.id === perProduct.id) {
                    let newAmount = curElem.amount + amount;
                    console.log(curElem, 'newAmount')
                    if (newAmount >= curElem.max) {
                        newAmount = curElem.max;
                    }
                    return {
                        ...curElem,
                        amount: newAmount
                    }
                } else {
                    return curElem;
                }
            }
            );
            console.log(updatedProduct)
            return {
                ...state,
                cart: updatedProduct
            }
        } else {
            let cartProduct;

            cartProduct = {
                id: perProduct.id,
                name: perProduct.title,
                amount: amount,
                image: perProduct.thumbnail,
                price: perProduct.price,
                max: perProduct.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct]
            }
        }
    }

    if (action.type === 'REMOVE_ITEM') {

        let updatedCart = state.cart.filter((el) => el.id !== action.payload)

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'CLEAR_CART') {

        return {
            ...state,
            cart: []
        }
    }

    if (action.type === 'INCREMENT') {
        let updateProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let increaseAmt = curElem.amount + 1;

                if (increaseAmt >= curElem.max) {
                    increaseAmt = curElem.max;
                }
                return {
                    ...curElem,
                    amount: increaseAmt
                }
            } else {
                return curElem
            }
        });
        return { ...state, cart: updateProduct }
    }

    if (action.type === 'DECREMENT') {
        let updateProduct = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                let decreaseAmt = curElem.amount - 1;

                if (decreaseAmt <= 1) {
                    decreaseAmt = 1;
                }
                return {
                    ...curElem,
                    amount: decreaseAmt
                }
            } else {
                return curElem
            }
        });
        return { ...state, cart: updateProduct }
    }

    if (action.type === 'TOTAL_ITEM') {

        // // if u want to get total items means total items + no. of items then use this

        // let totalItems = state.cart.reduce((inital, current) => {
        //     let { amount } = current;
        //     let rounded = Math.round((inital + amount) * 100);
        //     let result = rounded / 100.00;
        //     return result;
        // }, 0);
        //

        // else u want only no. of items then this 

        let totalItems = state.cart.length;

        return {
            ...state,
            total_item: totalItems
        }
    }

    if (action.type === 'TOTAL_PRICE') {

        let totalPrice = state.cart.reduce((inital, curElem) => {
            let { amount, price } = curElem;

            inital = (inital + Number(amount * price));

            let rounded = Math.round(inital * 100);
            let result = rounded / 100.00;

            return result

        }, 0);

        return {
            ...state,
            total_price: totalPrice
        }
    }

    if (action.type === 'EMPTY_CART') {

        return { ...state, cart: [] }
    }

    return state;
}

export default cart_reducer