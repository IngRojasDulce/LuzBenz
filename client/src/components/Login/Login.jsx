import axios from 'axios';
import React, { useState } from 'react'

export const Login = () => {
    const [userAdmin, setUserAdmin] = useState({
        user: "",
        password:"",
        stateButton: ""
    });
     async function SignIn(params) {
        try {
            const {name, password} = userAdmin;
            await axios.post("http://localhost:3001/login",user )
        } catch (error) {
            
        }
     }

    function handler(){

    }

  return (
    <div>Login

        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Administrador</label>
                <input type="email" value={userAdmin.name} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Ingrese nombre del Administrador</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password"  value ={user.password} class="form-control" id="exampleInputPassword1"/>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Mostrar</label>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
       </div>
  )
}
