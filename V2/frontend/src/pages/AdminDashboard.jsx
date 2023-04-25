import React, { useState, useEffect } from "react";
import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import AdminNavbar from "../components/AdminNavbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AdminDashboard = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    var xmlHttpUsers = new XMLHttpRequest();
    var xmlHttpOrgs = new XMLHttpRequest();
    var getAllUserUrl = "http://localhost:3000/auth/user/";
    var getAllOrgUrl = "http://localhost:3000/auth/org/";
    xmlHttpUsers.open("GET", getAllUserUrl, true);
    xmlHttpOrgs.open("GET", getAllOrgUrl, true);
    xmlHttpUsers.send();
    xmlHttpOrgs.send();

    xmlHttpUsers.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        $(document).ready(function () {
          let table = $("#users_datatable").DataTable({
            stateSave: true,
            bDestroy: true,
            data: data.users,
            columns: [
              { data: "_id" },
              { data: "username" },
              { data: "email" },
              { data: "role" },
              {
                data: null,
                defaultContent:
                  '<div style="display:flex"><button class="btn btn-primary edit-btn" style="margin-right: 5px">Edit</button><button class="btn btn-danger delete-btn">Delete</button></div>',
              },
            ],
          });

          // Handle Edit button click
          $("#users_datatable tbody").on("click", ".edit-btn", function () {
            let td = $(this).closest("tr").find("td:eq(0)");
            // let id = table.row(td).data();
            if (table.cell(td).data()) {
              // $("#input-id").val("Hello");
              console.log(table.cell(td).data());
              console.log($("#input-id").val());
            }
            // let rowData = table.row(tr).data();
            handleShowEdit();
          });

          // Handle Delete button click
          $("#users_datatable tbody").on("click", ".delete-btn", function () {
            let rowData = table.row($(this).parents("tr")).data();
            console.log("Delete row data:", rowData);
            handleShowDelete();
          });
        });
      }
    };

    xmlHttpOrgs.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        $(document).ready(function () {
          let table1 = $("#orgs_datatable").DataTable({
            stateSave: true,
            bDestroy: true,
            data: data.orgs,
            columns: [{ data: "_id" }, { data: "orgname" }, { data: "email" }],
          });
        });
      }
    };
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <div className="admin-content-ctn admin-welcome-screen">
          <div className="admin-welcome-ctn">Welcome to Admin Dashboard</div>
        </div>
        <div className="admin-content-ctn user-table-ctn">
          <table id="users_datatable" className="display">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role.</th>
                <th>Actions</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="admin-content-ctn org-table-ctn">
          <table id="orgs_datatable" className="display">
            <thead>
              <tr>
                <th>Id</th>
                <th>OrgName</th>
                <th>Email</th>
              </tr>
            </thead>
          </table>
        </div>
        <>
          <Modal
            show={showEdit}
            onHide={handleCloseEdit}
            style={{
              transform: "translate(-50%, -25%)",
              top: "50%",
              left: "50%",
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <form action="">
              <Modal.Body>
                <div className="mb-3">
                  <label htmlFor="input-id" className="form-label">
                    ID:
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    id="input-id"
                    required
                    readOnly
                    value={"s"}
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
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    // readOnly
                    defaultValue=""
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
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEdit}>
                  Close
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  onClick={handleCloseEdit}
                >
                  Submit
                </Button>
              </Modal.Footer>
            </form>
          </Modal>

          <Modal
            show={showDelete}
            onHide={handleCloseDelete}
            style={{
              transform: "translate(-50%, -25%)",
              top: "50%",
              left: "50%",
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Are you really want to delete it?</Modal.Title>
            </Modal.Header>
            <form action="">
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseDelete}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="danger"
                  onClick={handleCloseDelete}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
        </>
      </div>
    </>
  );
};

$(document).ready(function () {
  $(".adm-ctn").on("click", function () {
    // console.log("clicked");
    if ($(".user-table-ctn").hasClass("user-active-table-ctn")) {
      $(".user-table-ctn").toggleClass("user-active-table-ctn");
      $(".user-left-nav-ctn-text").toggleClass("active-user-left-nav-ctn-text");
      $(".user-active-indicator").toggleClass("user-inactive-indicator");
    }
    if ($(".org-table-ctn").hasClass("org-active-table-ctn")) {
      $(".org-table-ctn").toggleClass("org-active-table-ctn");
      $(".org-left-nav-ctn-text").toggleClass("active-org-left-nav-ctn-text");
      $(".org-active-indicator").toggleClass("org-inactive-indicator");
    }
    if ($(".admin-welcome-screen").hasClass("admin-hidden-welcome-screen")) {
      $(".adm-left-nav-ctn-text").toggleClass("active-adm-left-nav-ctn-text");
      $(".admin-welcome-screen").toggleClass("admin-hidden-welcome-screen");
      $(".adm-active-indicator").toggleClass("adm-inactive-indicator");
    }
  });
  $(".user-ctn").on("click", function () {
    if (!$(".user-table-ctn").hasClass("user-active-table-ctn")) {
      $(".user-table-ctn").toggleClass("user-active-table-ctn");
      $(".user-left-nav-ctn-text").toggleClass("active-user-left-nav-ctn-text");
      $(".user-active-indicator").toggleClass("user-inactive-indicator");
    }
    if ($(".org-table-ctn").hasClass("org-active-table-ctn")) {
      $(".org-table-ctn").toggleClass("org-active-table-ctn");
      $(".org-left-nav-ctn-text").toggleClass("active-org-left-nav-ctn-text");
      $(".org-active-indicator").toggleClass("org-inactive-indicator");
    }
    if (!$(".admin-welcome-screen").hasClass("admin-hidden-welcome-screen")) {
      $(".admin-welcome-screen").toggleClass("admin-hidden-welcome-screen");
      $(".adm-left-nav-ctn-text").toggleClass("active-adm-left-nav-ctn-text");
      $(".adm-active-indicator").toggleClass("adm-inactive-indicator");
    }
  });
  $(".org-ctn").on("click", function () {
    // console.log("clicked");
    if ($(".user-table-ctn").hasClass("user-active-table-ctn")) {
      $(".user-left-nav-ctn-text").toggleClass("active-user-left-nav-ctn-text");
      $(".user-table-ctn").toggleClass("user-active-table-ctn");
      $(".user-active-indicator").toggleClass("user-inactive-indicator");
    }
    if (!$(".org-table-ctn").hasClass("org-active-table-ctn")) {
      $(".org-table-ctn").toggleClass("org-active-table-ctn");
      $(".org-left-nav-ctn-text").toggleClass("active-org-left-nav-ctn-text");
      $(".org-active-indicator").toggleClass("org-inactive-indicator");
    }
    if (!$(".admin-welcome-screen").hasClass("admin-hidden-welcome-screen")) {
      $(".adm-left-nav-ctn-text").toggleClass("active-adm-left-nav-ctn-text");
      $(".admin-welcome-screen").toggleClass("admin-hidden-welcome-screen");
      $(".adm-active-indicator").toggleClass("adm-inactive-indicator");
    }
  });
});

export default AdminDashboard;
