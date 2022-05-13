import React from 'react';
import './App.css';
import Header from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import ProductFeature from './components/Product/ProductFeature'
import ProductLists from './components/ProductLists/ProductLists';
function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <ProductLists />
      <ProductFeature />
    </div>
  );
}

export default App;
