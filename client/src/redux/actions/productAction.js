
import { getAllProducts,getById } from '../slice/productData';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const productAction = async (dispatch) => {
  try {
    // Realiza la solicitud con Axios
    const response = await axios.get("http://localhost:3001/products");
    console.log('Data almacenada:', response.data);
    // Despacha tu acción con los datos si es necesario
    dispatch(getAllProducts(response.data));
  } catch (error) {
    // Maneja los errores, si los hay
    console.error("Error al obtener productos:", error);
  }
};
export const productById = async (id, dispatch) => {
  try {
    // Realiza la solicitud con Axios
    const response = await axios.get("http://localhost:3001/products/"+id);
    console.log('Data del detail:', response.data);
    // Despacha tu acción con los datos si es necesario
    dispatch(getById(response.data));
  } catch (error) {
    // Maneja los errores, si los hay
    console.error("Error al obtener productos:", error);
  }
};
