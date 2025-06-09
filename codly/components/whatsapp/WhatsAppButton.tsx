
import React from "react";
import { MessageCircle } from "lucide-react"; // or use WhatsApp icon from react-icons or custom SVG
import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+919947414953" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
    >
      <MessageCircle className="w-6 h-6" /> {/* Replace with WhatsApp icon if needed */}
    </Link>
  );
};

export default WhatsAppButton;
