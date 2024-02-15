import React, { useState } from 'react'

export const Form = () => {
  async function CreateProduct (newProduct) {
    const {name} = newProduct;
    await axios.post('http://localhost:3001/products',newProduct)
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
