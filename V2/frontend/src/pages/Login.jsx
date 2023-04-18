import React, { useState } from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password, role);
  };
  return (
    <>
      <div className="login-screen-ctn">
        <div className="login-container">
          <div className="left-login-ctn">
            {/* <div className="col-lg-5 mb-5 mb-lg-0" style= "z-index: 10"> */}
            <h1
              classname="my-5 display-5 fw-bold ls-tight"
              style={{
                color: "hsl(218, 81%, 95%)",
                width: "100%",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              The best plateform <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for Conferences
              </span>
            </h1>
            <p
              classname="mb-4 opacity-70"
              style={{
                color: "hsl(218, 81%, 85%)",
                width: "90%",
                textAlign: "center",
              }}
            >
              This website is a platform for organizing and managing events. It
              includes features like online registration, speaker and agenda
              management, and communication tools.
            </p>
            <p
              classname="mb-4 opacity-70"
              style={{
                color: "hsl(218, 81%, 85%)",
                width: "90%",
                textAlign: "center",
              }}
            >
              This platform streamlines the organization of conferences and
              makes it easier for organizers to deliver a successful&nbsp;event.
            </p>
            <hr />
            <p
              classname="mb-4 opacity-70"
              style={{
                color: "hsl(220, 100%, 91%)",
                width: "90%",
                textAlign: "center",
              }}
            >
              Don't have an account, please SignUp first!
            </p>
            <Link to="/signup">
              <button type="submit" className="optional-btn">
                Signup
              </button>
            </Link>
            {/* </div> */}
          </div>
          <div className="right-login-ctn">
            <b
              style={{
                fontSize: 25,
                color: "var(--menu-bg-color)",
                marginBottom: 15,
              }}
            >
              Login
            </b>
            <form style={{ width: "65%" }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address or Username:
                </label>
                <input
                  type="email"
                  className="input-field"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InputPassword" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="input-field"
                  id="InputPassword"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              Role:
              <div
                className="mb-3 form-check"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    style={{
                      cursor: "pointer",
                      accentColor: "var(--menu-bg-color)",
                    }}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    value="admin"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                    style={{ cursor: "pointer" }}
                  >
                    Admin
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                    style={{
                      cursor: "pointer",
                      accentColor: "var(--menu-bg-color)",
                    }}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    value="attendee"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                    style={{ cursor: "pointer" }}
                  >
                    Attendee
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="input-btn"
                style={{
                  backgroundColor: "var(--menu-bg-color)",
                  border: "none",
                }}
                disabled={isLoading}
              >
                Submit
              </button>
              {error && <div className="error text-danger">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
