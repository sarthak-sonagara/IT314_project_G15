import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAuthContext } from "../hooks/useAuthContext";

const CallForPaper = () => {
  const { user } = useAuthContext();
  const [file, setFile] = useState(null);
  const [allConfernecess, setAllConfernecess] = useState([]);

  useEffect(() => {
    document.title = "Call For Paper";
    fetch("http://localhost:3000/org/all")
      .then((res) => res.json())
      .then((data) => {
        setAllConfernecess(data.conferences);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (confid, event) => {
    console.log(confid);
    event.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }
    let formData = new FormData();
    formData.append("file", file);
    fetch(
      "http://localhost:3000/upload?email=" +
        user.user.email +
        "&confid=" +
        confid,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };

  return (
    <>
      <Navbar />
      <div className="container" style={{ marginTop: "5em" }}>
        <form className="row">
          <div className="card-header">
            <h3>Conference Table</h3>
          </div>
          <table
            className="table table-hover"
            style={{
              textAlign: "center",
            }}
          >
            <thead>
              <tr>
                <th scope="col" style={{ width: "25%" }}>
                  Conference Name
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Start Date
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  End Date
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  Topic
                </th>
                <th scope="col" style={{ width: "20%" }}>
                  Upload
                </th>
                <th scope="col" style={{ width: "10%" }}></th>
              </tr>
            </thead>
            <tbody>
              {allConfernecess.map((conference) => (
                <tr key={conference._id}>
                  <td scope="row" className="conference_name text-truncate">
                    {conference.conferenceName}
                  </td>
                  <td className="date">{formatDate(conference.startDate)}</td>
                  <td className="date">{formatDate(conference.endDate)}</td>
                  <td className="topic">Space Reseach</td>
                  <td className="file_upload">
                    <input
                      type="file"
                      name="r_paper"
                      id="r_paper"
                      onChange={handleChange}
                    />
                  </td>
                  <td className="upload_button">
                    <button
                      type="submit"
                      class="btn btn-outline-success btn-sm"
                      onClick={(event) => handleSubmit(conference._id, event)}
                    >
                      Upload
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};

export default CallForPaper;
