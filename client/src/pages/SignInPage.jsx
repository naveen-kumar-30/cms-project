// src/pages/SignInPage.jsx

import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

import ngLogo from "../assets/images/ng-logo.png";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const controls = useAnimation();

  const handleImageClick = () => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    console.log("Logging in with:", email, password);
    setError("");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side with Logo (original style) */}
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <motion.img
          onClick={handleImageClick}
          animate={controls}
          src={ngLogo}
          alt="NG Logo"
          className="max-w-md h-auto object-contain cursor-pointer drop-shadow-md"
        />
      </div>

      {/* Right Side with Card Style Form */}
      <div className="flex w-full md:w-1/2 items-center flex-start justify-start p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-500">Login to your account</p>
          </div>

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field (original full border style) */}
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <Mail className="w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="ml-2 w-full outline-none text-sm bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Field (original full border style) */}
            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                <Lock className="w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="ml-2 w-full outline-none text-sm bg-transparent"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Remember Me + Forgot */}
            <div className="flex justify-between text-sm text-gray-500">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-gray-500">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
