import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./../layouts/MainLayout";
import App from "./../App";
import Login from "./../pages/Login/LoginPage";
import ErrorPage from "./../pages/Error/ErrorPage";
import Signup from "../pages/Signup/SignupPage";
import ResetPage from "../pages/Reset/ResetPage";
import OrderList from "./../components/Orders/OrderList";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile/Profile";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/resetpassword",
        element: <ResetPage />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderList />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
