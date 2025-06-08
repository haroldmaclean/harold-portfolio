"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    emailjs.init("VDY7i_a6xNlQ9pPuX");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Name is required.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      toast.error("Enter a valid email address.");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters.");
      return;
    }

    if (formData.message.trim().length > 350) {
      toast.error("Message should not exceed 350 characters.");
      return;
    }

    const sendingToast = toast.loading("Sending...");

    try {
      await emailjs.send("service_uz73k6e", "template_f5br16e", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      toast.dismiss(sendingToast);
      toast.success("Message sent successfully. Thank you!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.dismiss(sendingToast);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 max-w-xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          maxLength={350}
          required
          className="w-full border p-2 rounded h-32"
        ></textarea>
        <p className="text-sm text-gray-500">
          {formData.message.length}/350 characters
        </p>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
