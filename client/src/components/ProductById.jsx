import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productById } from '../redux/actions/productAction';

import { useParams } from 'react-router-dom';

export const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products && state.products.detalle); 
 
  useEffect(() => {
    // Disparamos la acción productById pasando el ID
    dispatch(productById(id))
      
  }, [dispatch, id]);
  useEffect(() => {
    console.log("Contenido del producto:", product);
  }, [product]); //  incluir dispatch e id en la lista de dependencias del useEffect
  
  return (
    <div>
      {product ? (
        <>
          <h2>{console.log("holA"+product)}</h2>
          <p>Nombre: {product.name}</p>
          <p>Precio: {product.price}</p>
          <p>Imagen: {product.image}</p>
          <p>Categoria: {product.Category.category}</p>
          {/* Agrega el resto de la información del producto aquí */}
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};