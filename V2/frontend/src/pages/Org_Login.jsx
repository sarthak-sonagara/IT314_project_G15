import React, { useState } from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";

const Org_Login = () => {

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
            <Link to="/org_signup">
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
            <form style={{ width: "65%" }}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address or Username:
                </label>
                <input
                  type="email"
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
                />
              </div>

              <button
                type="submit"
                className="input-btn"
                style={{
                  backgroundColor: "var(--menu-bg-color)",
                  border: "none",
                }}
              // disabled={isLoading}
              >
                Submit
              </button>
              <button
                type="submit"
                className="input-btn"
                style={{
                  backgroundColor: "var(--menu-bg-color)",
                  border: "none",
                  marginInlineStart: 20,
                }}
              >
                Password reset
              </button>
            </form>
          </div>
        </div>

      </div >
    </>
  );
};

export default Org_Login;
