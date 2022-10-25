import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CourseCards from "../../Pages/Courses/CourseCards/CourseCards";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CourseHome from "../../Pages/Courses/CourseHome/CourseHome";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
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
            loader: () => fetch("http://localhost:5000/courses"),
            element: <CourseCards></CourseCards>,
          },
        ],
      },
    ],
  },
]);
