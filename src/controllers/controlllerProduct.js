
const {Product , Category}= require("../db")

// controlador que muestra todos los productos almanacenados en la bd


const getAllProducts = async () => { 
   
  const allPro = await Product.findAll(({
      include: [{
          model: Category,
          attributes: ['category'],
          // through: {
          //     attributes: [],
          // }
      }]
  }));
  console.log(allPro);
  return allPro;
};

// controlador encargado de crear productos y almacenar en la bd
const createPro = async(name,price, image, category, modelo)=>{
    const unid= await Product.findOrCreate({
        where: { name: name },
        defaults: {
          price: price,
          image
    
        }
      });
      const [categoryDB, created]= await Category.findOrCreate({
        where: { category },
        default: {
            category
        }
        });
        if(!created) return("categoria existente")

        console.log(categoryDB);
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