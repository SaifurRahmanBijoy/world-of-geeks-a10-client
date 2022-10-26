import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, setLoading, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/courses";

  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGitHubSignIn = () => {
    providerLogin(gitProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

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
        navigate(from, { replace: true });
        setError("");
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
              placeholder="User Email"
              required
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 "
              placeholder="Password"
              required
            />
          </div>

          <div className="w-3/4 my-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 mb-2 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              LOGIN
            </button>
            <button
              className="py-4 bg-green-400 mb-2 w-full rounded text-blue-50 font-bold hover:bg-green-700"
              onClick={handleGoogleSignIn}
            >
              Login with Google
            </button>
            <button
              className="py-4 bg-black w-full rounded text-blue-50 font-bold hover:bg-green-700"
              onClick={handleGitHubSignIn}
            >
              Login with GitHub
            </button>
            <p className="text-red-400 py-1 d-block">{error.slice(9, 100)}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
