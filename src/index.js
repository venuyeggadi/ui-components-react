import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginButton from "./w3schools-how-to/LoginForm/LoginButton";
import ModalUser from "./w3schools-how-to/Modal/ModalUser";
import Feedback from "./w3schools-how-to/FeedbackModal/Feedback";
import ProfileCard from "./w3schools-how-to/ProfileCard/ProfileCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login-form",
    element: <LoginButton />,
  },
  {
    path: "/modal",
    element: <ModalUser />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/profile-card",
    element: <ProfileCard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
