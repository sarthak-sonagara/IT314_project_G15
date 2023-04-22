import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    //   dispatch logout action
    dispatch({
      type: "LOGOUT",
    });
  };

  const orgLogout = () => {
    // remove user from local storage
    localStorage.removeItem("org");

    //   dispatch logout action
    dispatch({
      type: "ORG_LOGOUT",
    });
  };

  return { logout, orgLogout };
};
