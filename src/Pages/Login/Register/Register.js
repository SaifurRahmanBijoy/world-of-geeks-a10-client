import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-10 mt-6">
      <div className="flex justify-center  items-center">
        <div className="w-full md:w-1/2 flex flex-col items-center ">
          <h1 className="text-center text-3xl font-bold text-gray-600 mb-6">
            REGISTER
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Name"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="photoURL"
              id="photo"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Photo URL"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Email"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
            />
          </div>

          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
