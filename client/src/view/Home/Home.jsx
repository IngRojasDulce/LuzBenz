import React, { useState } from 'react';
import { Products } from '../../components/Products';
import { NavBar } from '../../components/NavBar/NavBar';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { useDispatch } from 'react-redux';
import { ProductName } from '../../components/ProductName/ProductName';
import { Pagination } from '../../components/pagination/pagination';

export const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirecciona a la ruta con el valor del input como query
    navigate('/detail'); // Redirige al usuario a la ruta '/detail'
    console.log("Valor de input: " + searchValue);
    setSubmittedValue(searchValue); // Almacena el valor enviado
    setSearchValue(''); // Limpia el input después de enviarlo
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className='margen'>
        <div className='div-Search'>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
          </form>
        </div>
      </div>
      <div className='row'>
        {searchValue && <ProductName name={searchValue} />}
        <Products />
        <Pagination/>
      </div>
    </div>
  );
};
