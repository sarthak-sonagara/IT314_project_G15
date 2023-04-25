import React, { useState, useEffect } from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const OrgLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { orgLogin, error, isLoading } = useLogin();

  useEffect(() => {
    document.title = "Organization Login";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await orgLogin(email, password);
  };

  return (
    <>
      <div className="login-screen-ctn">
        <div className="login-container">
          <div className="left-login-ctn">
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
            <Link to="/org-signup">
              <button type="submit" className="optional-btn">
                Signup
              </button>
            </Link>
          </div>
          <div className="right-login-ctn">
            <b
              style={{
                fontSize: 25,
                color: "var(--menu-bg-color)",
                marginBottom: 15,
              }}
            >
              Organization Login
            </b>
            <form style={{ width: "65%" }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
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
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
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
              <br />
              <Link to="/password-reset">
                <p
                  style={{
                    padding: "0",
                    color: "var(--primary-color)",
                    background: "none",
                    marginTop: "10px",
                    marginLeft: "2px",
                  }}
                >
                  Forgot Password ?
                </p>
              </Link>
              {error && <div className="error text-danger">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrgLogin;
