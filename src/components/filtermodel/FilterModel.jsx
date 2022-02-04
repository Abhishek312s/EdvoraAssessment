import React from "react";
import "./filterModel.css";

function FilterModel({productData}) {
  // console.log(productData);
  return (
    <>
      <div className="filter-wrapper">
        <div className="filter-container">
          <div>
            <input type="text" placeholder="Filters" />
          </div>

          <div className="filters">

              <select name="cars" id="cars">
                <option value="volvo">Products</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>


              <select name="cars" id="cars" >
                <option value="volvo">State</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>

              <select name="cars" id="cars">
                <option value="volvo">City</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>

          </div>
        </div>
      </div>
    </>
  );
}

export default FilterModel;
