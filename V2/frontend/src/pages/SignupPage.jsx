import React, { useState } from "react";
import "../assets/CSS/Signup.css";

import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password, role);
  };

  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row gx-lg-5 align-items-center mb-5 justify-content-center">
            <div className="col-lg-5 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best plateform <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for Conferences
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                This website is a platform for organizing and managing events.
                It includes features like online registration, speaker and
                agenda management, and communication tools.
              </p>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                This platform streamlines the organization of conferences and
                makes it easier for organizers to deliver a successful event.
              </p>
            </div>

            <div className="sign_up col-lg-5 mb-5 mb-lg-0 position-relative">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h2 className="pb-2 pb-md-0 mb-md-5">
                    <b> Sign Up Form</b>
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-floating">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}
                            value={username}
                            required
                          />
                          <label className="form-label" htmlFor="username">
                            User Name
                          </label>
                        </div>
                      </div>

                      <div className="row"></div>
                      <div className="col-md-12 mb-4">
                        <div className="form-floating">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                          />
                          <label className="form-label" htmlFor="emailAddress">
                            Email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="mb-4">
                        <h6 className="mb-2 pb-1">Role: </h6>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="PublisherRole"
                            value="admin"
                            required
                            onChange={(e) => setRole(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Admin
                          </label>
                        </div>

                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="AttendeeRole"
                            value="attendee"
                            required
                            onChange={(e) => setRole(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Attendee
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-floating">
                          <input
                            type="password"
                            id="confpassword"
                            className="form-control form-control-lg"
                            placeholder="Confirm Password"
                            required
                          />
                          <label className="form-label" htmlFor="confpassword">
                            Verify Password
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mt-1">
                      <input
                        className="btn btn-primary btn-lg"
                        type="submit"
                        value="Sign Up"
                        disabled={isLoading}
                      />
                      {error && <div className="text-danger">{error}</div>}
                    </div>
                    <div className="mt-4">
                      <p>
                        Have already an account?{" "}
                        <b>
                          <a href="#">Login here</a>
                        </b>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
