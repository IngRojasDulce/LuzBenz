// import {getAllProducts,getById} from '../slice/productData'
// import React from 'react';
// import axios from 'axios'


// export const productAction = (dispatch) => {
//   axios("http://localhost:3001/products")
//   .then(res=>dispatch(getAllProducts(res.data.results)))



//   return async function (dispatch) {
//     var productos = (await axios.get("http://localhost:3001/products"))
//     dispatch(getAllProducts(productos.data))
//     .catch(e=>console.log(e))
//   }


//     // return async function (dispatch) {
//     //   try {
//     //     // Realiza la solicitud con Axios
//     //     const response = await axios.get("http://localhost:3001/products");
  
//     //     // Imprime la respuesta en la consola del navegador
//     //     console.log(response.data);
  
//     //     // Despacha tu acción con los datos si es necesario
//     //     // dispatch(getAllProducts(response.data.results));
//     //   } catch (error) {
//     //     // Maneja los errores, si los hay
//     //     console.error("Error al obtener productos:", error);
//     //   }
//     // };
//   };


import { getAllProducts } from '../slice/productData';
import axios from 'axios';

export const productAction = async (dispatch) => {
  try {
    // Realiza la solicitud con Axios
    const response = await axios.get("http://localhost:3001/products");
    console.log('Data from productAction que:', response.data);
    // Despacha tu acción con los datos si es necesario
    dispatch(getAllProducts(response.data));
  } catch (error) {
    // Maneja los errores, si los hay
    console.error("Error al obtener productos:", error);
  }
};