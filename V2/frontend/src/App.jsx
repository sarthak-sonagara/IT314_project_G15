import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PasswordReset from "./pages/PasswordReset";
// import TimeLine from "./pages/TimeLine";
import TimeLineTest from "./pages/TimeLineTest";

function App() {
  const { user } = useAuthContext(); // will be used to provide functionality of private routes

  return (
    <>
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route
              element={!user ? <Login /> : <Navigate to="/" />}
              path="/login"
            />
            <Route
              element={!user ? <Signup /> : <Navigate to="/" />}
              path="/signup"
            />
            <Route element={<PasswordReset />} path="/password-reset" />
            {/* <Route element={<TimeLine />} path="/timeline" /> */}
            <Route element={<TimeLineTest />} path="/timeline" />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
