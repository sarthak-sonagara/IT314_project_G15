import React, { useState } from "react";

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
        <Link onClick={handleClick} className="admin-nav-right-logout-span">
          <div
            className="admin-nav-right-logout-span"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faSignOut} style={{}} />
            <p className="admin-nav-right-logout-span-txt"  style={{ padding: "0", margin: "0", marginLeft: "5px" }}>
              LOGOUT
            </p>
          </div>
        </Link>
      </nav>
    </>
  );
};

export default AdminNavbar;
