import React, { useState, useEffect } from "react";

const ProductForm = ({ products, setProducts }) => {
  const [productID, setProductID] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      productID,
      sellingPrice,
      productName,
      category,
    };
    localStorage.setItem(productID, JSON.stringify(newProduct));
    setProducts([...products, newProduct]);
    console.log(products);
    setProductID("");
    setSellingPrice("");
    setProductName("");
    setCategory("");
  };
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <label>Product ID:</label>
        <input
          type="text"
          placeholder="Enter Product ID"
          value={productID}
          onChange={(e) => {
            setProductID(e.target.value);
          }}
        />
        <label>Selling Price:</label>
        <input
          type="text"
          placeholder="Enter Selling Price"
          value={sellingPrice}
          onChange={(e) => {
            setSellingPrice(e.target.value);
          }}
        />
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="Enter Product Name"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <label>Choose Catagory</label>
        <select
          value={category}
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="electronics" selected>
            Electronics
          </option>
          <option value="food">Food</option>
          <option value="skincare">Skin Care</option>
        </select>
        <input type="submit" value="Add Product" />
      </form>
    </React.Fragment>
  );
};

export default ProductForm;
