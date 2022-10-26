import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoURLRef = useRef(user.photoURL);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(photoURLRef.current.value);
    const profile = { displayName: name, photoURL: photoURLRef };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="bg-gray-10 mt-6">
      <div className="flex justify-center  items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 flex flex-col items-center "
        >
          <h1 className="text-center text-3xl font-bold text-gray-600 mb-6">
            User Profile
          </h1>

          <div className="w-3/4 mb-6">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              defaultValue={user?.displayName}
              id="name"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Name"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              ref={photoURLRef}
              defaultValue={user?.photoURL}
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            />
          </div>

          <div className="w-3/4 mb-6">
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              id="email"
              className="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
              placeholder="User Email"
            />
          </div>

          <div className="w-3/4 mt-4">
            <button
              type="submit"
              className="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"
            >
              {" "}
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
