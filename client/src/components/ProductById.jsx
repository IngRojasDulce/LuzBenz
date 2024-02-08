import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productById } from '../redux/actions/productAction';
import styles from './Products.module.css';
import { useParams } from 'react-router-dom';

export const ProductById = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product); // Cambiado a product en singular ya que es un producto único

  useEffect(() => {
    // Disparamos la acción productById pasando el ID
    dispatch(productById(id))
      .then(() => {
        console.log('Producto cargado exitosamente'); // Puedes realizar acciones adicionales aquí si es necesario
      })
      .catch(error => {
        console.error('Error al cargar el producto:', error); // Manejo de errores
      });
  }, [dispatch, id]); // Asegúrate de incluir dispatch e id en la lista de dependencias del useEffect
  if (!product) {
    return <div>Cargando...</div>; // Otra lógica de carga
  }
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: {product.price}</p>
      {/* Agrega el resto de la información del producto aquí */}
    </div>
  );
};