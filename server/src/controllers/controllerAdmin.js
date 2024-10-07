require('dotenv').config();
const {PASSWORD_ADMIN, USER_ADMIN} = process.env;


const validatorAdmin= (user, password)=>{
    console.log(PASSWORD_ADMIN , USER_ADMIN);
    if (user === USER_ADMIN && PASSWORD_ADMIN === password){
        return{ access :true}
    }
    throw new Error({access: false});

}
module.exports={validatorAdmin}