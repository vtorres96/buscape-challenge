import React from 'react';
import { BrowserRouter } from 'react-router-dom' 

import Header from './components/Header/Header'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'

import Routes from './routes'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Product />
      <Cart />
      <Routes />      
    </BrowserRouter>
  );
}

export default App;
