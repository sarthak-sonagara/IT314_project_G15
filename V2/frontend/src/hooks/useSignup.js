import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/auth/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
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
      localStorage.setItem("user", JSON.stringify(json)); // store string version into local-storage

      // update the auth context
      dispatch({
        type: "LOGIN",
        payload: json,
      });

      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
