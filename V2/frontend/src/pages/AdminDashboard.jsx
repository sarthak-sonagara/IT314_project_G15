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

import AdminNavbar from "../components/AdminNavbar";

const AdminDashboard = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <div className="admin-content-ctn">
          <Table
            id="example" className="table table-striped" 
            striped
            bordered
            hover
            size="sm"
          >
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
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
