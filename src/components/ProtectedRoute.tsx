import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../firebase";

export const ProtectedRoute = ({ redirectPath }: { redirectPath: string }) => {
  //const user = useAuthState(auth);
  const [user, loading, error] = useAuthState(auth);

  async function verifyAdmin() {
    try {
      const token = (await user?.getIdToken()) || "";
      console.log("token - " + token);

      if (!token) return "";

      const result = await fetch("http://localhost:5000/isAdmin", {
        headers: {
          "Content-Type": "application/json",
          token: token,
        },
        method: "POST",
      });
      console.log("after fetch");
      const data = await result.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    verifyAdmin();
  }, []);

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
