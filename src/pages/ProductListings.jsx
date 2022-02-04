import React,{useState} from "react";
import {useEffect} from "react";
import "./productListings.css";
import FilterModel from "../components/filtermodel/FilterModel";
import ProductList from '../components/productlist/ProductList';

function ProductListings() {

  const axios = require('axios');
  const [productData, setProductData] = useState([]);


  const callBug = async () => {
		await axios({
			method: 'get',
			url: "https://assessment-edvora.herokuapp.com",
		})
			.then(res => {
				setProductData(res.data);
        console.log(res.data);
			})
			.catch(error => {
				console.error(error);
			});
	};
	
	useEffect(() => {
		callBug();
    // eslint-disable-next-line
	}, []);

  
  return (
    <>
      <div className="container">
        <FilterModel productData={productData}/>
        <main>
          <h1>Edvora</h1>
          <h2>Products</h2>
          <ProductList productData={productData}/>
          <ProductList productData={productData}/>
        </main>
      </div>
    </>
  );
}

export default ProductListings;
