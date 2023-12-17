const { getAllProducts, createPro, searchById } = require("../controllers/controlllerProduct")

const getProducts = async(req, res)=>{
  try {
    const resp = await getAllProducts();
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({error : error.message })
  } 
}

const searchId = async(req, res) =>{
  try {
    const{id} = req.params;
    const resp = await  searchById(id);
    res.status(200).json(resp);

  } catch (error) {
    res.status(400).json({error: error.message})
    
  }
}


const createProduct = async(req, res)=>{
  try {
    const  { name,price, image, category, modelo} = req.body;
    if(name && price && image && category && modelo){
      const response = await createPro(name,price, image, category, modelo);
      res.status(201).json(response);
      }
    else {
      return res.status(400).send("Falta datos")
    }
    }
   catch (error) {
    res.status(400).json({error : error.message })
  }

}

// const updateProduct = ()=>{
// console.log("modificando")
// }
 
module.exports = {
    getProducts, 
    createProduct, searchId
}