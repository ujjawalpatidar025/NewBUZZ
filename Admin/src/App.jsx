import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Login from "./components/commons/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (!token) {
      localStorage.clear();
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
