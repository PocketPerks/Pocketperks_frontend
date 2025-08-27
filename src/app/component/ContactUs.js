"use client";

import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
    alert("Form Submitted ✅");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2">Say Hello!</h2>
      <p className="text-gray-600 mb-6">
        Please elaborate your concern in the below. Our support team will endeavour
        to get back to you within 48 hours
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full"
            required
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full h-28"
          required
        />

        {/* File Upload */}
        <div>
          <label className="block font-medium mb-2">Upload File</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="border rounded-lg p-2 w-full"
          />
          <p className="text-sm text-gray-500">
            Allowed file types: .jpg, .jpeg, .png, .pdf | Max size: 2MB
          </p>
        </div>

        {/* Captcha */}
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 px-4 py-2 font-bold text-lg rounded">
            5HrT0
          </div>
          <input
            type="text"
            name="captcha"
            placeholder="Enter Captcha"
            value={formData.captcha}
            onChange={handleChange}
            className="border rounded-lg p-2 w-full"
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
