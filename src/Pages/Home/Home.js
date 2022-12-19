import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-6 py-12 dark:bg-slate-400 dark:text-gray-900 flex items-center justify-center my-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to
            <br className="sm:hidden" />
            30% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>Plus Lifetime Guidance for</span>
            <span className="font-bold text-lg">World of Geeks</span>
          </div>
          <Link
            to="/courses"
            className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
          >
            See Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
