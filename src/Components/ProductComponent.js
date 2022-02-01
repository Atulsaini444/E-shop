import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px 0 #aaa;
  width: 250px;
  height: 315px;
  margin: 10px;
  margin-top: 25px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoverImage = styled.img`
  height: 200px;
  width: 160px;
  /* object-fit: cover; */
`;

const TitleContainer = styled.div`
  height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductName = styled.span`
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bolder;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 15px;
  font-weight: bolder;
`;
const Category = styled.div`
  font-size: 15px;
  color: grey;
`;



function ProductComponent() {
  const Products = useSelector((state) => state.allProducts.products);
  const renderList = Products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <ProductContainer key={id}>
        <Link to={`/product/${id}`} style={{ textDecoration: 'none' , color: 'black'}}>
          <ImageContainer>
            <CoverImage src={image} alt={title}></CoverImage>
          </ImageContainer>
          <TitleContainer>
            <ProductName>{title}</ProductName>
          </TitleContainer>
          <InfoColumn>
            <Price>$ {price}</Price>
            <Category>{category}</Category>
          </InfoColumn>
        </Link>
      </ProductContainer>
    );
  });
  return (
    <>
      <MainDiv>{renderList}</MainDiv>
    </>
  );
}

export default ProductComponent;
