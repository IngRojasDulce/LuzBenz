const { getAllProducts } = require("../controllers/controlllerProduct")

const getProducts = (req, res)=>{
  try {
    const resp = getAllProducts();
    res.status(200).json(resp);
  } catch (error) {
    res.status(400).json({error : error.message })
  } 
}
 
module.exports = {
    getProducts
}