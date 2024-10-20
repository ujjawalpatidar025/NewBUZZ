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
      setloading(true);

      let token = null;
      if (localStorage.getItem("adminToken")) {
        token = localStorage.getItem("adminToken");
      }
      const url = import.meta.env.VITE_API_URL;

      const config = setHeader();

      try {
        if (token) {
          const response = await axios.get(`${url}/api/user/refresh`, config);
          const data = response?.data;

          if (data) {
            // Set user data in local storage
            localStorage.setItem("userData", data?.token);
            navigate("/");
          }
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      } finally {
        setloading(false);
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
