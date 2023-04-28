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
  const [status, setStatus] = useState([false]);

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

  const handleCancelRegister = (event, id, index) => {
    event.preventDefault();
    if (!user) {
      alert("Please login to register");
      return;
    }
    console.log(id, user.user._id);
    let url = import.meta.env.DEV
      ? "http://localhost:3000/org/cancelRegistration/" + id
      : "https://conf-backend.onrender.com/org/cancelRegistration/" + id;

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
          alert("Registration cancelled successfully");
          // mark the status false
          setStatus((prev) => {
            prev[index] = false;
            return prev;
          });
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
        setStatus(Array.from({ length: conferences.length }).fill(false));
        // write code for marking the registered conferences among the list of all conferences
        conferences.forEach((conference, index) => {
          if (conference.registeredAttendees.includes(user.user._id)) {
            setStatus((prev) => {
              prev[index] = true;
              return prev;
            });
          }
        });
        console.log(conferences, status);
      });
    });
  }, [status]);

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
                {conferences.map((conference, index) => {
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
                      {conference.guestSpeakers.length &&
                      conference.guestSpeakers[0] !== "" ? (
                        <td className="speaker">
                          {conference.guestSpeakers.map((speaker) => {
                            return (
                              <span className="speaker_name">{speaker}</span>
                            );
                          })}
                        </td>
                      ) : (
                        <td className="speaker text-secondary">NIL</td>
                      )}
                      {conference.topics.length &&
                      conference.topics[0] !== "" ? (
                        <td className="topic">
                          {conference.topics.map((topic) => {
                            return <span className="topic_name">{topic}</span>;
                          })}
                        </td>
                      ) : (
                        <td className="topic text-secondary">NIL</td>
                      )}
                      <td className="reg_btn">
                        {status[index] ? (
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-danger"
                            id="ctn-of-HomeConf-rg-btn"
                            disabled={!user}
                            onClick={(event) =>
                              handleCancelRegister(event, conference._id, index)
                            }
                          >
                            Registered
                          </button>
                        ) : (
                          <button
                            type="button"
                            class="btn btn-sm btn-outline-primary"
                            id="ctn-of-HomeConf-rg-btn"
                            onClick={(event) =>
                              handleRegister(event, conference._id)
                            }
                            disabled={!user}
                          >
                            Register
                          </button>
                        )}
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
