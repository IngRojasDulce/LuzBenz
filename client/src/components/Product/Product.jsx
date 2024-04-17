import React from 'react'
import { Link } from 'react-router-dom'

export const Product = (elem) => {
  return (
    <div>
         <Link to={`/detail/${elem.id}`}>

            <div className="col">
            <div   className="card" style={{ height: '400px', padding:'0'}} >
                 <img src={elem.image} className="card-img-top img-style" style={{maxWidth: '100%', maxHeight: '200px' }} alt="Producto"/>
                 <div className="card-body" >
                    <h4>{elem.name}</h4><br/>
                    <p>Categoria: {elem.category}</p>
                    <p>Precio: {elem.price}</p>
                 </div>
             </div>
            </div>
        </Link>
    </div>
  )
}
