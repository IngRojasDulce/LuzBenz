import React, { useState } from 'react';
import axios from 'axios';
import style from '../Form/form.module.css'
import { validation } from './validation';

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
    const [name, value] = event.target.value
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
    validation({
      ...newProduct,
      [name]: value},name 
    )
  }
  

  

  return (
    
    <div >
      <div className="row ">
        < div className="rounded col-6 col-md-6 border border-warning">
        <div >
        <label className={style.label}>Nombre:
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
        <label className={style.label}>Precio: 
          <input
            type="text"
            value={newProduct.price}
            name="price"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div className={style.label}>
        <label className={style.label}>Imagen: 
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
        <label className={style.label}>Categoría:
          <input
            type="text"
            value={newProduct.category}
            name="category"
            onChange={handler}
            autoComplete="off"
          />
        </label>
      </div>
      <div >
        <label className={style.label}>Modelo: 
          <input className={style.input.end}
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
        <div className="col-6 col-md-6">
          {/* <div className="card" >
          <img src={url_Imagen} className="card-img-top" alt="..."/>
         <div className="card-body">
       <h5 className="card-title">{newProduct.name}</h5>
        <p className="card-title">{newProduct.category}</p> 
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

<div className="col">
            <div   className="card" style={{ height: '400px', padding:'0'}} >
                 <img src={url_Imagen} className="card-img-top img-style" style={{maxWidth: '100%', maxHeight: '200px' }} alt="Producto"/>
                 <div className="card-body" >
                    <h4>{newProduct.name}</h4><br/>
                    <p>Categoria: {newProduct.category}</p>
                    <p>Precio: {newProduct.price}</p>
                 </div>
             </div>
            </div>
</div>
    
      </div>
      
      
    </div>
  );
};
