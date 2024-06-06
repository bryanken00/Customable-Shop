import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
