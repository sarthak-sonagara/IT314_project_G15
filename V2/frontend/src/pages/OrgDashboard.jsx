import React, { useState, useEffect } from "react";
import "../assets/CSS/style.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
//jQuery libraries
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import AdminNavbar from "../components/AdminNavbar";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Alert from 'react-bootstrap/Alert';


const OrgDashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
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
        if (start_date > end_date) {
            alert("Start date cannot be greater than end date");
            return;
        }
        
        console.log(conf_name);
        console.log(desc);
        console.log(start_date);
        console.log(end_date);
        console.log(guest_speaker);
        console.log(topic);
    };
    
    const handleShow = () => setShow(true);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [editname,Seteditname] = useState("");
    const [editdesc,Seteditdesc] = useState("");
    const [editstartdate,Seteditstartdate] = useState("");
    const [editenddate,Seteditenddate] = useState("");
    const [editguestspeaker,Seteditguestspeaker] = useState("");
    const [edittopic,Setedittopic] = useState("");



    useEffect(() => {

        var xmlhttp = new XMLHttpRequest();
        var listFilesUrl = "http://localhost:3000/org/all";
        xmlhttp.open("GET", listFilesUrl, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                console.log(data);
                $(document).ready(function () {
                    let table = $("#example").DataTable({
                        stateSave: true,
                        bDestroy: true,
                        data: data.conferences,
                        columns: [
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
                        let td = $(this).closest("tr").find("td:eq(0)");
                        // let id = table.row(td).data();
                        if (table.cell(td).data()) {
                            // $("#input-id").val("Hello");
                            console.log(table.cell(td).data());
                            Seteditname(table.cell(td).data());
                            td = $(this).closest("tr").find("td:eq(1)");
                            Seteditdesc(table.cell(td).data());
                            td = $(this).closest("tr").find("td:eq(2)");
                            Seteditstartdate(table.cell(td).data());
                            td = $(this).closest("tr").find("td:eq(3)");
                            Seteditenddate(table.cell(td).data());
                            td = $(this).closest("tr").find("td:eq(4)");
                            Seteditguestspeaker(table.cell(td).data());
                            td = $(this).closest("tr").find("td:eq(5)");
                            Setedittopic(table.cell(td).data());

                        }
                        // let rowData = table.row(tr).data();
                        // console.log("Edit row data:", id);

                        handleShowEdit();
                    });

                    // Handle Delete button click
                    $("#example tbody").on("click", ".delete-btn", function () {
                        let rowData = table.row($(this).parents("tr")).data();
                        console.log("Delete row data:", rowData);
                        handleShowDelete();
                    });
                });
            }
        };
    }, []);

    return (
        <>
            <div style={{
                backgroundColor: "#F5F5F5",
                paddingTop: "63px",
                overflow: "hidden",
                display: "flex",
                width: "100%",
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>

                <AdminNavbar />

                <Button variant="primary" onClick={handleShow} style={{
                    height: "50px", position: "absolute", right: "20px", top: "70px", width: "200px", borderRadius: "10px"
                }}>
                    Add Conference
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
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
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <div className="org-container">
                    <h1 style={{
                        position: "absolute", top: "70px"
                    }}>Organization Name</h1>

                    <div className="org-content-ctn">

                        <table id="example" className="display">
                            <thead>
                                <tr>
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
                                top: "50%",
                                left: "50%",
                            }}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Edit Conference</Modal.Title>
                            </Modal.Header>
                            <form action="">
                                <Modal.Body>
                                    <div className="mb-3">
                                        <label htmlFor="conferencename" className="form-label">
                                            Conference Name
                                        </label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            id="conference-name"
                                            required
                                            value={editname}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">
                                            Description
                                        </label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            id="description"
                                            required
                                            value={editdesc}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="startdate" className="form-label">
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            className="input-field"
                                            id="startdate"
                                            required
                                            value={editstartdate}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="enddate" className="form-label">
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            className="input-field"
                                            id="enddate"
                                            required
                                            value={editenddate}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="guestspeaker" className="form-label">
                                            Guest Speakers
                                        </label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            id="guestspeaker"
                                            required
                                            value={editguestspeaker}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="topic" className="form-label">
                                            Topics
                                        </label>
                                        <input
                                            type="text"
                                            className="input-field"
                                            id="topic"
                                            required
                                            value={edittopic}
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
            </div>
        </>
    );
};



export default OrgDashboard;
