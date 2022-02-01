import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Components/Login';
import ProductListing from './Components/ProductListing'
import ProductDetails from './Components/ProductDetails'

function App() {
  const token = localStorage.getItem('token');
  if(!token) {
    return <Login />
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<ProductListing/>}/>
          <Route path='/productListing' element={<ProductListing/>} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
