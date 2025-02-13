"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Send formData to backend API
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
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
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
