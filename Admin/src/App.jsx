import React, { useEffect, useState } from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";

import Loading from "./components/commons/loading";
import axios from "axios";
import AppRoute from "./AppRoute";
import { setHeader } from "./constant";

function App() {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchuser = async () => {
      let token = null;

      token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/");
      }
    };

    fetchuser();
  }, []);

  const AppMain = () => {
    return (
      <div className="max-w-7xl mx-auto">
        {loading ? <Loading /> : <AppRoute />}
      </div>
    );
  };

  return (
    <>
      <AppMain />
    </>
  );
}

export default App;
