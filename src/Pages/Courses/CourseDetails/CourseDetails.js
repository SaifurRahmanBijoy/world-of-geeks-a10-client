import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, img, description } = course;
  return (
    <div>
      <div className="w-3/4 bg-blue-200 mx-auto rounded overflow-hidden shadow-lg my-6">
          <h1 className="font-bold px-2 py-3 bg-blue-100 font-serif text-center text-2xl">{name}</h1>
        <img className="w-full bg-gray-100 shadow-lg" src={img} alt="" />
        <div className="px-6 py-4">
          <p className="text-grey-darker text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
