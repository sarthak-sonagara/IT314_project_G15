import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, role) => {
    setIsLoading(true);
    setError(null);
    const url =
      process.env.NODE_ENV === "development"
        ? "/auth/user/signup"
        : "https://conf-backend.onrender.com/auth/user/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        role,
      }),
    });

    const json = await response.json(); // javascript object response

    // response has state of ok if successfull

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // save the user (token) to local-storage
      localStorage.setItem("user", JSON.stringify(json)); // store string version into local-storage

      // update the auth context
      dispatch({
        type: "LOGIN",
        payload: json,
      });

      setIsLoading(false);
    }
  };

  const orgSignup = async (orgname, email, password) => {
     console.log("orgname", orgname, "email", email, "password", password);
    setIsLoading(true);
    setError(null);
    const url =
      process.env.NODE_ENV === "development"
        ? "/auth/org/signup"
        : "https://conf-backend.onrender.com/auth/org/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgname,
        email,
        password,
      }),
    });

    const json = await response.json(); // javascript object response

    // response has state of ok if successfull

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    } else {
      // save the user (token) to local-storage
      localStorage.setItem("org", JSON.stringify(json)); // store string version into local-storage

      // update the auth context
      dispatch({
        type: "ORG_LOGIN",
        payload: json,
      });

      setIsLoading(false);
    }
  };

  return { signup, orgSignup, isLoading, error };
};
