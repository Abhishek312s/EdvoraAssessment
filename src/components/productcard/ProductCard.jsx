import React from "react";
import "./productCard.css";

function ProductCard(props) {
  console.log(props);
  return (
    <>
      <div className="card-container">
        <div className="card-subcontainer">
          <div className="img-container">
            <img
              src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
              alt="Product_Image"
            />
            <span>Location</span>
          </div>
          <div className="content-container">
            <h3>{props.product_name}</h3>
            <h4>{props.brand_name}</h4>
            <p> &#36; {props.price}</p>
            <span id="date">Date: 10:12:2021</span>
          </div>
        </div>
        
        
        <p>{props.discription}</p>
      </div>
    </>
  );
}

export default ProductCard;
