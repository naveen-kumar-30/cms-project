import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import ngLogo from "../assets/images/ng-logo.png";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [animatePage, setAnimatePage] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers.find((user) => user.email === email)) {
      setError("Email already registered.");
      return;
    }

    const newUser = { name, email, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setError("");
    setAnimatePage(true); // Start page animation
    setTimeout(() => {
      navigate("/sign-in"); // Navigate after 2 seconds
    }, 1000);
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={
        animatePage
          ? { y: -800, opacity: 0, scale: 1.05 }
          : { y: 0, opacity: 1 }
      }
   transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex min-h-screen bg-gray-50"
    >
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <img
          src={ngLogo}
          alt="NG Logo"
          className="max-w-md h-auto object-contain drop-shadow-md"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center flex-start justify-start p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
            <p className="mt-2 text-sm text-gray-500">Sign up to get started</p>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Full Name</label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <User className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="ml-2 w-full outline-none text-sm bg-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
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

            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
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

            <div>
              <label className="block text-sm text-gray-600">Confirm Password</label>
              <div className="flex items-center border rounded-xl px-3 py-2 bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500">
                <Lock className="w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="ml-2 w-full outline-none text-sm bg-transparent"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            <NavLink to="/sign-in" className="text-indigo-600 hover:underline">
              Sign In
            </NavLink>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
