import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn,setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          setError(
            "Your email is not verified. Please verify your email and then try again!"
          );
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-10 mt-6 bg-slate-100">
      <div className="flex justify-center  items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col items-center "
        >
          <h1 className="text-center text-3xl font-bold text-gray-600 mb-6">
            LOGIN
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Name"
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
            <p className="text-red-400 d-block">{error}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
