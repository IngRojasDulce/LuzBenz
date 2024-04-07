import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchByName } from '../../redux/actions/productAction';

export const ProductName = ({ name }) => {
 
  const dispatch = useDispatch();

  useEffect(() => {
    // Disparar la acción de búsqueda por nombre
    if (name) {
      dispatch(searchByName(name));
    }
  }, [dispatch, name]);

  const products = useSelector(state => state.products.searchName);

  return (
    <div>
      {products && products.length > 0 ? (
        products.map(product => (
          <div key={product.id}>
            <p>Nombre: {product.name}</p>
            <p>Precio: {product.price}</p>
            <img src ={product.image}></img>
            <p>Categoría: {product.Category?.category}</p>
          </div>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};