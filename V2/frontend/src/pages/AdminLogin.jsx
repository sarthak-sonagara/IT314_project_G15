import React, { useState } from "react";
import "../assets/CSS/style.css";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const AdminLogin = () => {
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
        <div className="admin-login-container">
          <div className="admin-login-ctn">
            <b
              style={{
                fontSize: 25,
                color: "var(--secondary-color)",
                marginBottom: 15,
              }}
            >
              Admin Login
            </b>
            <form style={{ width: "70%" }} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address:
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
              <button
                type="submit"
                className="input-btn"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  border: "none",
                }}
                disabled={isLoading}
              >
                Submit
              </button>
              <br />
              <Link to="/password-reset">
                <p style={{padding: "0", color: "var(--primary-color)", background: "none", marginTop: "10px", marginLeft: "2px"}}>Forgot Password ?</p>
              </Link>
              {error && <div className="error text-danger">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin