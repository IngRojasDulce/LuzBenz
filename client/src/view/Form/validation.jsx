import React from 'react'

export const validation = (input, name) => { 
    
    const[errors,setErrors]=useState({
        name:"Nombre requerido",
        price: "Ingrese solo numeros",
        image: "Seleccione archivo",
        category: " Seleccione una Categoria",
        modelo: "Seleccione modelos de motos"
    
    
      })
    if(name==="name"){
      if(input.name!=="") setErrors({...errors,name:""})
      else setErrors({...errors, name:"Nombre requerido"})
    }
    
    if(name==="price"){
      if(input.price!=="" || Number.isInteger(input.price))setErrors({...errors,price:""})
      else setErrors({...errors, description:"Precio debe ser un numero"})
    }
  };

  return (
    <div>validation</div>
  )
}
