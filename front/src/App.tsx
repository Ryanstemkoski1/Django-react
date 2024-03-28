import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ErrorPage from "./containers/page-error";
import { AuthLayout, PrivateLayout, PublicLayout } from "./containers/layout";

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
        path: "/neighborhoods",
        element: <>Neighborhoods</>,
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    ),
    children: [
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
