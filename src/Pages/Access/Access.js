import React from "react";
import { useLoaderData } from "react-router-dom";

const Access = () => {
const course=useLoaderData()
  return (
    <div className="bg-purple-300 p-8 m-6 rounded-lg shadow-2xl">
      <h1 className="text-5xl font-mono my-3 py-1 font-bold border-2 border-green-200 text-slate-600 text-center">Checkout page</h1>
      <p className="text-3xl text-center font-thin">
        You are about to buy the course: <span className="text-green-500 font-semibold">{course.name}</span>
      </p>
      <img className="w-3/4 mx-auto my-3 shadow-md rounded-md border-2 bg-slate-100 p-2" src={course.img} alt="" />
    </div>
  );
};

export default Access;
