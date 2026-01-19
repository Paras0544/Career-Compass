import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
Login

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Main1 from './Main1';
import AuthProvider from "./firebase/AuthProviderr";
import Login from "./profile/Login";
import Register from './profile/Register';
import PrivateRoute from './profile/PrivateRoute';
import Profile from './profile/Profile';
import Home from './Home/Home';
import Orders from './Job/Jobpage';

import ContactUs from "./contact/ContactUs";
import NotFoundPage from "./others/NotFound";
import Jobpage from "./Job/Jobpage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main1></Main1>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }, 
      {
        path: 'contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '*',
        element: <NotFoundPage></NotFoundPage>
      }
      ,
      {
        path: 'job',
        element: <PrivateRoute><Jobpage></Jobpage></PrivateRoute>
      }
      
      
      ,
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

