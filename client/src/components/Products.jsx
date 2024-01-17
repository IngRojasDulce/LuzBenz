import React, { useEffect } from 'react'
import {useDispath} from 'react-redux'
import { productAction } from '../redux/actions/productAction'

export const Products = () => {

    const dispatch = useDispath()
    useEffect(()=>{

        dispatch(productAction)
    },[])
  return (
    <div>Products</div>
  )
}
