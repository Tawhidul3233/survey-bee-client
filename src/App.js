import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
