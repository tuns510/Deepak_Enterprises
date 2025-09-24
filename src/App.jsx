import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import ProductListing from './pages/Product/ProductListing'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products/:category' element={<ProductListing/>} />

      </Routes>
    </div>
  )
}

export default App
