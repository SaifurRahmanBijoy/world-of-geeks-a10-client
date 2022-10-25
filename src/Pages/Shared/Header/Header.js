import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-50 shadow">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2">
            <nav className="flex justify-center items-center">
              <img className="w-8 mr-2" src="https://cdn-icons-png.flaticon.com/512/607/607421.png" alt="pix" />
              <h2 className="font-serif">Worlds of Geeks</h2>
            </nav>

            <div className="sm:flex sm:items-center">
              <Link to='/courses' className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Courses
              </Link>
              <Link to='faq' className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                FAQ
              </Link>
              <Link to='blog' className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Blog
              </Link>
            </div>

            <div className="sm:flex sm:items-center">
              <Link className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">
                Sign in
              </Link>
              <Link className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Header;
