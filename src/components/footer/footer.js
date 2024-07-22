import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-extrabold">Arture.Pk</h2>
              <p className="font-light">UPSTEP ARTSY.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <a
                href="mailto:arture.pk@gmail.com"
                target="_blank"
                className="flex items-center text-white"
              >
                <FaEnvelope className="text-white mr-2" />
                <span>arture.pk@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923212050608"
                target="_blank"
                className="flex items-center text-white mt-2"
              >
                <FaWhatsapp className="text-white mr-2 text-lg" />
                <span>+92 321 2050608</span>
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/arturepk"
                  target="_blank"
                  className="text-white text-2xl hover:text-purple-300 transition-colors duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/arturepk"
                  target="_blank"
                  className="text-white text-2xl hover:text-purple-300 transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/company/arturepk/"
                  target="_blank"
                  className="text-white text-2xl hover:text-purple-700 transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.youtube.com/@arturepk7654"
                  target="_blank"
                  className="text-white text-2xl hover:text-purple-700 transition-colors duration-300"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div style={{ backgroundColor: "#CCCCCC" }} className="text-center p-1">
        <p className="font-semibold mb-0">
          &copy; 2023 Arture.Pk All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
