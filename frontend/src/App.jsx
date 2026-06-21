import React from 'react'
import Header from './Components/Header'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './Pages/ProductDetail'

export default function () {
  return (
    <>
      <Header/>
       <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
</>

  )
}

