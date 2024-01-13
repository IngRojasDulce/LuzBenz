import { createSlice } from "@reduxjs/toolkit";

export	const productData= createSlice({
    name: "products", //Nombre del slice
    initialState: {
        productsAll: [],
        products: [],
        currentPage: 1,
        categories: [],
        cart: [],
    },
    reducers:{
        getAllProducts: (state, action)=>{
            state.productsAll = action.payload
        },
        getById: (state,action)=>{
            state.detail= action.payload
        }
    }
})
export const {getAllProducts,getById}=productData.actions

export default productData.reducer;