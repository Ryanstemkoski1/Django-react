import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./containers/pages/page-error";
import { PrivateLayout, PublicLayout } from "./containers/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    ),
    children: [
      {
        path: "",
        element: <>homepage</>,
      },
      {
        path: "/find-apartments",
        element: <>Find apartments</>,
      },
      {
        path: "neighborhoods",
        element: <>Neighborhoods</>,
      },
      {
        path: "/signin",
        element: <>Login</>,
      },
      {
        path: "/signup",
        element: <>Signup</>,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <PrivateLayout>
        <Outlet />
      </PrivateLayout>
    ),
    children: [
      {
        path: "/account",
        element: <>Accounts</>,
      },
      {
        path: "/account/properties",
        element: <>My Properties</>,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
