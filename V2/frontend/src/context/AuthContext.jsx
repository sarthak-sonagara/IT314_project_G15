import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    case "ORG_LOGIN":
      return { org: action.payload };
    case "ORG_LOGOUT":
      return { org: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const org = JSON.parse(localStorage.getItem("org"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
    if (org) {
      dispatch({ type: "ORG_LOGIN", payload: org });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
