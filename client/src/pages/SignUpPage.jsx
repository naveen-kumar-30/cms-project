// ... other imports
import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import ngLogo from "../assets/images/ng-logo.png";
import SignInPage from "./SignInPage";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Registering:", name, email, password);
        setError("");
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Left Side with Logo */}
            <div className="hidden md:flex w-1/2 items-center justify-center">
                <motion.img
                    onClick={handleImageClick}
                    animate={controls}
                    src={ngLogo}
                    alt="NG Logo"
                    className="max-w-md h-auto object-contain cursor-pointer drop-shadow-md"
                />
            </div>

            {/* Right Side with Form */}
            <div className="flex w-full md:w-1/2 items-center flex-start justify-start p-6">
                <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
                        <p className="mt-2 text-sm text-gray-500">Sign up to get started</p>
                    </div>

                    {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
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

                        {/* Email */}
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

                        {/* Password */}
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

                        {/* Confirm Password */}
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

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300"
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Link to Sign In */}
                    <p className="text-sm text-center text-gray-500">
                        Already have an account?{" "}
                        <NavLink
                            to="/sign-in"
                            className="text-indigo-600 hover:underline"
                        >
                            Sign In
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
