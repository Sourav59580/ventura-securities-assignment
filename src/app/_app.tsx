
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import React, { ComponentType } from "react";
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import 'primeicons/primeicons.css';

import routes from "./router";
import './global.scss';

const App = () => {
  const content = createBrowserRouter(routes);
  return (
    <PrimeReactProvider>
      <RouterProvider router={content} />
    </PrimeReactProvider>
  );
};

export default App;
