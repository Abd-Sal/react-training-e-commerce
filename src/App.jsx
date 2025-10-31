import './App.css'
import {Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Registration from './pages/Registration';
import { AuthContext } from './context/AuthContext';
import { useEffect, useState } from 'react';
import './index.css'
import "flag-icons/css/flag-icons.min.css";

function App() {
  const [auth, setAuth] = useState({})
  const userContext = {auth, setAuth}
  return (
    <>
      <AuthContext.Provider value={userContext}>
        <Routes>
          <Route path="/" element={<Layout />}>         
            <Route index element={<Home/>}/>
            <Route path='/products' element={<Products search='' category=''/>}/>
            <Route path='/products/:id' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/about-us' element={<AboutUs/>}/>
            <Route path='/contact-us' element={<ContactUs/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
