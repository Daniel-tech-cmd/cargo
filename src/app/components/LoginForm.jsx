"use client";
import { useState } from "react";
import Link from "next/link";
import useSignup from "../hooks/useSignup";

export default function LoginForm() {
  const [error, setError] = useState(null);
  const { login, isLoading, error: erro } = useSignup();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Send formData to backend API

    setError(null);

    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      return;
    }

    try {
      // console.log("Submitting login data:", loginData);
      await login(formData);
    } catch (err) {
      console.error(err);
      setError("Invalid login credentials. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Login to Your Account
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border rounded"
          required
        />
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
        {erro && <div className="text-red-500 text-sm mt-2">{erro}</div>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link href="/user/signup" className="text-blue-600">
          Sign up
        </Link>
      </p>
    </div>
  );
}
