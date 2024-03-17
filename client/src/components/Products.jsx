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
                <img src={elem.image} class="card-img-top" alt="..."></img>
                <div>
                    <h4>{elem.name}</h4><br/>
                    <p>Categoria: {elem.Category.category}</p>
                
                    {/* <p>Imagen: {elem.image} class="card-img-top"</p> */}
                    <p>Precio: {elem.price}</p>
                </div>
            </div>
        ))}
    </div>
);
};
  
