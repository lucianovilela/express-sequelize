import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Root = () => <div>Root</div>;

const Team = () => <div>Team</div>;



export default function () {

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

  return <RouterProvider router={router} />;
  //return <div>Funcionou</div>;

}

export { Root, Team };
