import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productAction } from '../redux/actions/productAction'

export const Products = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products && state.products.data); 
    // const frontend = useSelector(state=>state)
    useEffect(()=>{
      dispatch(productAction);
  }, [dispatch]);

  return (
    <div>
      {products && products.map((elem, i) => (
        <div key={i}>
          <p>{elem.name}</p>
          <p>{elem.Category}</p>
        </div>
      ))}
    </div>
  );
};
  
