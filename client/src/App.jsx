import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import { Detail } from './view/Detail/Detail'
import { Products } from './components/Products'
import { Home } from './view/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Login } from './components/Login/Login'
import { DetailId } from './view/Detail/De/DetailId'
import { DasboardAdmin } from './view/DasboardAdmin/DasboardAdmin'
import { Form } from './view/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/detail/:id" element={<DetailId/>} />
        <Route exact path="/detail" element={<Detail/>} />
        <Route exact path='/form' element={<Form/>}/>
        <Route exact path='/dasboarAdmin' element= {<DasboardAdmin/>}/>
        <Route exact path='/login' element={<Login/>}/>
      </Routes>
   </div>
   
  )
}

export default App
