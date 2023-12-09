// controlador que muestra todos los productos almanacenados en la bd
const  getAllProducts = ()=>{
console.log("controller");
}
// controlador encargado de crear productos y almacenar en la bd
const createPro =()=>{
    console.log("creando producto con todos los datos");
}

// funcion para modificar Producto
const putPro =(id)=>{
console.log("Modificando productos");

}

module.exports = {
    getAllProducts,
    createPro,
    putPro
}