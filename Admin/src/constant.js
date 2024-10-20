const API_URL = import.meta.env.VITE_API_URL;
const setHeader = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};

export { API_URL, setHeader };
