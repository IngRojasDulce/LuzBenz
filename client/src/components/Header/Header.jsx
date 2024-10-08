import React from 'react';
import style from '../Header/header.module.css'
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  return (
    <header className={style.fondo}>
      <h1>Administrador</h1>
      <NavBar/>
    </header>
  )}
