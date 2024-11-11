import React from "react";
import Login from "./Login";
import Home from "./Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Course from "./courses/Course";
import SignUp from "./SignUp";
import Cart from "./Cart";
import CourseDetail from "./courses/CourseDetail";
import CourseBuyDetail from "./courses/CourseBuyDetail";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/course",
          element: <Course />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/",
          element: <CourseDetail />,
          
        },
        {
          path: "/coursebuydetail",
          element: <CourseBuyDetail />,
        },
      ],
    },
  ]);
  return (
    <RouterProvider
      router={appRouter}
      future={{
        v7_skipActionErrorRevalidation: true,
        v7_startTransition: true,
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
      }}
    />
  );
};

export default Body;
