import React, { useEffect, useState } from "react";
import Navbar from "../commons/navbar";
import Loading from "../commons/loading";
import { API_URL, setHeader } from "../../constant";
import { useNavigate, useNavigation } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [openCreate, setopenCreate] = useState(false);
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const [users, setusers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        setloading(true);

        const config = setHeader();

        const token = localStorage.getItem("adminToken");
        if (!token) {
          navigate("/");
          return;
        }
        const response = await axios.get(
          `${API_URL}/api/admin/get-all-user`,
          setHeader()
        );
        setusers(response?.data?.users);
      } catch (error) {
        console.log(error);
        navigate("/");
      } finally {
        setloading(false);
      }
    };

    fetchAllUsers();
  }, []);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const config = setHeader();
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/");
        return;
      }

      const response = await axios.post(
        `${API_URL}/api/admin/create-user`,
        { email, password, username },
        config
      );
      setemail("");
      setpassword("");
      setusername("");
      setopenCreate(false);

      const updatedUsers = [...users, response?.data?.user];
      setusers(updatedUsers);
    } catch (err) {
      console.log(err);
    } finally {
      setloading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <Navbar />
          <div className="max-w-screen-xl flex flex-col flex-wrap   mx-auto p-4">
            <div className="py-4">
              <button
                type="button"
                onClick={() => setopenCreate(!openCreate)}
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Create User +
              </button>
            </div>
            {openCreate && (
              <div className="mb-5">
                <div className="flex flex-wrap gap-4 md:flex-nowrap">
                  <div className="w-full md:w-1/2">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@flowbite.com"
                      required
                    />
                  </div>

                  <div className="w-full md:w-1/2">
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      onChange={(e) => setpassword(e.target.value)}
                      value={password}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <button
                    onClick={handleCreateUser}
                    type="submit"
                    className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}

            <div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-[90vw]  pt-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Password
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((item) => (
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item?.email}
                          </td>
                          <td className="px-6 py-4">{item?.password}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
