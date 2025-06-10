
import React from "react";
import Link from "next/link";
import Image from "next/image";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/+919947414953" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50   p-3 rounded-full shadow-lg "
    >
      <Image src={"/w.png"} alt="" height={1000} width={1000} className="md:w-20 md:h-20 h-14 w-14 rounded-full" /> {/* Replace with WhatsApp icon if needed */}
    </Link>
  );
};

export default WhatsAppButton;
