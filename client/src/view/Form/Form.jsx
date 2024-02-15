import React, { useState } from 'react'
import axios from 'axios'

export const Form = () => {
  async function CreateProduct(newProduct) {
    try {
      const { name } = newProduct;
      await axios.post('http://localhost:3001/products', newProduct);
      console.log("Producto creado:", name);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  }
  function handler (event){
    setNewProduct({
        ...newProduct,
        [event.target.name]: event.target.value,
    })
    
    CreateProduct(newProduct)}
  

const [newProduct, setNewProduct] = useState({
  name: "",
  
})
  return (
    <div>


      <div> 
        <label>nombre: 
        <input type="text"
            value={newProduct.name}
            name="name"
            onChange={handler}
            autoComplete="off"/>
            
        </label>
      </div>
    </div>
  )
}
