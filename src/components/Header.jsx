import React from "react";
import Container from "./Container";
import { Button, Image } from "antd";

const Header = () => {
  return (
    <Container className="p-2 flex flex-row justify-between bg-[#EEEEEE]">
      <Container className="flex flex-frow p-6">
        <Image
          className="flex-grow border-none shadow-none h-full"
          preview={false}
          alt="Logo"
        />
      </Container>
      <Container className="basis-1/3 flex flex-row justify-around items-center">
        <Button
          size="large"
          className="bg-transparent flex-grow border-none shadow-none h-full"
        >
          Products
        </Button>
        <Button
          size="large"
          className="bg-transparent flex-grow border-none shadow-none h-full"
        >
          Order Now
        </Button>
        <Button
          size="large"
          className="bg-transparent flex-grow border-none shadow-none h-full"
        >
          Contact
        </Button>
      </Container>
    </Container>
  );
};

export default Header;
