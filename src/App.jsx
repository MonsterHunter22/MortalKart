import { useState } from 'react'
import './App.css'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import ScrollToTop from './pages/ScrollToTop'


function App() {
  

  return (
    <>
      <CartProvider>

            <BrowserRouter>
            
            <ScrollToTop/>

                <Navbar />

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/products"
                        element={<Products />}
                    />

                    <Route
                        path="/product/:id"
                        element={<ProductDetails />}
                    />

                    <Route
                        path="/cart"
                        element={<Cart />}
                    />

                </Routes>

            </BrowserRouter>

        </CartProvider>
        
    </>
  )
}

export default App
