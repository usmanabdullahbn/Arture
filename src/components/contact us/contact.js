import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarker, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div
      className=" mx-auto  py-10 px-48 "
      style={{ backgroundColor: "#FEE4C9" }}
    >
      <h2 className="text-3xl font-extrabold mb-4 text-center">Contact Us</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mb-4 lg:w-1/3">
          <h3 className="text-xl font-bold mb-2">Our Location</h3>
          <p className="flex items-center">
            <FaMapMarker className="text-purple-500 mr-2" />
            P.E.C.H.S, Karachi, Pakistan
          </p>
        </div>
        <div className="mb-4 lg:w-1/3">
          <h3 className="text-xl font-bold mb-2">Phone</h3>

          <a
            href="https://wa.me/923212050608"
            target="_blank"
            className="flex items-center text-black mt-2"
          >
            <FaWhatsapp className="text-purple-500 mr-2 text-lg" />
            <span>+92 321 2050608</span>
          </a>
        </div>
        <div className="mb-4 lg:w-1/3">
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <a
            href="mailto:arture.pk@gmail.com"
            target="_blank"
            className="flex items-center text-black"
          >
            <FaEnvelope className="text-purple-500 mr-2" />
            <span>arture.pk@gmail.com</span>
          </a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8">
        <div className="mb-4">
          <label htmlFor="name" className="text-lg font-semibold block">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-lg font-semibold block">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-lg font-semibold block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
