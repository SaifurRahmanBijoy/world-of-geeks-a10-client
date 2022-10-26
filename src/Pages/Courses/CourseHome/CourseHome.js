import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import SideNav from "../SideNav/SideNav";

const CourseHome = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4">
      <div className="p-4">
        <SideNav courses={courses}></SideNav>
      </div>
      <div className="col-span-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default CourseHome;
