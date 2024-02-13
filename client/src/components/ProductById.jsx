import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productById } from '../redux/actions/productAction';

import { useParams } from 'react-router-dom';

export const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => console.log(  " imprimiendo state: " + state.product)); 
 
  useEffect(() => {
    // Disparamos la acción productById pasando el ID
    dispatch(productById(id, dispatch))
      
  }, [dispatch, id]); // Asegúrate de incluir dispatch e id en la lista de dependencias del useEffect
  
  return (
    <div>{ console.log("aqui tengo " + product+ id)
  }
      {/* <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      Agrega el resto de la información del producto aquí */}
    </div>
  );
};