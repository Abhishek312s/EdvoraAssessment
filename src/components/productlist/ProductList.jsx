import React from "react";
import Carousel from "../carousel/Carousel";
// import ProductCard from "../productcard/ProductCard";
import "./productList.css";

function ProductList({ productData }) {
  // console.log(productData[0]?.image);
  return (
    <>
      <div className="list-container">
        <h3 id="sub-head">Product Name</h3>
        <div className="cards">
        <Carousel productData={productData}/>
        </div>
        
      </div>
    </>
  );
}

export default ProductList;
