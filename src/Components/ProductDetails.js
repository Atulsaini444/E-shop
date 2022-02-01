import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectedProduct, removeSelectedProduct } from "../redux/actions/productsAction";

const Container = styled.div`
  display: flex;
  height: auto;
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
  margin-top: 70px;
  align-items: center;
  box-shadow: 0 3px 10px 0 #aaa;
`

const ImageContainer = styled.div`
  height: auto;
  padding: 20px;
  border-right: 1.5px solid grey;
`

const Image = styled.img`
  max-height: 400px;
  max-width: 350px;
`

const Details = styled.div`
  padding: 20px;
  width: 450px;
`

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`

const Price = styled.h2`
  margin-bottom: 20px;

`

const Category = styled.h2`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  background: rgb(240,241,244);
  color: rgb(186,163,153);
  width: auto;
  border: 1px solid black;
`

const Description = styled.p`
  margin-bottom: 20px;
`

const Button = styled.button`
  background: rgb(255,80,108);
  text-decoration: none;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 10px 18px 10px 18px;
  cursor: pointer;
`

function ProductDetails() {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const {image, title, price, category, description} = product;
  const dispatch = useDispatch();
  console.log(productId);

  const FetchUserDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(selectedProduct(response.data))
  };

  useEffect(() => {
     if(productId && productId !== "") FetchUserDetails();
     return () => {
      dispatch(removeSelectedProduct());
    };
  },[productId])
  return <>
    {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <Container>
          <ImageContainer>
            <Image src={image}></Image>
          </ImageContainer>
          <Details>
            <Title>{title}</Title>
            <Price>$ {price}</Price>
            <Category>{category}</Category>
            <Description>{description}</Description>
            <Button>Add to Cart</Button>
          </Details>
        </Container>
      )}
  </>
}

export default ProductDetails;
