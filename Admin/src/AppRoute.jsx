import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/commons/Login";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
