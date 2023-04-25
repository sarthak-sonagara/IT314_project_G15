import React from "react";
import Navbar from "../components/Navbar";


const Home_conf = () => {
  return (
    <div>
      <Navbar />
      
      <div className="row">
        <div className="col-sm-12">
          <div className="card card-table">
            <div className="card-header"><h3>Conference Table</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive noSwipe">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th style={{ width: "25%" }}>Conference Name</th>
                      <th style={{ width: "15%" }}>Start Date</th>
                      <th style={{ width: "15%" }}>End Date</th>
                      <th style={{ width: "20%" }}>Speaker</th>
                      <th style={{ width: "15%" }}>Topic</th>
                      <th style={{ width: "10%" }}>Register</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="conference_name">Sumit Monpara</td>
                      <td className="date">May 6, 2018</td>
                      <td className="date">May 7, 2018</td>
                      <td className="speaker">Jenish</td>
                      <td className="topic">Space Reseach</td>
                      <td className="btn"><button type="button" class="btn btn-outline-success">Register</button></td>
                    </tr>
                    <tr>
                      <td className="conference_name">Sumit Monpara</td>
                      <td className="date">May 6, 2018</td>
                      <td className="date">May 7, 2018</td>
                      <td className="speaker">Jenish</td>
                      <td className="topic">Space Reseach</td>
                      <td className="btn"><button type="button" class="btn btn-outline-success">Register</button></td>
                    </tr>
                    <tr>
                      <td className="conference_name">Sumit Monpara</td>
                      <td className="date">May 6, 2018</td>
                      <td className="date">May 7, 2018</td>
                      <td className="speaker">Jenish</td>
                      <td className="topic">Space Reseach</td>
                      <td className="btn"><button type="button" class="btn btn-outline-success">Register</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home_conf;
  