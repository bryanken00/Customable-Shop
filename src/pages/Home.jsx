import React from "react";
import { Container, Text } from "../components";
import { Card } from "antd";

const HomePage = () => {
  return (
    <Container className="p-4 flex flex-col h-screen">
      <Container className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm: grid-cols.1 gap-4">
        <Card>asd</Card>
        <Card>asd</Card>
        <Card>asd</Card>
        <Card>asd</Card>
      </Container>
    </Container>
  );
};

export default HomePage;
