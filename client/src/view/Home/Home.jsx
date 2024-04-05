import React, { useState } from 'react'
import { Products } from '../../components/Products'
import { NavBar } from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { useDispatch } from 'react-redux';
import { ProductName } from '../../components/ProductName/ProductName';

export const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirecciona a la ruta con el valor del input como query
    console.log(searchValue);
    setSubmittedValue(searchValue); // Almacena el valor enviado
    setSearchValue(''); // Limpia el input después de enviarlo
  };
  return (

    
    <div>
      <div>
       <NavBar></NavBar>
        {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">  </nav> */}
      </div>
      <div className='d-flex justify-content-center align-items-center div-Search'> 
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" 
            aria-label="Search" 
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}/>
            <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
          </form>
      </div>
      
      <div className='row '>
      {submittedValue && <ProductName name={submittedValue} />}
         <Products/>home
      </div>
    

     
    </div>
  )
}
