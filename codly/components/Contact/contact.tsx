"use client";

import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';
import emailjs from "@emailjs/browser";
import Link from "next/link";

// Dynamically import Lucide icons
const MessageCircle = dynamic(() => import("lucide-react").then((mod) => mod.MessageCircle), { ssr: false });
const Send = dynamic(() => import("lucide-react").then((mod) => mod.Send), { ssr: false });
const CheckCircle = dynamic(() => import("lucide-react").then((mod) => mod.CheckCircle), { ssr: false });
const AlertCircle = dynamic(() => import("lucide-react").then((mod) => mod.AlertCircle), { ssr: false });

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormStatus {
  type: "success" | "error" | null;
  message: string;
}

const Contact = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Initialize emailjs only on client side
    emailjs.init("9Lzag-WLUv1YnaQUi");
    setIsMounted(true);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!isMounted) return;

    // Validate required fields
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        type: "error",
        message:
          "Please fill in all required fields (Name, Email, and Message).",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "service_irisd1w",
        "template_q818kbq",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );
console.log("EmailJS response:", response);

      setStatus({
        type: "success",
        message: "Thank you, we'll get back to you soon.",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, there was an error processing your request. Please call us directly at +919947414953.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Don't render anything until client-side hydration is complete
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className=" py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-blue-400">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for premium web solutions. We&rsquo;re here to make your online presence shine like never before.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
        <div className="">
          {/* Contact Form */}
          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">
             Let&lsquo;s Talk — Drop Us a Message!
            </h2>

            {status.type && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  status.type === "success"
                    ? "bg-green-900/50 text-green-300 border border-green-800"
                    : "bg-red-900/50 text-red-300 border border-red-800"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertCircle className="w-5 h-5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

             
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                  placeholder="Share your ideal time and desired service, and we'll reserve your slot!"
                ></textarea>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-[1.02] disabled:scale-100"
              >
                <div className="flex items-center justify-center space-x-2">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </div>
              </button>
            </div>
            <div className="my-5">
              <Link
                href="https://wa.link/w8eju6"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Whatsapp </span>
              </Link>
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>We typically respond within 24 hours during business days.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 