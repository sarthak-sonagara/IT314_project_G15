import React, { useState } from "react";
import "../assets/CSS/style.css";

import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Org_Signup = () => {
  

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
              Already have an account, then click on the below LogIn button!
            </p>
            <Link to="/Org_Login">
              <button type="submit" className="optional-btn">
                LogIn
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
              Organization Signup
            </b>
            <form style={{ width: "65%" }}>
              <div className="mb-3">
                <label htmlFor="input-username" className="form-label">
                  Organization name:
                </label>
                <input
                  type="text"
                  className="input-field"
                  id="input-username"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="input-email" className="form-label">
                  Email address:
                </label>
                <input
                  type="email"
                  className="input-field"
                  id="input-email"
                  required
                />
              </div>
              
                
              <div className="mb-3">
                <label htmlFor="input-password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="input-field"
                  id="input-password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="input-conf-password" className="form-label">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="input-field"
                  id="input-conf-password"
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
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Org_Signup;
