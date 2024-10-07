const { response } = require("express");
const { validatorAdmin } = require("../controllers/controllerAdmin");


const handlerSinginAdmin =async(req,res)=>{
  try {
    const {user, password} = req.body
    console.log("handler : "  + user, password);
    const result = await validatorAdmin(user, password) 
    console.log(result);
    
    res.status(200).json(result)
    
  } catch (error) {
    res.status(400).json({error : error.message })
  } 
}
module.exports ={
    handlerSinginAdmin
}