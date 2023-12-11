const { Products } = require("../handler/handlerProduct");
const {Product , Category}= require("../db")
// controlador que muestra todos los productos almanacenados en la bd
const  getAllProducts = ()=>{
console.log("controller");
}
// controlador encargado de crear productos y almacenar en la bd
const createPro = async(name,price, image, category, modelo)=>{
    const unid= await Product.findOrCreate({
        where: { name: name },
        defaults: {
          price: price,
          image
    
        }
      });
      const categoryDB = await Category.findAll({
        where: { name }
        });
        await unid.addCategory(categoryDB);
    return(unid)
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