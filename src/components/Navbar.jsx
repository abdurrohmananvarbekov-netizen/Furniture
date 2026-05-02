import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white py-6">
      <div className="max-w-[1260px] mx-auto px-5 flex justify-between items-center">

        <img src="/Logo.svg" alt="" />
        
        <ul className="flex space-x-12 font-semibold text-gray-800">
          <li className="hover:text-blue-600 cursor-pointer text-sm uppercase tracking-wide">Home</li>
          <li className="hover:text-blue-600 cursor-pointer text-sm uppercase tracking-wide">Services</li>
          <li className="hover:text-blue-600 cursor-pointer text-sm uppercase tracking-wide">Doctors</li>
          <li className="hover:text-blue-600 cursor-pointer text-sm uppercase tracking-wide">Products</li>
          <li className="hover:text-blue-600 cursor-pointer text-sm uppercase tracking-wide">Gallery</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;