import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { NavBar } from '../NavBar/NavBar';

export const Login = () => {
  const [userAdmin, setUserAdmin] = useState({
    user: '',
    password: '',
    stateButton: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const navigate = useNavigate();

  async function SignIn(formData) {
    try {
      const { user, password } = formData;
      const response = await axios.post('http://localhost:3001/loginAdmin', { user, password });

      if (response.status === 200) {
        console.log('Login successful!');
        navigate('/dasboarAdmin'); // Redirect to form page
      } else {
        console.error('Login failed:', response.data.message || 'Unexpected error');
        Swal.fire({
          title: 'Error!',
          text: response.data.message || 'Login failed. Please try again.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Credenciales fallidas, intente de nuevo',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  function handler(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Extract form data
    const formData = {
      user: event.target.elements.user.value,
      password: event.target.elements.password.value,
    };

    SignIn(formData);
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div>
    <NavBar/>
    <div>
    
      Login
      <form onSubmit={handler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Administrador
          </label>
          <input
            type="email"
            value={userAdmin.name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setUserAdmin({ ...userAdmin, user: e.target.value })}
            name="user" // Add name attribute for form data access
          />
          <div id="emailHelp" className="form-text">
            Ingrese nombre del Administrador
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            value={userAdmin.password}
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setUserAdmin({ ...userAdmin, password: e.target.value })}
            name="password" // Add name attribute for form data access
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" 
          checked={isPasswordVisible} 
          onChange={() => setIsPasswordVisible(!isPasswordVisible)} />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Mostrar
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
    </div>
  );
};