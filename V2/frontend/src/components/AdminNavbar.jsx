import React from "react";

import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";
import $ from "jquery";

import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const AdminNavbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <>
      <nav className="global-nav-bar admin-nav">
        <div className="admin-nav-left-span">
          <div className="admin-nav-left-sub-ctn adm-ctn">
            <p style={{ padding: "0", margin: "0" }} className="adm-left-nav-ctn-text">Admin</p>
            <div
              className="admin-inactive-indicator adm-active-indicator adm-inactive-indicator"
            ></div>
          </div>
          <div className="admin-nav-left-sub-ctn user-ctn">
            <p style={{ padding: "0", margin: "0" }} className="user-left-nav-ctn-text">Users</p>
            <div
              className="admin-inactive-indicator user-active-indicator"
              id=""
            ></div>
          </div>
          <div className="admin-nav-left-sub-ctn org-ctn">
            <p style={{ padding: "0", margin: "0" }} className="org-left-nav-ctn-text">Organizations</p>
            <div
              className="admin-inactive-indicator org-active-indicator"
              id=""
            ></div>
          </div>
        </div>
        <Link onClick={handleClick} className="admin-nav-right-logout-span">
          <div
            className="admin-nav-right-logout-span"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faSignOut} style={{}} />
            <p style={{ padding: "0", margin: "0", marginLeft: "5px" }}>
              LOGOUT
            </p>
          </div>
        </Link>
      </nav>
    </>
  );
};


export default AdminNavbar;
