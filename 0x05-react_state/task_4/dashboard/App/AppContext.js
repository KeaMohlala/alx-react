import React from "react";

export const defaultUser = {
  email: "",
  password: "",
  isLoogedIn: false,
};

export const defaultLogOut = () => {};

const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});
export default AppContext;
