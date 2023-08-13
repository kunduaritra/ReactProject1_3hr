import React from "react";

const ProductList = ({ products }) => {
  const electronics = products.filter(
    (product) => product.category === "electronics"
  );
  const food = products.filter((product) => product.category === "food");
  const skincare = products.filter(
    (product) => product.category === "skincare"
  );

  return (
    <React.Fragment>
      <h2>Products</h2>
      <h1>Electronics</h1>
      <ul>
        {electronics.map((e, index) => (
          <li key={index}>
            {e.sellingPrice} - {e.category} {e.productName}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Food</h1>
      <ul>
        {food.map((e, index) => (
          <li key={index}>
            {e.sellingPrice} - {e.category} {e.productName}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Skin Care</h1>
      <ul>
        {skincare.map((e, index) => (
          <li key={index}>
            {e.sellingPrice} - {e.category} {e.productName}{" "}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ProductList;
