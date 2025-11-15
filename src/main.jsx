import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Icon from "./assets/favicon.ico";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./index.css";
import routes from "./routes/routes.js";

const icon = document.createElement("link");
icon.rel = "icon";
icon.href = Icon;

document.head.appendChild(icon);

const browserRoutes = routes.map((route) => ({
  path: route.uri,
  element: (
    <div id="page">
      <NavBar />
      <route.jsx />
    </div>
  ),
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  ...browserRoutes,
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
