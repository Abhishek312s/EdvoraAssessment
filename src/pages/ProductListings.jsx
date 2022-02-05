import React, { useState } from "react";
import { useEffect } from "react";
import "./productListings.css";
import FilterModel from "../components/filtermodel/FilterModel";
import ProductList from "../components/productlist/ProductList";

function ProductListings() {
  const axios = require("axios");
  const [productData, setProductData] = useState([]);
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [productFilter, setProductFilter] = useState("");

  const callApi = async () => {
    await axios({
      method: "get",
      url: "https://assessment-edvora.herokuapp.com",
    })
      .then((res) => {
        setProductData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    callApi();
    // eslint-disable-next-line
  }, []);

  const productFilterHandle = (value) => {
    setProductFilter(value);
    // console.log(value);
    // console.log(search);
  };
  const stateFilterHandle = (value) => {
    setStateFilter(value);
    // console.log(value);
    // console.log(search);
  };
  const cityFilterHandle = (value) => {
    setCityFilter(value);
    // console.log(value);
    // console.log(search);
  };

  // const filteredProducts = productData
  // .filter((item) =>
  //   item.product_name.toLowerCase().includes(search.toLowerCase()))

  const filteredProducts = productData
  .filter((item) =>
    item.product_name.toLowerCase().includes(productFilter.toLowerCase()))
  .filter((item) =>
    item.address.state.includes(stateFilter))
  .filter((item) =>
    item.address.city.includes(cityFilter));
  // console.log(filteredProducts);

  return (
    <>
      <div className="container">
        <FilterModel productData={productData} productFilterHandle={productFilterHandle}  stateFilterHandle={stateFilterHandle} cityFilterHandle={cityFilterHandle} />
        <main>
          <h1>Edvora</h1>
          <h2>Products</h2>
          {productData.length > 0 ? (
            filteredProducts.length > 0 ? (
              <ProductList filteredProducts={filteredProducts} />
            ) : (
              <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                No Result found
              </h1>
            )
          ) : (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              ...Loading...
            </h1>
          )}

          {filteredProducts.length > 0 && (
            <ProductList filteredProducts={filteredProducts} />
          )}
        </main>
      </div>
    </>
  );
}

export default ProductListings;
