import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'

import { Detail } from './view/Detail/Detail'
import { Form } from './view/Form/form'
import { Products } from './components/Products'
import { Home } from './view/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/detail/:id" element={<Detail/>} />
        <Route exact path='/form' element={<Form/>}/>
      </Routes>
   </div>
   
  )
}

export default App
