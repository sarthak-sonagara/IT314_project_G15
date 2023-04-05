import React from "react";
import "../assets/CSS/Signup.css";

const PasswordReset = () => {
  return (
    <>
      <section style={{ minHeight: "100vh" }} className="h-100 gradient-custom">
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
                makes it easier for organizers to deliver a
                successful&nbsp;event.
              </p>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 position-relative">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <h4 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    <b> Trouble logging in?</b>
                  </h4>
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <div className="form-floating">
                          <input
                            type="email"
                            id="email"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            required
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="mt-4">
                        <input
                          className="btn btn-primary btn-lg"
                          type="submit"
                          defaultValue="Reset Password"
                        />
                      </div>
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

export default PasswordReset;
