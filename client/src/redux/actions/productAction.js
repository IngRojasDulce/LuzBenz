import {getAllProducts,getById} from '../slice/productData'
import React from 'react'


const productAction = () => {
    return async function (dispatch) {
      try {
        // Realiza la solicitud con Axios
        const response = await axios.get("http://localhost:3001/products");
  
        // Imprime la respuesta en la consola del navegador
        console.log(response.data);
  
        // Despacha tu acción con los datos si es necesario
        // dispatch(getAllProducts(response.data.results));
      } catch (error) {
        // Maneja los errores, si los hay
        console.error("Error al obtener productos:", error);
      }
    };
  };