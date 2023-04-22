import React from "react";

import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowsLeftRightToLine,
  faBars,
  faBarsStaggered,
  faBell,
  faClipboardList,
  faHome,
  faRightFromBracket,
  faSearch,
  faServer,
  faSignOut,
  faTimeline,
  faUpload,
  faUser,
  faUserAlt,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

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
      <nav className="nav-bar admin-nav">
        <div className="admin-nav-left-span">
          <div className="admin-nav-left-sub-ctn">
            <p style={{ padding: "0", margin: "0" }}>Admin</p>
          </div>
          <div className="admin-nav-left-sub-ctn">
            <p style={{ padding: "0", margin: "0" }}>Users</p>
            <div
              className="admin-active-indicator"
              id="user-active-indicator"
            ></div>
          </div>
          <div className="admin-nav-left-sub-ctn">
            <p style={{ padding: "0", margin: "0" }}>Organizations</p>
            <div
              className="admin-active-indicator"
              id="org-active-indicator"
            ></div>
          </div>
        </div>
        <div className="search-bar">
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              color: "var(--primary-color)",
              position: "absolute",
              marginLeft: "13px",
            }}
          />
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search conferences..."
            style={{ background: "none", border: "none" }}
          />
        </div>
        <div
          className="admin-nav-right-logout-span"
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSignOut} style={{}} />
          <p style={{ padding: "0", margin: "0", marginLeft: "5px" }}>LOGOUT</p>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
