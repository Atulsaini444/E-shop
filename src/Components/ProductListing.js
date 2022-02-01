import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {setProducts} from '../redux/actions/productsAction';
import Header from "./Header";
import axios from "axios";
import ProductComponent from "./ProductComponent";

function ProductListing() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  },[]);

  return (
    <>
      <Header></Header>
      <ProductComponent></ProductComponent>
    </>
  );
}

export default ProductListing;
