import React from "react";
import CourseList from "../CourseList/CourseList";

const SideNav = ({ courses }) => {
  return (
    <div className="bg-gray-100 rounded-md px-4 pt-3 pb-6 my-2 mx-3 text-center sm:text-left">
      <h1 className="text-2xl px-2 py-2 font-medium text-gray-600">Courses available:</h1>
      {courses.map((course) => (
        <CourseList key={course.id} course={course}></CourseList>
      ))}
    </div>
  );
};

export default SideNav;
<h1>SideNav</h1>;
