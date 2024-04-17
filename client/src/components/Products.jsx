import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../redux/actions/productAction'
import styles from './Products.module.css'
import { Product } from './Product/Product';


export const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsAll);
    // const frontend = useSelector(state=>state)
   
    useEffect(()=>{
      dispatch(productAction);
  },  [dispatch]);

 
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4"  >
        {Array.isArray(products) && products.map((elem, i) => 
          
        (  <Product key ={elem.id} name={elem.name} image={elem.image} price  = {elem.price}  id = {elem.id} category = {elem.Category.category}></Product>
        ))}
    </div>
);
};
  
