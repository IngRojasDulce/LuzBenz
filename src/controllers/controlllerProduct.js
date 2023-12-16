
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
  const cate = await Category.findAll({
    
});
  return allPro;
};

// controlador encargado de crear productos y almacenar en la bd
const createPro = async(name,price, image, category, modelo)=>{
    const [newProduct, created]= await Product.findOrCreate({
        where: { name: name },
        defaults: {
          price,
          image
    
        }
      });
      const [categoryDB]= await Category.findOrCreate({
        where: { category },
        default: {
            category
        }
        });
        
        const cate = await Category.findAll({
          where: {category }});
          await newProduct.setCategory(categoryDB);
    return(cate)
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