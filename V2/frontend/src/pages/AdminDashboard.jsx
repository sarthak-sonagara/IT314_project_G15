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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    var xmlhttp = new XMLHttpRequest();
    var listFilesUrl = "http://localhost:3000/auth/user/";
    xmlhttp.open("GET", listFilesUrl, true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        let table = $("#example").DataTable({
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
                '<button class="btn btn-primary edit-btn">Edit</button>',
            },
            {
              data: null,
              defaultContent:
                '<button class="btn btn-danger delete-btn">Delete</button>',
            },
          ],
        });

        // Handle Edit button click
        $("#example tbody").on("click", ".edit-btn", function () {
          handleShow();
        });

        // Handle Delete button click
        $("#example tbody").on("click", ".delete-btn", function () {
          // let rowData = table.row($(this).parents("tr")).data();
          // console.log("Delete row data:", rowData);
          handleShow();
        });
      }
    };
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        <div className="admin-content-ctn">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role.</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
        <>
          <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    </>
  );
};

export default AdminDashboard;
