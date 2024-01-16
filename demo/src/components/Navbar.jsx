import React from 'react';
import { Link } from 'react-router-dom';



export default function Navbar({ image }) {
  return (
    <nav className="bg-black text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        <div className="text-white font-bold text-xl mr-4 flex items-center">
          <Link to="/" className="text-white font-bold text-xl mr-4 flex items-center">
            <img src={image} alt="Your Logo" className="h-8 mr-2" />
            oksusu
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/profile" className="hover:text-gray-300 transition duration-300 py-2 px-4 border-b-2 border-transparent">
          프로필
        </Link>
        <Link to="/album" className="hover:text-gray-300 transition duration-300 py-2 px-4 border-b-2 border-transparent">
          앨범
        </Link>
        <img src={image} alt="profile" className="h-8 mr-2" />
      </div>
    </nav>
  );
}
