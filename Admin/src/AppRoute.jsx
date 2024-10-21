import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/commons/Login";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
