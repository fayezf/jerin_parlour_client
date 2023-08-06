import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AboutUs from "../pages/AboutUs/AboutUs";
import Gallery from "../pages/Gallery/Gallery";
import OurTeam from "../pages/OurTeam/OurTeam";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../Layout/Dashboard";
import Book from "../pages/Dashboard/Book/Book";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddService from "../pages/Dashboard/AddService/AddService";
import AdminRoute from "./AdminRoute";
import ManageServices from "../pages/Dashboard/ManageServices/ManageServices";
import OrderList from "../pages/Dashboard/OrderList/OrderList";
import PaymentSuccess from "../pages/Dashboard/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/Dashboard/PaymentFail/PaymentFail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'gallery',
        element: <Gallery></Gallery>
      },
      {
        path: 'team',
        element: <OurTeam></OurTeam>
      },
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mybook',
        element: <PrivateRoute><Book></Book></PrivateRoute>
      },
      {
        path: 'order',
        element: <PrivateRoute><OrderList></OrderList></PrivateRoute>
      },
      {
        path: 'payments/success/:tranId',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: 'payments/fail/:tranId',
        element: <PaymentFail></PaymentFail>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addService',
        element: <AdminRoute><AddService></AddService></AdminRoute>
      },
      {
        path: 'manageService',
        element: <AdminRoute><ManageServices></ManageServices></AdminRoute>
      }
    ]
  }
]);