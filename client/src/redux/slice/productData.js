import { createSlice } from "@reduxjs/toolkit";

export	const productData= createSlice({
    name: "products", //Nombre del slice
    initialState: {
        productsAll: [],
        detalle: {},
        searchName:{},
        currentPage: 1,
        categories: [],
        cart: [],
    },
    reducers:{
        getAllProducts: (state, action)=>{
            state.productsAll = action.payload
        },
        
        getById: (state,action)=>{
            state.detalle= action.payload
        },
        getName: (state,action)=>{
            state.searchName = action.payload
        }
    }
})
export const {getAllProducts,getById, getName}=productData.actions

export default productData.reducer;