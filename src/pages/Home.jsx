import React from "react";
import { Container, ItemCard, Text } from "../components";
import { Select } from "antd";
import { products } from "../utils/items";
const HomePage = () => {
  const shopProduct = products;
  const shopCategory = [...new Set(shopProduct.map((item) => item.category))];
  return (
    <Container className="flex flex-col h-full p-8 bg-[#F6F5F2]">
      <Container>
        <Container className="flex flex-row justify-between">
          <Text title="Products" size="2xl" bold />
          <Select size="large" defaultValue="Select Product">
            <Select.Option key="null" value="">
              All
            </Select.Option>
            {shopCategory.map((item, index) => (
              <Select.Option key={index} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Container>
        <span
          className="block w-full my-4"
          style={{ border: `1px solid #DBDBDB` }}
        />
      </Container>
      <Container className="grid grid-cols-4 gap-12">
        {shopProduct.map((e) => (
          <ItemCard key={e} />
        ))}
      </Container>
    </Container>
  );
};

export default HomePage;
