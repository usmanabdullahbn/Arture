import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppIcon.css"; // Import your CSS file for styling

const WhatsAppIcon = () => {
  // Function to open WhatsApp in a new tab
  const openWhatsApp = () => {
    window.open("https://wa.me/923212050608", "_blank");
  };

  return (
    <div className="whatsapp-icon" onClick={openWhatsApp}>
      <FaWhatsapp className="whatsapp-icon__logo" />
    </div>
  );
};

export default WhatsAppIcon;
