import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = () => <div>Root</div>;

const Team = () => <div>Team</div>;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "team",
        element: <Team />
      }
    ]
  }
]);

export default function () {
  return <RouterProvider router={router} />;
}

export { Root, Team };
