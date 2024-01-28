import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../redux/actions/productAction'
import styles from './Products.module.css'


export const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsAll);
    // const frontend = useSelector(state=>state)
   
    useEffect(()=>{
      dispatch(productAction);
  },  [dispatch]);

 
  return (
    <div>
        {Array.isArray(products) && products.map((elem, i) => 
          
        (
            <div key={elem.id} className={styles.car}>
                <p>Nombre : {elem.name}</p>
                <p>Categoria: {elem.Category.category}</p>
                <p>Imagen: {elem.image}</p>
                <p>Precio: {elem.price}</p>
            </div>
        ))}
    </div>
);
};
  
