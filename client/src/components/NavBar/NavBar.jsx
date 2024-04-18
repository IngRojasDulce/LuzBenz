import React from 'react';
import logo from '../../../imagen/LuzDenz.png';
import './navBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return ( 
        <div>
            <nav className="navbar bg-dark navbar-expand-lg border-bottom border-body" style={{padding:'0'}} data-bs-theme="dark">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div>
                        <img src={logo} className="rounded img-fluid img-thumbnail miniatura-logo" alt="..."/>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Quienes somos</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">contactanos</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">WhatsApp</a></li>
                                    <li><a className="dropdown-item" href="#">instagram</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Correo</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to ="/login" className="nav-link ">Admin</Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}