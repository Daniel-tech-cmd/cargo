"use client";
import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    firstName: "",
    surname: "",
    country: "",
    mobile: "",
    landline: "",
    extension: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    marketingConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted:", formData);
    // Send formData to backend API
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-16">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Welcome to your Maersk Registration
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Enter desired username"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your business email address"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="surname"
          value={formData.surname}
          onChange={handleChange}
          placeholder="Enter your surname"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter your country/region"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          type="tel"
          placeholder="Enter mobile number"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="landline"
          value={formData.landline}
          onChange={handleChange}
          type="tel"
          placeholder="Enter landline number"
          className="w-full p-2 border rounded"
        />
        <input
          name="extension"
          value={formData.extension}
          onChange={handleChange}
          placeholder="Enter extension (Optional)"
          className="w-full p-2 border rounded"
        />
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          placeholder="Enter desired password"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          type="password"
          placeholder="Re-enter desired password"
          className="w-full p-2 border rounded"
          required
        />
        <div className="flex items-center">
          <input
            name="termsAccepted"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span>I accept the registered user terms and cookie policy</span>
        </div>
        <div className="flex items-center">
          <input
            name="marketingConsent"
            type="checkbox"
            checked={formData.marketingConsent}
            onChange={handleChange}
            className="mr-2"
          />
          <span>I agree to receive logistics news and marketing updates</span>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link href="/user/login" className="text-blue-600">
          Log in
        </Link>
      </p>
    </div>
  );
}
