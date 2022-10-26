import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseCards = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid sm:grid-cols-2 p-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="w-3/4 rounded bg-gray-200 mx-auto overflow-hidden shadow-lg my-3"
        >
          <img
            className="w-full bg-gray-100 shadow-lg"
            src={course.img}
            alt=""
          />
          <div className="px-6 py-4">
            <h1 className="font-bold text-2xl mb-2">{course.name}</h1>
            <p className="text-grey-darker text-base">
              {course.description.slice(0, 100) + "..."}
              <Link to={`/courses/${course.id}`} className='text-semibold text-blue-600'>See more</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
