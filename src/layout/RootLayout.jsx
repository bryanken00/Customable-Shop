import React from "react";
import { Container } from "../components";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default RootLayout;
