import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  const { name, img, description } = course;
  return (
    <div>
      <div className="w-3/4 mx-auto rounded overflow-hidden shadow-lg my-3">
        <img className="w-full shadow-lg" src={img} alt="" />
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{name}</h1>
          <p className="text-grey-darker text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
