import React, { useState, useContext } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        userData
      );
      const user = response.data;
      setCurrentUser(user);
      navigate("/"); // Redirect to home on successful login
    } catch (err) {
      // Handle error and show appropriate message
      const errorMessage =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-800 text-white">
      <div className="flex w-full max-w-5xl bg-slate-900 p-8 rounded-lg shadow-lg">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="w-full" onSubmit={loginUser}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaUserAlt className="text-gray-500 ml-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={userData.email}
                  onChange={changeInputHandler}
                  required
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300"
              >
                Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <FaLock className="text-gray-500 ml-2" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-4 py-2 mt-2 focus:outline-none bg-slate-800 text-white placeholder-gray-400"
                  value={userData.password}
                  onChange={changeInputHandler}
                  required
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <button className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                alt="Google Logo"
                className="inline-block w-5 h-5 mr-2"
              />
              Login with Google
            </button>
          </div>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:text-blue-700">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
