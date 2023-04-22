import React, { useState, useEffect } from "react";
import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";
import Table from "react-bootstrap/Table";
import { faSearch, faSignOut } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const AdminDashboard = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch("http://localhost:3000/auth/user/")
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

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
        <div className="admin-nav-right-logout-span">
          <FontAwesomeIcon icon={faSignOut} style={{}} />
          <p style={{ padding: "0", margin: "0", marginLeft: "5px" }}>LOGOUT</p>
        </div>
      </nav>
      <div className="admin-container">
        <div className="admin-content-ctn">
          <div className="container">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Operations</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

var xmlhttp = new XMLHttpRequest();
var listFilesUrl = "http://localhost:3000/auth/user/";
xmlhttp.open("GET", listFilesUrl, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if(this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
    let table = $("#example").DataTable({
      stateSave: true,
    "bDestroy": true,
      "data": data.users,
      "columns": [
        { data: "_id" },
        { data: "username" },
        { data: "email" },
        { data: "role" },
        {
          data: null,
          defaultContent: "<i class='fa-solid fa-pen-to-square'></i>"
        }
      ],
    });
  }
}

export default AdminDashboard;
