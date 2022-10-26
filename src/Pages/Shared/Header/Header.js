import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-blue-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between py-2">
          <nav className="flex justify-center items-center">
            <img
              className="w-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/512/607/607421.png"
              alt="pix"
            />
            <h2 className="font-serif hover:bg-blue-100 py-1 px-2"><Link to='/courses'>Worlds of Geeks</Link></h2>
          </nav>

          <div className="flex-col sm:flex sm:flex-row py-1 sm:items-center">
            <Link
              to="/courses"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Courses
            </Link>
            <Link
              to="faq"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              FAQ
            </Link>
            <Link
              to="blog"
              className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
            >
              Blog
            </Link>
          </div>

          <div className="sm:flex flex items-center sm:flex-wrap sm:items-center">
            <Link to="/profile" className="mr-3 my-1 flex justify-center">
              {user?.photoURL ? (
                <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
              ) : (
                <p>👤</p>
              )}
            </Link>
            {user ? (
              <>
                <span className=" mr-4 font-mono text-sm">
                  {user?.displayName}
                </span>
                <button
                  onClick={handleLogOut}
                  className="text-red-800 text-sm font-semibold border px-4 py-2 rounded-lg border-red-800 hover:bg-purple-600 hover:text-purple-50 hover:border-purple-600"
                >
                  Logout
                </button>{" "}
              </>
            ) : (
              <>
                {" "}
                <Link
                  to="/login"
                  className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                >
                  Register
                </Link>{" "}
              </>
            )}

            <label
              htmlFor="default-toggle"
              className="inline-flex relative items-center justify-center cursor-pointer mx-2"
            >
              <input
                type="checkbox"
                value=""
                id="default-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
