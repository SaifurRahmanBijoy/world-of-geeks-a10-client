import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ course }) => {
  // console.log(course)
  return (
    <div className="font-serif py-2 px-3 my-1 text-blue-500 hover:text-green-500 border-slate-300 hover:border-green-300 border-2 rounded">
      <Link to={`/courses/${course.id}`}>{course.name}</Link>
    </div>
  );
};

export default CourseList;
