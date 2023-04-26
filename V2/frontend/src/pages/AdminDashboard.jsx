import React, { useState, useEffect } from "react";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import AdminNavbar from "../components/AdminNavbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AdminDashboard = () => {
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const handleDeleteSubmit = () => {
    setShowDelete(false);
    var mail = deleteMail;
    console.log("This is the mail:", mail);
    fetch("http://localhost:3000/auth/user/delete/", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: mail,
      }),
    });
    fetchUsers();
  };
  const [editEmail, SetEditEmail] = useState("");
  const [editId, SetEditId] = useState("");
  const [editUsername, SetEditUsername] = useState("");
  const [editPassword, SetEditPassword] = useState("");
  const [deleteID, SetDeleteID] = useState("");
  const [deleteMail, SetDeleteMail] = useState("");
  const [toggleState, setToggleState] = useState(1);


  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/auth/user/");
    const data = await res.json();
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
        SetEditId(table.cell($(this).closest("tr").find("td:eq(0)")).data());
        SetEditEmail(table.cell($(this).closest("tr").find("td:eq(2)")).data());
        SetEditUsername(table.cell($(this).closest("tr").find("td:eq(1)")).data());
        handleShowEdit();
      });

      // Handle Delete button click
      $("#users_datatable tbody").on("click", ".delete-btn", function () {
        // let rowData = table.row($(this).parents("tr")).data();
        // console.log("Delete row data:", rowData);
        let td = $(this).closest("tr").find("td:eq(2)");
        if (table.cell(td).data()) {
          console.log(table.cell(td).data());
          SetDeleteMail(table.cell(td).data());
        }
        handleShowDelete();
      });
    });
  };

  const fetchOrgs = async () => {
    const res = await fetch("http://localhost:3000/auth/org/");
    const data = await res.json();
    console.log("This is Orgs:", data);
    $(document).ready(function () {
      $("#orgs_datatable").DataTable({
        stateSave: true,
        bDestroy: true,
        data: data.orgs,
        columns: [{ data: "_id" }, { data: "orgname" }, { data: "email" }],
      });
    });
  };

  fetchUsers();
  fetchOrgs();
  useEffect(() => {

  }, []);

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
              Organizations
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
                    value={editId}
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
                    value={editEmail}
                    defaultValue=""
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="input-password" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    className="input-field"
                    id="input-password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={editUsername}
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
