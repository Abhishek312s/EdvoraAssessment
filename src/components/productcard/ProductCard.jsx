import React from "react";
import "./productCard.css";

function ProductCard(props) {
  // console.log(props);
  return (
    <>
      <div className="card-container">
        <div className="card-subcontainer">
          <div className="img-container">
            <img
              src={props.image}
              alt="Product_Image"
            />
            
          </div>
          <div className="content-container">
            <h3>{props.product_name}</h3>
            <h4>{props.brand_name}</h4>
            <p> &#36; {props.price}</p>
            
          </div>
        </div>
        <div className="state-time-wrapper">
        <span>{props.address.state}</span>
        <span id="date">Date: {props.time.slice(0,10)}</span>
        </div>
        <p>{props.discription}</p>
      </div>
    </>
  );
}

export default ProductCard;
