import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import HomeConf from "./pages/HomeConf";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
// import TimeLine from "./pages/TimeLine";
import TimeLineTest from "./pages/TimeLineTest";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import OrgLogin from "./pages/OrgLogin";
import OrgSignup from "./pages/OrgSignup";
import OrgDashboard from "./pages/OrgDashboard";
import UserDashboard from "./pages/UserDashboard";
import Choice from "./pages/choice";
import UserProfile from "./pages/UserProfile";
import OrgProfile from "./pages/OrgProfile";

function App() {
  const { user, org } = useAuthContext(); // will be used to provide functionality of private routes
  console.log(user);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* admin routes */}
          <Route
            element={
              !user || user.role !== "admin" ? (
                <AdminLogin />
              ) : (
                <Navigate to="/admin/dashboard" />
              )
            }
            path="/admin/login"
          />
          <Route
            element={
              user && user.role === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/admin/login" />
              )
            }
            path="/admin/dashboard"
          />
          {/* general routes */}
          {/* public routes */}
          <Route element={<Home />} path="/" />

          <Route
            element={!user && !org ? <Choice /> : <Navigate to="/" />}
            path="/choice"
          />
          <Route
            element={!user ? <Login /> : <Navigate to="/" />}
            path="/login"
          />
          <Route
            element={!user ? <Signup /> : <Navigate to="/" />}
            path="/signup"
          />
          <Route
            element={org ? <OrgDashboard /> : <Navigate to="/choise" />}
            path="org-dashboard"
          />
          <Route
            element={!org ? <OrgLogin /> : <Navigate to="/" />}
            path="/org-login"
          />
          <Route
            element={!org ? <OrgSignup /> : <Navigate to="/" />}
            path="/org-signup"
          />
          <Route
            element={
              user ? (
                <UserDashboard />
              ) : org ? (
                <OrgDashboard />
              ) : (
                <Navigate to="/choice" />
              )
            }
            path="/dashboard"
          />

          <Route
            element={
              user ? (
                <UserProfile />
              ) : org ? (
                <OrgProfile />
              ) : (
                <Navigate to="/login" />
              )
            }
            path="/profile"
          />
          <Route element={<PasswordReset />} path="/password-reset" />
          {/* Oragnization  */}
          {/* <Route element={<TimeLine />} path="/timeline" /> */}
          <Route element={<TimeLineTest />} path="/timeline" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
