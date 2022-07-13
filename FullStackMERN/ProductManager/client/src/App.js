import './App.css';
import React from 'react';
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import AllProducts from './views/AllProducts';
import EditProduct from './views/EditProduct';
import {
  Link,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/products/add" element={<Main />} />
        <Route path="/products/view/:id" element={<OneProduct />} />
        <Route path="/products/view" element={<AllProducts />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
