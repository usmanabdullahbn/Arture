import React from "react";
import logo from "../asserts/logo.jpg";

const Header = () => {
  return (
    <div style={{backgroundColor: "#f2f2f2"}} className="w-full border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 h-[80px] flex items-center justify-between">
        <div >
          <img className="w-18 h-14" src={logo} alt="logoDark" />
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Abuot Us
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Our Programs
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Gallery
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Contact us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
