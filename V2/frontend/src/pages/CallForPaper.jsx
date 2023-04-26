import React from "react";
import Navbar from "../components/Navbar";


const CallForPaper = () => {

  return (
    <div>
      <Navbar />
      <div className="container">
      <div className="row">
        <div className="card-header"><h3>Conference Table</h3></div>
        <table className="table table-hover" style={{
        textAlign: "center"
      }}>
          <thead>
            <tr>
              <th scope="col" style={{ width: "25%" }}>Conference Name</th>
              <th scope="col" style={{ width: "15%" }}>Start Date</th>
              <th scope="col" style={{ width: "15%" }}>End Date</th>
              <th scope="col" style={{ width: "15%" }}>Topic</th>
              <th scope="col" style={{ width: "20%" }}>Upload</th>
              <th scope="col" style={{ width: "10%" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row" className="conference_name">Sumit Monpara</td>
              <td className="date">May 6, 2018</td>
              <td className="date">May 7, 2018</td>
              <td className="topic">Space Reseach</td>
              <td className="file_upload">
                <input type="file" name="r_paper" id="r_paper" />
              </td>
              <td className="upload_button">
                <button type="button" class="btn btn-outline-success btn-sm">Upload</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
);
};

export default CallForPaper;
  