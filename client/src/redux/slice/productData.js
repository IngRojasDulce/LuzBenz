import { createSlice } from "@reduxjs/toolkit";´

export	const productData= createSlice({
    name: "products", //Nombre del slice
    initialState: {
        productsAll: [],
        products: [],
        currentPage: 1,
        categories: [],
        cart: [],
    },
})