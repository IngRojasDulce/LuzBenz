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

  const [url_Imagen, setUrl_imagen] = useState("")
  const changeUploadImage =async (e)=>{
    const file = e.target.files[0];

    const data =new FormData();
    data.append("file", file);
    data.append("upload_preset", "Luzden")
    const cloud_name ="dsxnjlxu5"
    const response =await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, data )
   console.log("aqui lo que responde cloudinary" + response.data.secure_url);
    setUrl_imagen(response.data.secure_url);
    setNewProduct({ ...newProduct, image: response.data.secure_url })
  }
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
            type="file"
            accept='image/*'
            // value={newProduct.image}
            name="image"
            onChange={changeUploadImage}
            // onChange={handler}
            autoComplete="off"
          />
          {/* {url_Imagen && (<div>
            <img src={url_Imagen}/>
          </div>)} */}
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
