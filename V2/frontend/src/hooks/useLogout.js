const { useAuthContext } = require("./useAuthContext");
const { useWorkoutsContext } = require("./useWorkoutsContext");

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutsDipatch } = useWorkoutsContext();

  const logout = () => {
    // remove user from local storage
    localStorage.removeItem("user");

    //   dispatch logout action
    dispatch({
      type: "LOGOUT",
    });
  };
  return { logout };
};
