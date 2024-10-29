import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Header } from '../../components/Header/Header'

export const DasboardAdmin = () => {
  return (
    <div>
        <Header/>
        <nav class="nav flex-column">
          <div>
          <div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Menu
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Crear Producto</a></li>
      <li><a class="dropdown-item" href="#">Modificar Producto</a></li>
      <li><a class="dropdown-item" href="#">Eliminar Producto</a></li>
    </ul>
  </div>
  </div>
        </div>
</nav>
    </div>
  )
}
