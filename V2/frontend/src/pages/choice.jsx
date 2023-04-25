import React, { useState, useEffect } from "react";
import "../assets/CSS/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Choice = () => {
  useEffect(() => {
    document.title = "Choice";
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-5">
        <div className="choice-screen-ctn d-flex flex-column flex-md-row">
          <Link className="choice-btn my-3" to="/login">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              border="0"
              height="150px"
              style={{ marginBottom: "10px" }}
            />
            <br />
            User
          </Link>
          <Link className="choice-btn my-3" to="/org-Login">
            <img src="../../images/org.png" border="0" height="160px" />
            <br />
            Organization
          </Link>
        </div>
      </div>
    </>
  );
};

export default Choice;
