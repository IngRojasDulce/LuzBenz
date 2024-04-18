import React from 'react'
import { ProductById } from '../../components/ProductById'
import { ProductName} from '../../components/ProductName/ProductName'

export const Detail = () => {
  const productById= ProductById;
  const productName = ProductName
  return (
    < div>
      
  <div><ProductById/></div>
    <div><ProductName/></div>
    </div>
  )
}
