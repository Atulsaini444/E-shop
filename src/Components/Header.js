import React from "react";
import styled from 'styled-components';


const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`
const Heading = styled.h2`
  margin-left: 20px;
`
const LogOut = styled.button`
  width: 65px;
  cursor: pointer;
  border-radius: 5px;
  background-color: lightblue;
  outline: none;
  border: none;
  height: 30px;
  margin-right: 20px;
`
function Header() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Container>
      <Heading>E-Shop</Heading>
      <LogOut onClick={handleLogout}>Logout</LogOut>
    </Container>
  );
}

export default Header;
