import React from 'react'
import { NavBar } from '../../components/NavBar/NavBar'
import { Header } from '../../components/Header/Header'

export const DasboardAdmin = () => {
  return (
    <div>
        <Header/>
        <nav class="nav flex-column">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
</nav>
    </div>
  )
}
