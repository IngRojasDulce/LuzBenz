const { getAllProducts, createPro } = require("../controllers/controlllerProduct")

const getProducts = (req, res)=>{
  try {
    const resp = getAllProducts();
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({error : error.message })
  } 
}

const createProduct = async(req, res)=>{
  try {
    const  { name,price, image, category, modelo} = req.body;
    if(name && price && image && category && modelo){
      const response = await createPro(req.body);
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
 
module.exports = {
    getProducts, 
    createProduct
}