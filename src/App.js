import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <h2>3 hour React js Project 1</h2>
      <ProductForm products={products} setProducts={setProducts} />
      <ProductList products={products} />
    </div>
  );
}

export default App;
