import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./components/commons/Login";
import Client from "./components/client/Client";
import Worker from "./components/worker/Worker";

const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/client" element={<Client />} />
        <Route path="/worker" element={<Worker />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
