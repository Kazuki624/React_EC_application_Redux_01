import { configureStore } from "@reduxjs/toolkit"


import {reducer as productRedducer } from "./slices/productsSlice";
import {reducer as CartRedducer } from "./slices/cartSlice";


export default configureStore({
    reducer: {
        products : productRedducer,
        cart : CartRedducer
    }
})
