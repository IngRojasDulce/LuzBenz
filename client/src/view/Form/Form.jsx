import React, { useState } from 'react';
import axios from 'axios';

export const Form = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    modelo: ""
  });

  async function CreateProduct() {
    try {
      const { name } = newProduct;
      await axios.post('http://localhost:3001/products', newProduct);
      console.log("Producto creado:", name);
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  }

  function handler(event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <div>
        <label>Nombre:
          <input
            type="text"
            value={newProduct.name}
            name="name"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <label>Precio:
          <input
            type="text"
            value={newProduct.price}
            name="price"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <label>Imagen:
          <input
            type="text"
            value={newProduct.image}
            name="image"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <label>Categoría:
          <input
            type="text"
            value={newProduct.category}
            name="category"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <label>Modelo:
          <input
            type="text"
            value={newProduct.modelo}
            name="modelo"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div>
        <button type="button" onClick={CreateProduct} className="btn btn-outline-dark">Crear Producto</button>
      </div>
    </div>
  );
};
