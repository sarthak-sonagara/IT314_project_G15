import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home";
// import Login from './pages/Signup'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import { AuthContextProvider } from "./context/AuthContext";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      {/* <Home /> */}
      {/* <App /> */}
      {/* <Login/> */}
      {/* <PasswordReset/> */}
      <Signup />
    </AuthContextProvider>
  </React.StrictMode>
);

