import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCards from "../../Pages/Courses/CourseCards/CourseCards";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CourseHome from "../../Pages/Courses/CourseHome/CourseHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/courses",
        loader: () => fetch("http://localhost:5000/courses"),
        element: <CourseHome></CourseHome>,
        children: [
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(`http://localhost:5000/courses/${params.id}`),
            element: <CourseDetails></CourseDetails>,
          },
          {
            path: "/courses",
            loader: () =>
              fetch("http://localhost:5000/courses"),
            element: <CourseCards></CourseCards>,
          },
        ],
      },
    ],
  },
]);
