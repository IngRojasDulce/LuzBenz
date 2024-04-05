import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { searchByName } from '../../redux/actions/productAction';

export const ProductName = () => {
    // const {name} = useParams();
    // const dispatch = useDispatch();
    // const product = useSelector(state => state.products && state.products.searchName)

    // useEffect(() => {
    //     // Disparamos la acción productById pasando el ID
    //     dispatch(searchByName(name))
          
    //   }, [dispatch, name]);
    //   useEffect(() => {
    //     console.log("Contenido del producto:", product);
    //   }, [product]);

    const { name } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => {
      // Disparar la acción de búsqueda por nombre
      dispatch(searchByName(name));
    }, [dispatch, name]);
      return (
        <div>
          
          {product ? (
            <>
              
              <p>Nombre: {product.name}</p>
              <p>Precio: {product.price}</p>
              <p>Imagen: {product.image}</p>
              <p>Categoria: {product.Category?.category}</p>
              
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </div>
      );
}
