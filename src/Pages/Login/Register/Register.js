import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Register = () => {
  // const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleVerifyEmail();
        setError("Please verify your email");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleVerifyEmail = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  //   const handleAccepted = (event) => {
  //     setAccepted(event.target.checked);
  //   };

  return (
    <div className="bg-gray-10 mt-6">
      <div className="flex justify-center  items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col items-center "
        >
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
            <p className="text-red-400 text-md">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
