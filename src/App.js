import Body from "./components/Body";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './components/Header';
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import Header from "./components/Header";
import Login from "./components/Login";
import CourseBuyDetail from "./components/courses/CourseBuyDetail";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import CourseBuyCard from "./components/courses/CourseBuyCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import CourseListPage from "./components/couseListPage/CourseListPage";
import TestHome from "./components/testSeries/TestHome"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Body />
        </>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },

        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
        
        {
          path: "/courselistpage",
          element: <CourseListPage />,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/coursebuydetail", 
          element: <CourseBuyDetail />,
        },
        {
          path: "/coursebuycard",
          element: <CourseBuyCard />,
        },
        {
          path: "/test-series",
          element: <TestHome />,
        },
      ],
    },
  ]);
  return (
    <Provider store={appStore}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
