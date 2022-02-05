import React from "react";
import "./filterModel.css";

function FilterModel({productData,stateFilterHandle,cityFilterHandle,productFilterHandle}) {

  // console.log(productData);

  

  const uniqueProducts = [...new Set(productData.map(data => data.product_name))]
  const uniqueStates = [...new Set(productData.map(data => data.address.state))]
  const uniqueCities = [...new Set(productData.map(data => data.address.city))]
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-container">
          <div>
            <input type="text" placeholder="Filters" onChange={(e)=>productFilterHandle(e.target.value)} />
          </div>

          <div className="filters">

              <select onChange={(e)=>productFilterHandle(e.target.value)} name="products" id="products">

                <option hidden value="">Products</option>
                {uniqueProducts.map((item,index)=>{
                  return(
                <option key={index}  value={item}>{item}</option> 
                )})}
                <option value="">None</option>

              </select>


              <select onChange={(e)=>stateFilterHandle(e.target.value)} name="states" id="states">

              <option hidden value="">States</option>
                {uniqueStates.map((item,index)=>{
                  return(
                <option key={index} value={item}>{item}</option> 
                )})}
                <option value="">None</option>

              </select>

              <select onChange={(e)=>cityFilterHandle(e.target.value)}  name="cities" id="cities">

              <option hidden value="">Cities</option>
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
