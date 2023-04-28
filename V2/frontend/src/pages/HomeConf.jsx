import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const HomeConf = () => {
  const location = useLocation();
  const { user } = useAuthContext();
  const { org } = location.state;
  console.log(org);
  let url = "";

  const [conferences, setConferences] = useState([]);

  const formateDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  const handleRegister = (event, id) => {
    event.preventDefault();
    if (!user) {
      alert("Please login to register");
      return;
    }
    console.log(id, user.user._id);
    let url = import.meta.env.DEV
      ? "http://localhost:3000/org/register/" + id
      : "https://conf-backend.onrender.com/org/register/" + id;

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user.user._id }),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
          if (data.error) {
            alert(data.error);
            return;
          }
          alert("Registered successfully");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    });
  };

  useEffect(() => {
    document.title = `${org.orgname} | Conferences}`;
    url = import.meta.env.DEV
      ? `http://localhost:3000/auth/org/${org._id}/myConferences`
      : `https://conf-backend.onrender.com/auth/org/${org._id}/myConferences`;
    fetch(url).then((res) => {
      res.json().then((data) => {
        setConferences(data.conferences);
        console.log(conferences);
      });
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div
        className="container"
        id="ctn-of-HomeConf"
        style={{ marginTop: "70px" }}
      >
        <div className="row">
          <div className="card-header">
            <h3 className=" text-center fw-bold">{org.orgname}</h3>
          </div>
          {conferences.length === 0 && (
            <div className="my-5 text-danger alert alert-danger text-center w-100">
              No conferences for now, visit later
            </div>
          )}
          {conferences.length > 0 && (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "15%" }}>
                    Conference Name
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Start Date
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    End Date
                  </th>
                  <th scope="col" style={{ width: "20%" }}>
                    Speaker
                  </th>
                  <th scope="col" style={{ width: "15%" }}>
                    Topic
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Register
                  </th>
                  <th scope="col" style={{ width: "10%" }}>
                    Papers
                  </th>
                </tr>
              </thead>
              <tbody>
                {conferences.map((conference) => {
                  return (
                    <tr>
                      <td scope="row" className="conference_name">
                        {conference.conferenceName}
                      </td>
                      <td className="date">
                        {formateDate(conference.startDate)}
                      </td>
                      <td className="date">
                        {formateDate(conference.endDate)}
                      </td>
                      {conference.guestSpeakers.length > 0 ? (
                        <td className="speaker">
                          {conference.guestSpeakers.map((speaker) => {
                            return (
                              <span className="speaker_name">{speaker}</span>
                            );
                          })}
                        </td>
                      ) : (
                        <td className="speaker">NIL</td>
                      )}
                      <td className="topic">{conference.topics}</td>
                      <td className="reg_btn">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-primary"
                          id="ctn-of-HomeConf-rg-btn"
                          onClick={(e) => handleRegister(e, conference._id)}
                          disabled={!user}
                        >
                          Register
                        </button>
                      </td>
                      <td className="reg_btn">
                        <Link
                          state={{ conference }}
                          to="/conference/papers"
                          type="button"
                          class="btn btn-sm btn-outline-primary"
                          id="ctn-of-HomeConf-rg-btn"
                          disabled={!user}
                        >
                          Paper
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeConf;
