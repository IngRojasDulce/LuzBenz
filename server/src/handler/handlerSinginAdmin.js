

const handlerSinginAdmin =async(req,res)=>{
  try {
    const {name, password} = req.body
    console.log(name, password);
    res.status(200).json({ name, password})
    
  } catch (error) {
    res.status(400).json({error : error.message })
  } 
}
module.exports ={
    handlerSinginAdmin
}