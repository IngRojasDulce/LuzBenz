
const {Product , Category, Modelo}= require("../db");
const {Op} = require('sequelize');


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
// busqueda de producto por id , retornando realcion con tablas
const searchById = async(id)=>{
 
const product = await Product.findByPk(id, {
  include: [
    {
      model: Category,
      attributes: ['category'],
    },
    {
      model: Modelo,
      attributes: ['name'],
    },
  ],
});
return product
}


// controlador para la busqueda de producto por nombre del producto

const searchByName = async(name)=>{
  const productName = await Product.findAll({
     where: {name: {
      [Op.iLike]: "%" + name + "%"
    }}
  })

  return productName;
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
      // carga el modelo Categoria en caso de no estar registrado
    const [categoryDB]= await Category.findOrCreate({
        where: { category },
        default: {
            category
        }
        });

        const [modeloDB]= await Modelo.findOrCreate({
          where: { name: modelo },
          default: {
              name
          }
          });
        
      const cate = await Category.findAll({
          where: {category }});
      
        
          await newProduct.setCategory(categoryDB);

          await newProduct.addModelo(modeloDB)
    return(modeloDB)
}


// funcion para modificar Producto
const putPro =(id)=>{
console.log("Modificando productos");

}

module.exports = {
    getAllProducts,
    createPro,
    putPro,
    searchById, 
    searchByName,
    searchByName
}  