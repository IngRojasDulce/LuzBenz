import React from 'react'
import { Products } from '../../components/Products'
import { NavBar } from '../../components/NavBar/NavBar';

import './home.css';

export const Home = () => {
  return (
    <div>
      <div>
       <NavBar></NavBar>
        {/* <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">  </nav> */}
      </div>
      <div className='d-flex justify-content-center align-items-center'> 
          <form className="d-flex" role="search">
            <input className="form-control form-control-sm me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
          </form>
      </div>
      
      <div className='row '>
         <Products/>home
      </div>
    

     
    </div>
  )
}
