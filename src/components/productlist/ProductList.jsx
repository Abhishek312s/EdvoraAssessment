import React from "react";
import Carousel from "../carousel/Carousel";
// import ProductCard from "../productcard/ProductCard";
import "./productList.css";

function ProductList({ filteredProducts }) {
  // console.log(filteredProducts);
  return (
    <>
      <div className="list-container">
        <h3 id="sub-head">Product Name</h3>
        <div className="cards">
        <Carousel filteredProducts={filteredProducts}/>
        </div>
        
      </div>
    </>
  );
}

export default ProductList;
