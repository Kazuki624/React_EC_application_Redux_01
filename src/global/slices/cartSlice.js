import { createSlice } from "@reduxjs/toolkit";

export const {actions, reducer} = createSlice({
    name :"cart",
    initialState : {
        items : [], 
        cartNumbers : {
            subtotal :0, 
            shipping : 0, 
            tax : 0,
            total : 0
        }
    },
    reducers : {
        addToCart(state, {payload:item}){
            // Push to Cart
            state.items.push({...item, quantity:1})
        },
        removeFromCart(state, {payload:item}){
            // remove item from the cart array
            const index = state.items.findIndex((i) => i.id === item.id)
            state.items.splice(index, 1)
        },
        incrementItemQuantity(state, {payload:{item, amount}}){
            state.items = state.items.map((i) => {
                return(i.id === item.id) ? ({...i, quantity : i.quantity + amount}) : i 
            }).filter((i) => i.quantity > 0)
        },
        calculateCartNumbers(state){
            let subtotal = 0, shipping = 0, tax = 0, total = 0;
            for(const item of state.items){
                subtotal += (item.price * item.quantity)
                shipping += (item.quantity * 2)   
            }
            tax += subtotal * 0.1
            total = subtotal +shipping + tax
            state.cartNumbers = {
                subtotal, shipping, tax, total
            }
        }
    }
})