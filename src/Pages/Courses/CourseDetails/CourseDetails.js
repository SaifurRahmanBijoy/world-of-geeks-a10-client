import React from "react";
import { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {
  const course = useLoaderData();
  const { id, name, img, description } = course;

  // react to pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div ref={componentRef}>
      <div className="w-3/4 bg-blue-200 mx-auto rounded  shadow-lg my-6">
        <div className="flex flex-col sm:flex-row justify-around bg-blue-100">
          <h1 className="font-bold px-2 py-3 font-serif text-center text-2xl">
            {name}
          </h1>
          <button className="px-2 py-3 sm:py-0 bg-green-300 my-2 rounded" onClick={handlePrint}>download</button>
        </div>
        <img className="w-full bg-gray-100 shadow-lg" src={img} alt="" />
        <div className="px-6 py-4">
          <p className="text-grey-darker mb-2 text-base">{description}</p>
          <Link
            className="px-2 py-2 my- w-2/3 rounded bg-purple-700 text-slate-100"
            to={`/courses/access/${id}`}
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
