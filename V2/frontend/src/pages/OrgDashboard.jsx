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
import { text } from "@fortawesome/fontawesome-svg-core";

const OrgDashboard = () => {
    return (
        <>
            <AdminNavbar />
            <div className="admin-container">
                <div className="admin-content-ctn">
                    <h1 style={{
                        textAlign: "center",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                    }}>
                        Organization Name
                    </h1>
                        
                    
                    <table id="example" className="display">

                        <thead>

                            <tr>
                                <th>Conference Name</th>
                                <th>Description</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                    </table>

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
                        "<svg style='height: 15px; width: 15px; fill: var(--bs-primary); cursor: pointer;'><path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' /><path fill-rule='evenodd' d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z' /></svg>",
                },
                {
                    data: null,
                    defaultContent:
                        "<svg style='height: 15px; width: 15px; fill: var(--bs-danger); cursor: pointer;'>  <path d='M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z' /></svg>",
                },
            ],
        });
    }
};

export default OrgDashboard;
