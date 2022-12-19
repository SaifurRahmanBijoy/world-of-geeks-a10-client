import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CourseCards = () => {
  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await fetch("https://learnign-a10-server.vercel.app/courses");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <progress className="progress w-3/5 flex justify-center items-center"></progress>
      </div>
    );
  }
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
              <Link
                to={`/courses/${course.id}`}
                className="text-semibold text-blue-600"
              >
                See more
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCards;
