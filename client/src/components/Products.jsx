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
    <div className="row row-cols-1 row-cols-md-3 g-4"  >
        {Array.isArray(products) && products.map((elem, i) => 
          
        (  <div class="col">
             <div  key={elem.id} className="card" style={{ height: '400px', padding:'0'}} >
                 <img src={elem.image} className="card-img-top img-style" style={{maxWidth: '100%', maxHeight: '200px' }} alt="Producto"/>
                 <div className="card-body" >
                 <h4>{elem.name}</h4><br/>
                    <p>Categoria: {elem.Category.category}</p>
                    <p>Precio: {elem.price}</p>
                 </div>
             </div>
            </div>
            // <div key={elem.id} className="card">
            //     <img src={elem.image} class="card-img-top" alt="Producto"></img>
            //     <div>
            //         <h4>{elem.name}</h4><br/>
            //         <p>Categoria: {elem.Category.category}</p>
                
            //         {/* <p>Imagen: {elem.image} class="card-img-top"</p> */}
            //         <p>Precio: {elem.price}</p>
            //     </div>
            // </div>
        ))}
    </div>
);
};
  
