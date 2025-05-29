import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ngLogo from "../assets/images/ng-logo.png";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [animatePage, setAnimatePage] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleImageClick = () => {
    controls.start({
      scale: [1, 1.2, 1],
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((u) => u.email === email && u.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem("authUser", JSON.stringify(user));
    setError("");
    
    // Trigger exit animation
    setAnimatePage(true);

    // Wait animation duration, then navigate
    setTimeout(() => {
      navigate(from, { replace: true });
    }, 1300); // duration matches animation below
  };

  return (
    <motion.div
      initial={{ y: 800, opacity: 0 }}
      animate={animatePage ? { y: -800, opacity: 0, scale: 1.05 } : { y: 0, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="flex min-h-screen bg-gray-50"
    >
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <motion.img
          onClick={handleImageClick}
          animate={controls}
          src={ngLogo}
          alt="NG Logo"
          className="max-w-md h-auto object-contain cursor-pointer drop-shadow-md"
        />
      </div>

      <div className="flex w-full md:w-1/2 items-center flex-start justify-start p-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
            <p className="mt-2 text-sm text-gray-500">Login to your account</p>
          </div>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div className="flex justify-between text-sm text-gray-500">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
              disabled={animatePage} // disable button during animation to prevent double submit
            >
              Sign In
            </button>
          </form>

          <p className="text-sm text-center text-gray-500">
            Don't have an account?{" "}
            <NavLink to="/sign-up" className="text-indigo-600 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignInPage;
