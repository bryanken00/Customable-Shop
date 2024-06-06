import React from "react";
import { Container, ItemCard } from "../components";

const HomePage = () => {
  return (
    <Container className="flex flex-col h-full p-8 bg-[#F6F5F2]">
      <Container className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((e) => (
          <ItemCard />
        ))}
      </Container>
    </Container>
  );
};

export default HomePage;
