import { createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: typeof window !== 'undefined' && localStorage.getItem('addToCart') ?
            JSON.parse(localStorage.getItem('addToCart')) : [],
        cartTotalAmount: 0,
        cartTotalQuantity: 0,
    },
    reducers: {
        addToCart: (state, { payload }) => {
            const itemIndex = state.cartItems.findIndex(item => item._id === payload._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                // alert
                toast.info('Increase Product Quantity', {
                    position: 'top-left'
                })
            }
            else {
                const tempCartItems = { ...payload, cartQuantity: 1 };
                
                state.cartItems.push(tempCartItems)
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Course Added To Cart Successfully',
                    timer: 1500,
                })
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems))
        },
        //  decrease cart quantity
        decreaseCartQuantity: (state, { payload }) => {
            const cartItemIndex = state.cartItems.findIndex(item => item._id === payload._id);
            if (state.cartItems[cartItemIndex].cartQuantity > 1) {
                state.cartItems[cartItemIndex].cartQuantity -= 1;
                // alert
                toast.error(`Decreased cart quantity`, {
                    position: 'top-left'
                })
            }
            else if (state.cartItems[cartItemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter(item => item._id !== payload._id);

                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'Remove from Cart',
                    timer: 1500,
                })
            }
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems))
        },
        // removeFromCart
        removeFromCart: (state, { payload }) => {
            state.cartItems = state.cartItems.filter(item => item._id !== payload._id);
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Remove from Cart',
                timer: 1500,
            })
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems))
        },
        // get total
        getTotal: (state, { payload }) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0,
            })

            state.cartTotalAmount = total;
            state.cartTotalQuantity = quantity;
        },
        // clear cart
        clearCart: (state, action) => {
            state.cartItems = [];
            localStorage.setItem('addToCart', JSON.stringify(state.cartItems))
        },

    }
})

export const { addToCart, decreaseCartQuantity, removeFromCart, getTotal, clearCart } = cartSlice.actions;
export default cartSlice.reducer;