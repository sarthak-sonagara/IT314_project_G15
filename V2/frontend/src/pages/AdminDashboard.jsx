import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faCalendarPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AdminNavbar from "../components/AdminNavbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);
  const [showAdd, setShowAdd] = useState(false);
  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [url, setUrl] = useState("");

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddSubmit = () => {
    setUrl(
      process.env.Node_ENV === "development"
        ? "http://localhost:3000/auth/user/signup/"
        : "https://conf-backend.onrender.com/auth/user/signup/"
    );
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: AddUser,
        email: AddEmail,
        password: AddPass,
        role: AddRole,
      }),
    });
    fetchUsers();
    setShowAdd(false);
  };

  const orgHandleSubmit = () => {
    setUrl(
      process.env.Node_ENV === "development"
        ? "http://localhost:3000/auth/org/signup/"
        : "https://conf-backend.onrender.com/auth/org/signup/"
    );
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orgname: Orgname,
        email: OrgEmail,
        password: OrgPass,
      }),
    });
    fetchOrgs();
    setShow(false);
    setToggleState(1);
  };

  function toggleButtonHandler(index) {
    console.log("This is the index:", index);
  }
  //  toggleButtonHandler = (index) => {
  //   console.log("This is the index:", index);
  // }

  const handleDeleteSubmit = () => {
    var mail = deleteMail;
    console.log("This is the mail:", mail);
    if (toggleState === 2) {
      setUrl(
        process.env.Node_ENV === "development"
          ? "http://localhost:3000/auth/user/delete/"
          : "https://conf-backend.onrender.com/auth/user/delete/"
      );
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
        }),
      });
    }
    if (toggleState === 3) {
      setUrl(
        process.env.Node_ENV === "development"
          ? "http://localhost:3000/auth/org/delete/"
          : "https://conf-backend.onrender.com/auth/org/delete/"
      );
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: mail,
        }),
      });
    }
    fetchUsers();
    setShowDelete(false);
  };
  const [AddEmail, SetAddEmail] = useState("");
  const [AddPass, SetAddPass] = useState("");
  const [AddUser, SetAddUser] = useState("");
  const [AddRole, SetAddRole] = useState("");
  const [Orgname, SetOrgname] = useState("");
  const [OrgEmail, SetOrgEmail] = useState("");
  const [OrgPass, SetOrgPass] = useState("");
  const [deleteID, SetDeleteID] = useState("");
  const [deleteMail, SetDeleteMail] = useState("");
  const [acceptanceStatus, SetAcceptanceStatus] = useState("");
  const [toggleState, setToggleState] = useState(2);

  const fetchUsers = async () => {
    setUrl(
      process.env_NODE_ENV === "development"
        ? "http://localhost:3000/auth/user/"
        : "https://conf-backend.onrender.com/auth/user/"
    );
    const res = await fetch(url);
    const data = await res.json();
    // console.log("This are Users:", data);
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
              '<div style="display:flex"><svg class="delete-btn" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>',
          },
        ],
      });

      // // Handle Add button click
      $(".admin-container").on("click", ".add-btn", function () {
        handleShowAdd();
        // console.log("clicked");
      });

      // Handle Delete button click
      $("#users_datatable tbody").on("click", ".delete-btn", function () {
        let td = $(this).closest("tr").find("td:eq(2)");
        if (table.cell(td).data()) {
          // console.log(table.cell(td).data());
          SetDeleteMail(table.cell(td).data());
        }
        handleShowDelete();
      });
    });
  };

  const fetchOrgs = async () => {
    setUrl(
      process.env.Node_ENV === "development"
        ? "http://localhost:3000/auth/org/"
        : "https://conf-backend.onrender.com/auth/org/"
    );
    const res = await fetch(url);
    const data = await res.json();
    console.log("This is Orgs:", data);
    $(document).ready(function () {
      let table = $("#orgs_datatable").DataTable({
        stateSave: true,
        bDestroy: true,
        data: data.orgs,
        columns: [
          { data: "_id" },
          { data: "orgname" },
          { data: "email" },
          {
            data: "accepted",
            render: function (data, type, row) {
              return `<label class="switch"><input type="checkbox" data-id="${
                row._id
              }" ${
                data ? "checked='checked'" : ""
              }><span class="slider round"></span></label>`;
            },
          },
          {
            data: null,
            defaultContent:
              '<div style="display:flex"><svg class="delete-btn" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></div>',
          },
        ],
      });

      // Handel org delete button click
      $("#orgs_datatable tbody").on("click", ".delete-btn", function () {
        let td = $(this).closest("tr").find("td:eq(2)");
        if (table.cell(td).data()) {
          // console.log(table.cell(td).data());
          SetDeleteMail(table.cell(td).data());
        }
        handleShowDelete();
      });

      // // Handle org accept button click
      // $("#orgs_datatable tbody .switch").change(function () {
      //   // console.log("clicked");
      //   // console.log();
      //   let td = $(this).closest("tr").find("td:eq(3)");
      //   if (table.cell(td).data()) {
      //     console.log("This is a data of acceptance: ", table.cell(td).data());
      //     // SetAcceptanceStatus(table.cell(td).data());
      //   }
      // });

      $("#orgs_datatable tbody").on(
        "change",
        "input[type='checkbox']",
        function () {
          // let row = table.row($(this).closest("tr"));
          // let data = row.data();
          // let accepted = $(this).is(":checked");
          let td = $(this).closest("tr").find("td:eq(2)");
          if (table.cell(td).data()) {
            // console.log("This is a data of acceptance: ", table.cell(td).data());
            fetch("http://localhost:3000/auth/org/update/accepted", {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: table.cell(td).data(),
              }),
            });
          }
        }
      );

      // // Handle Add button click
      $(".admin-container").on("click", ".add-org-btn", function () {
        handleShow();
        // console.log("clicked");
      });
    });
  };

  fetchUsers();
  fetchOrgs();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <AdminNavbar />
      <div className="admin-nav-left-span">
        <Link className="admin-nav-left-sub-ctn" to="/">
          <p
            style={{ padding: "0", margin: "0" }}
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Home
          </p>
        </Link>

        <div className="admin-nav-left-sub-ctn">
          <p
            style={{ padding: "0", margin: "0" }}
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Users
          </p>
        </div>
        <div className="admin-nav-left-sub-ctn">
          <p
            style={{ padding: "0", margin: "0" }}
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Organizations
          </p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Conference</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="input-orgname" className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="input-field"
              id="input-orgname"
              onChange={(e) => SetOrgname(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="input-orgEmail" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="input-field"
              id="input-orgEmail"
              onChange={(e) => SetOrgEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="input-orgPass" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="input-field"
              id="input-orgPass"
              onChange={(e) => SetOrgPass(e.target.value)}
              required
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={orgHandleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="admin-container">
        <div
          className={
            toggleState === 2 ? "tab-content  active-content" : "tab-content"
          }
        >
          <div className="addButtonInAdminDashBoardCtn add-btn">
            <FontAwesomeIcon
              icon={faUserPlus}
              class="addButtonInAdminDashBoard"
            />
            <p className="addButtonInAdminDashBoardTxt">Add User</p>
          </div>
          <div className="admin-content-ctn user-table-ctn">
            <table
              id="users_datatable"
              className="display"
              style={{ width: "auto" }}
            >
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
        </div>

        <div
          className={
            toggleState === 3 ? "tab-content  active-content" : "tab-content"
          }
        >
          <div className="addButtonInAdminDashBoardCtn add-org-btn">
            <FontAwesomeIcon
              icon={faCalendarPlus}
              class="addButtonInAdminDashBoard"
            />
            <p className="addButtonInAdminDashBoardTxt">Add Orgs</p>
          </div>
          <div className="admin-content-ctn org-table-ctn">
            <table
              id="orgs_datatable"
              className="display"
              style={{ width: "auto" }}
            >
              <thead>
                <tr>
                  <th>Id</th>
                  <th>OrgName</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Delete</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>

        <>
          <Modal
            show={showAdd}
            onHide={handleCloseAdd}
            style={{
              transform: "translate(-50%, -25%)",
              top: "40%",
              left: "50%",
            }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add a User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-3">
                <label htmlFor="input-username" className="form-label">
                  Username:
                </label>
                <input
                  type="text"
                  className="input-field"
                  id="input-username"
                  onChange={(e) => SetAddUser(e.target.value)}
                  required
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
                  onChange={(e) => SetAddEmail(e.target.value)}
                  required
                />
              </div>
              Role:
              <div
                className="mb-3 form-check"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div className="form-check">
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    style={{
                      cursor: "pointer",
                      accentColor: "var(--secondary-color)",
                    }}
                    onChange={(e) => SetAddRole(e.target.value)}
                    required
                    value="publisher"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                    style={{ cursor: "pointer", marginLeft: "3px" }}
                  >
                    Publisher
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    defaultChecked=""
                    style={{
                      cursor: "pointer",
                      accentColor: "var(--secondary-color)",
                    }}
                    onChange={(e) => SetAddRole(e.target.value)}
                    required
                    value="attendee"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                    style={{ cursor: "pointer", marginLeft: "3px" }}
                  >
                    Attendee
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="input-password" className="form-label">
                  Password:
                </label>
                <input
                  type="password"
                  className="input-field"
                  id="input-password"
                  onChange={(e) => SetAddPass(e.target.value)}
                  required
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Cancel
              </Button>
              <Button type="submit" variant="primary" onClick={handleAddSubmit}>
                Submit
              </Button>
            </Modal.Footer>
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
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDelete}>
                Cancel
              </Button>
              <Button
                type="submit"
                variant="danger"
                onClick={handleDeleteSubmit}
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </>
  );
};

export default AdminDashboard;
