import React, { useState } from "react";
import { useEffect } from "react";
import "./productListings.css";
import FilterModel from "../components/filtermodel/FilterModel";
import ProductList from "../components/productlist/ProductList";

function ProductListings() {
  const axios = require("axios");
  const [productData, setProductData] = useState([]);
  const [search, setSearch] = useState("");

  const callApi = async () => {
    await axios({
      method: "get",
      url: "https://assessment-edvora.herokuapp.com",
    })
      .then((res) => {
        setProductData(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    callApi();
    // eslint-disable-next-line
  }, []);

  const searchHandle = (value) => {
    setSearch(value);
    console.log(value);
    // console.log(search);
  };

  const filteredProducts = productData.filter((item) =>
    item.product_name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredProducts);

  return (
    <>
      <div className="container">
        <FilterModel productData={productData} searchHandle={searchHandle} />
        <main>
          <h1>Edvora</h1>
          <h2>Products</h2>
          {productData.length > 0 ? (
            filteredProducts.length > 0 ? (
              <ProductList filteredProducts={filteredProducts} />
            ) : (
              <h1 style={{ textAlign: "center", marginTop: "100px" }}>
                No Result found for {search}
              </h1>
            )
          ) : (
            <h1 style={{ textAlign: "center", marginTop: "100px" }}>
              ...loading
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
