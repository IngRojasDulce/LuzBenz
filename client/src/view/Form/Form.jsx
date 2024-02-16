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
        <div> 
        <label>Precio: 
        <input type="text"
            value={newProduct.price}
            name="price"
            onChange={handler}
            autoComplete="off"/>
            
        </label>
      </div>
      <div> 
        <label>Imagen: 
        <input type="text"
            value={newProduct.image}
            name="image"
            onChange={handler}
            autoComplete="off"/>
            
        </label>
      </div>
      <div> 
        <label>Categoria: 
        <input type="text"
            value={newProduct.category}
            name="category"
            onChange={handler}
            autoComplete="off"/>
            
        </label>
      </div>
      <div> 
        <label>Modelo: 
        <input type="text"
            value={newProduct.model}
            name="model"
            onChange={handler}
            autoComplete="off"/>
            
        </label>
      </div>
    </div>
    </div>
  )
}
