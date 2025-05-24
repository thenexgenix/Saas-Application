import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loginAnimation from "../assets/Animation - 1747934924452.json"; 
const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col p-4">
      {/* Lottie Animation */}
      <div className="w-60 mb-6">
        <Lottie animationData={loginAnimation} loop={true} autoplay={true} />
      </div>

      {/* Login Card */}
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form>
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-4 text-right">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Redirect */}
        <p className="mt-6 text-center text-sm text-gray-600">
          If you are not registered,{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            go to the Register page
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
