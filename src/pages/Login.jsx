import React, { useState } from "react";
import { Container, Input, Text } from "../components";
import { Space } from "antd";
const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    console.log(username, password);
  };
  return (
    <Container className="flex justify-center items-center h-screen border">
      <Container className="flex flex-col justify-center">
        <Container className="basis-1/2 bg-slate-500 shadow-2xl rounded-2xl">
          <Container className="flex flex-col p-6">
            <Space direction="vertical">
              <Text title="Login Form" size="3xl" bold />
              <Input
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                labelSize="lg"
              />
              <Input
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                secure
                labelSize="lg"
              />
              <Input value="Password" type="Button" />
            </Space>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default LoginPage;
