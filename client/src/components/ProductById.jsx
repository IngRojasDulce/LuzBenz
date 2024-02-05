import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction, productById } from '../redux/actions/productAction'
import styles from './Products.module.css'

export const ProductById = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    useEffect(()=>{
        dispatch(productById(fda7c467-42aa-4c17-96d8-2228ed650f33));
    },  [dispatch]);

  return (
    <div>{console.log(products)}</div>
  )
}
