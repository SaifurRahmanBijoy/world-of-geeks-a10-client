import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Access from "../../Pages/Access/Access";
import CourseCards from "../../Pages/Courses/CourseCards/CourseCards";
import CourseDetails from "../../Pages/Courses/CourseDetails/CourseDetails";
import CourseHome from "../../Pages/Courses/CourseHome/CourseHome";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Blog from "../../Pages/Other/Blog/Blog";
import Faq from "../../Pages/Other/Faq/Faq";
import Profile from "../../Pages/Other/Profile/Profile";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

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
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        loader: () => fetch("https://learnign-a10-server.vercel.app/courses"),
        element: <CourseHome></CourseHome>,
        children: [
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(
                `https://learnign-a10-server.vercel.app/courses/${params.id}`
              ),
            element: <CourseDetails></CourseDetails>,
          },
          {
            path: "/courses/:id",
            loader: ({ params }) =>
              fetch(
                `https://learnign-a10-server.vercel.app/courses/${params.id}`
              ),
            element: <CourseDetails></CourseDetails>,
          },
          {
            path: "/courses/access",
            element: (
              <PrivateRoute>
                <Access></Access>
              </PrivateRoute>
            ),
          },
          {
            path: "/courses",
            loader: () =>
              fetch("https://learnign-a10-server.vercel.app/courses"),
            element: <CourseCards></CourseCards>,
          },
        ],
      },
      {
        path: "*",
        element: (
          <div>
            <p className="text-4xl text-center my-4 text-blue-400">
              404 not found:Please Enter Correctly
            </p>
          </div>
        ),
      },
    ],
  },
]);
