import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";
import { RouteObject } from "react-router";

import SuspenseLoader from "../shared/ui/suspense-loader/suspense-loader";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// pages
const Ipo = Loader(lazy(() => import("../pages/ipo")));
const IpoDetails = Loader(lazy(() => import("../pages/ipo-details")))

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/ipo" replace />,
  },
  {
    path: "/ipo",
    element: <Ipo />,
  },
  {
    path: "/ipo/:id",
    element: <IpoDetails />,
  },
];

export default routes;
