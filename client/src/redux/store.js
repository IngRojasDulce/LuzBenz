import {configureStore} from "@reduxjs/toolkit";
import productData from "./slice/productData";

export default configureStore ({

    reducer :{
        products : productData
    }
})