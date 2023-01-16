import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { setActiveUser, setUserLoading } from "./features/userSlice";
import { auth } from "./firebase/firebase";

const App = () => {
  // set user globally
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        setUserLoading({
          userLoading: true,
        })
      );
      dispatch(
        setActiveUser({
          user: currentUser,
        })
      );
      dispatch(
        setUserLoading({
          userLoading: false,
        })
      );
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
