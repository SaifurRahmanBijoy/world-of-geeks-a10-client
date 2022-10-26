import React from "react";
import { useLoaderData } from "react-router-dom";

const Access = () => {
const course=useLoaderData()
  return (
    <div className="bg-purple-200 p-8 m-6 shadow-lg">
      <h1 className="text-4xl font-mono my-3 font-bold text-slate-600 text-center">Checkout page</h1>
      <p className="text-2xl text-center font-thin">
        You are about to buy the course: <span className="text-green-500 font-semibold">{course.name}</span>
      </p>
      <img className="w-3/4 mx-auto my-3 shadow-md border-2" src={course.img} alt="" />
    </div>
  );
};

export default Access;
