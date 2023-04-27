import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
//jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from "react-bootstrap/Alert";

const OrgDashboard = () => {
  const { user, org } = useAuthContext();
  const [orgName, setorgName] = useState("");
  console.log(org);
  const [show, setShow] = useState(false);

  const [myid, Setmyid] = useState("");

  const fetchOrgsFromEmail = async () => {
    const res = await fetch("http://localhost:3000/auth/org/" + org.email);
    const data = await res.json();
    console.log("This is Orgs:", data);
    Setmyid(data.org._id);
    setorgName(data.org.orgname);
  };
  fetchOrgsFromEmail();

  const handleClose = () => {
    setShow(false);
    var conf_name = document.getElementById("conference-name").value;
    var desc = document.getElementById("description").value;
    var start_date = document.getElementById("startdate").value;
    var end_date = document.getElementById("enddate").value;
    var guest_speaker = document.getElementById("guestspeaker").value;
    var topic = document.getElementById("topic").value;
    guest_speaker = guest_speaker.split(",");
    topic = topic.split(",");
    for (let i = 0; i < guest_speaker.length; i++) {
      guest_speaker[i] = guest_speaker[i].trim();
    }
    for (let i = 0; i < topic.length; i++) {
      topic[i] = topic[i].trim();
    }
    if(conf_name === "" ){
      alert("Please fill conference name");
      return;
    }
    if(desc === "" ){
      alert("Please fill description");
      return;
    }
    if(start_date === "" ){
      alert("Please fill start date");
      return;
    }
    if(end_date === "" ){
      alert("Please fill end date");
      return;
    }

    if (start_date > end_date) {
      alert("Start date cannot be greater than end date");
      return;
    }
    if(start_date < new Date().toISOString().split('T')[0]){
      alert("Start date cannot be less than today's date");
      return;
    }
    function d_y(input) {
      var datePart = input.match(/\d+/g),
        year = datePart[0].substring(0), // get only two digits
        month = datePart[1],
        day = datePart[2];
      return year;
    }
    var y1 = d_y(start_date);
    var y2 = d_y(end_date);
    if(!(y1>=2022 && y1<=2050)){
      alert("Please enter a valid year in start date");
      console.log(y1);
      return;
    }
    if(!(y2>=2022 && y2<=2050)){
      alert("Please enter a valid year in start date");
      return;
    }





    fetch("http://localhost:3000/org/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        org_id: myid,
        conferenceName: conf_name,
        description: desc,
        startDate: start_date,
        endDate: end_date,
        guestSpeakers: guest_speaker,
        topics: topic,
      }),
    });
  };

  const handleShow = () => setShow(true);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleShowEdit = () => setShowEdit(true);
  const handleCloseDelete = () => {
    setShowDelete(false);

    var id = editid;

    console.log("http://localhost:3000/org/delete/" + id);
    fetch("http://localhost:3000/org/delete/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        org_id: myid,
      }),
    });
  };
  const handleShowDelete = () => setShowDelete(true);
  const [editname, Seteditname] = useState("");
  const [editdesc, Seteditdesc] = useState("");
  const [editstartdate, Seteditstartdate] = useState("");
  const [editenddate, Seteditenddate] = useState("");
  const [editguestspeaker, Seteditguestspeaker] = useState("");
  const [edittopic, Setedittopic] = useState("");
  const [editid, Seteditid] = useState("");

  const handleCloseEdit = () => {
    setShowEdit(false);

    var conf_name = document.getElementById("edit-conference-name").value;
    var desc = document.getElementById("edit-description").value;
    var start_date = document.getElementById("edit-startdate").value;
    var end_date = document.getElementById("edit-enddate").value;
    var guest_speaker = document.getElementById("edit-guestspeaker").value;
    var topic = document.getElementById("edit-topic").value;
    guest_speaker = guest_speaker.split(",");
    topic = topic.split(",");
    for (let i = 0; i < guest_speaker.length; i++) {
      guest_speaker[i] = guest_speaker[i].trim();
    }
    for (let i = 0; i < topic.length; i++) {
      topic[i] = topic[i].trim();
    }
    if(conf_name === "" ){
      alert("Please fill conference name");
      return;
    }
    if(desc === "" ){
      alert("Please fill description");
      return;
    }
    if(start_date === "" ){
      alert("Please fill start date");
      return;
    }
    if(end_date === "" ){
      alert("Please fill end date");
      return;
    }

    if (start_date > end_date) {
      alert("Start date cannot be greater than end date");
      return;
    }
    if(start_date < new Date().toISOString().split('T')[0]){
      alert("Start date cannot be less than today's date");
      return;
    }
    function d_y(input) {
      var datePart = input.match(/\d+/g),
        year = datePart[0].substring(0), // get only two digits
        month = datePart[1],
        day = datePart[2];
      return year;
    }
    var y1 = d_y(start_date);
    var y2 = d_y(end_date);
    if(!(y1>=2022 && y1<=2050)){
      alert("Please enter a valid year in start date");
      console.log(y1);
      return;
    }
    if(!(y2>=2022 && y2<=2050)){
      alert("Please enter a valid year in start date");
      return;
    }
    fetch("http://localhost:3000/org/edit/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editid,
        org_id: myid,
        conferenceName: conf_name,
        description: desc,
        startDate: start_date,
        endDate: end_date,
        guestSpeakers: guest_speaker,
        topics: topic,
      }),
    });
  };

  const hide = () => {
    setShow(false);
    setShowEdit(false);
    setShowDelete(false);
  };

  const fetchUsers = async () => {
    const res = await fetch(
      "http://localhost:3000/auth/org/" + myid + "/myconferences"
    );
    const data = await res.json();
    console.log("This are Users:", data);
    $(document).ready(function () {
      let table = $("#example").DataTable({
        stateSave: true,
        bDestroy: true,
        data: data.conferences,
        columns: [
          { data: "_id" },
          { data: "conferenceName" },
          { data: "description" },
          { data: "startDate" },
          { data: "endDate" },
          { data: "guestSpeakers" },
          { data: "topics" },
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
        console.log("edit");
        let td = $(this).closest("tr").find("td:eq(0)");
        // let id = table.row(td).data();
        if (table.cell(td).data()) {
          // console.log(table.cell(td).data());
          Seteditid(table.cell(td).data());
          // console.log(editid);
          td = $(this).closest("tr").find("td:eq(1)");
          Seteditname(table.cell(td).data());
          td = $(this).closest("tr").find("td:eq(2)");
          Seteditdesc(table.cell(td).data());
          td = $(this).closest("tr").find("td:eq(3)");

          // change date format
          function format(input) {
            var datePart = input.match(/\d+/g),
              year = datePart[0].substring(0), // get only two digits
              month = datePart[1],
              day = datePart[2];
            return year + "-" + month + "-" + day;
          }
          Seteditstartdate(format(table.cell(td).data()));
          td = $(this).closest("tr").find("td:eq(4)");
          Seteditenddate(format(table.cell(td).data()));
          console.log(editenddate);
          td = $(this).closest("tr").find("td:eq(5)");
          Seteditguestspeaker(table.cell(td).data());
          td = $(this).closest("tr").find("td:eq(6)");
          Setedittopic(table.cell(td).data());
        }
        // let rowData = table.row(tr).data();
        // console.log("Edit row data:", id);

        handleShowEdit();
      });
      // Handle Delete button click
      $("#example tbody").on("click", ".delete-btn", function () {
        let td = $(this).closest("tr").find("td:eq(0)");
        // let id = table.row(td).data();
        if (table.cell(td).data()) {
          Seteditid(table.cell(td).data());
        }
        handleShowDelete();
      });
    });
  };
  fetchUsers();

  return (
    <>
      <div className="org-text-ctn">
        <h1 style={{}}>{orgName}</h1>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{
            height: "50px",
            width: "10rem",
            borderRadius: "10px",
          }}
        >
          Add Conference
        </Button>
      </div>
      <div className="org-outer">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>New Conference</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="conference-name">
                <Form.Label>Conference Name</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="startdate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="enddate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="guestspeaker">
                <Form.Label>Guest Speakers</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="topic">
                <Form.Label>Topics</Form.Label>
                <Form.Control type="text" required />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hide}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="org-container">
          <div className="org-content-ctn">
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>Conference ID</th>
                  <th>Conference Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Guest Speakers</th>
                  <th>Topics</th>
                  <th>Edit</th>
                  <th>Delete</th>
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
                top: "25%",
                left: "50%",
              }}
            >
              <Modal.Header closeButton>
                <Modal.Title>Edit Conference</Modal.Title>
              </Modal.Header>
              <form>
                <Modal.Body>
                  <div className="mb-3">
                    <label
                      htmlFor="edit-conference-name"
                      className="form-label"
                    >
                      Conference Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      id="edit-conference-name"
                      required
                      value={editname}
                      onChange={(e) => {
                        Seteditname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      id="edit-description"
                      required
                      value={editdesc}
                      onChange={(e) => {
                        Seteditdesc(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-startdate" className="form-label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="input-field"
                      id="edit-startdate"
                      required
                      value={editstartdate}
                      onChange={(e) => {
                        Seteditstartdate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-enddate" className="form-label">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="input-field"
                      id="edit-enddate"
                      required
                      value={editenddate}
                      onChange={(e) => {
                        Seteditenddate(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-guestspeaker" className="form-label">
                      Guest Speakers
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      id="edit-guestspeaker"
                      required
                      value={editguestspeaker}
                      onChange={(e) => {
                        Seteditguestspeaker(e.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="edit-topic" className="form-label">
                      Topics
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      id="edit-topic"
                      required
                      value={edittopic}
                      onChange={(e) => {
                        Setedittopic(e.target.value);
                      }}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={hide}>
                    Close
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={handleCloseEdit}
                  >
                    Save
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
                <Button variant="secondary" onClick={hide}>
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
            </Modal>
          </>
        </div>
      </div>
    </>
  );
};

export default OrgDashboard;
