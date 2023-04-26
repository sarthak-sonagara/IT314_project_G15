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
    fetch("http://localhost:3000/auth/user/")
      .then((res) => res.json())
      .then((data) => {
        console.log("This are Users:", data);
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
      });

    fetch("http://localhost:3000/auth/org/")
      .then((res) => res.json())
      .then((data) => {
        console.log("This is Orgs:", data);
        $(document).ready(function () {
          let table1 = $("#orgs_datatable").DataTable({
            stateSave: true,
            bDestroy: true,
            data: data.orgs,
            columns: [{ data: "_id" }, { data: "orgname" }, { data: "email" }],
          });
        });
      });
  }, []);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <AdminNavbar />
      {/* <Tabs/> */}
      <div className="admin-nav-left-span">
        <div className="admin-nav-left-sub-ctn">
          <p
            style={{ padding: "0", margin: "0" }}
            className="adm-left-nav-ctn-text"
          >
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
              style={{ width: "100%", height: "100%" }}
            >
              Admin
            </button>
          </p>
        </div>
        <div className="admin-nav-left-sub-ctn">
          <p
            style={{ padding: "0", margin: "0" }}
            className="user-left-nav-ctn-text"
          >
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
              style={{ width: "100%", height: "100%" }}
            >
              Users
            </button>
          </p>
        </div>
        <div className="admin-nav-left-sub-ctn">
          <p
            style={{ padding: "0", margin: "0" }}
            className="org-left-nav-ctn-text"
          >
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
              style={{ width: "100%", height: "100%" }}
            >
              Orgs
            </button>
          </p>
        </div>
      </div>

      <div className="admin-container">
        <div
          className={
            toggleState === 1 ? "tab-content  active-content" : "tab-content"
          }
        >
          <div className="admin-content-ctn admin-welcome-screen">
            <div className="admin-welcome-ctn">Welcome to Admin Dashboard</div>
          </div>
        </div>

        <div
          className={
            toggleState === 2 ? "tab-content  active-content" : "tab-content"
          }
        >
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
        </div>

        <div
          className={
            toggleState === 3 ? "tab-content  active-content" : "tab-content"
          }
        >
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

export default AdminDashboard;
