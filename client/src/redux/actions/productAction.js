
import { getAllProducts,getById, getName } from '../slice/productData';
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
export const productById = createAsyncThunk(
  'products/getProductById',
  async (id, { dispatch }) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      dispatch(getById(response.data)); // Aquí se despacha la acción getById con los datos del producto
      return response.payload;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      throw error;
    }
  }
);

export const searchByName = createAsyncThunk('products/getName',
  async(nameInput, {dispatch}) =>{
    try {
      
      const response = await axios.get(`http://localhost:3001/products/?name=${nameInput}`);
      console.log("respuesta del back" , response.data);
      dispatch(getName(response.data))
      return response.data;
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      throw error;
    }
  }
)