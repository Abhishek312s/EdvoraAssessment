import React from "react";
import "./filterModel.css";

function FilterModel({productData,searchHandle}) {

  // console.log(productData);

  

  const uniqueProducts = [...new Set(productData.map(data => data.product_name))]
  const uniqueStates = [...new Set(productData.map(data => data.address.state))]
  const uniqueCities = [...new Set(productData.map(data => data.address.city))]
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-container">
          <div>
            <input type="text" placeholder="Filters" onChange={(e)=>searchHandle(e.target.value)} />
          </div>

          <div className="filters">

              <select name="products" id="products">

                <option hidden selected value="">Products</option>
                {uniqueProducts.map((item,index)=>{
                  return(
                <option key={index} value={item}>{item}</option> 
                )})}
                <option value="">None</option>

              </select>


              <select name="states" id="states">

              <option hidden selected value="">States</option>
                {uniqueStates.map((item,index)=>{
                  return(
                <option key={index} value={item}>{item}</option> 
                )})}
                <option value="">None</option>

              </select>

              <select name="cities" id="cities">

              <option hidden selected value="">Cities</option>
                {uniqueCities.map((item,index)=>{
                  return(
                <option key={index} value={item}>{item}</option> 
                )})}
                <option value="">None</option>

              </select>

          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModel;
