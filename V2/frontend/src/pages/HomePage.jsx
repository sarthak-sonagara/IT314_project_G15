import React from "react";
import "../assets/CSS/style.css";

var HomePage = React.createClass({
  render: function () {
    return (
      <div style={{background: "red", height: "100%", width: "100%"}}>
        <nav className="nav-bar">
          <div className="icons-container">
            <div className="search-icon-container">
              {/* <img class="search-icon" src="./assests/search.png" alt="" /> */}
              <i className="fas fa-search search-icon" />
            </div>
            <div className="btn-group">
              <div className="user-icon-container">
                {/* <img class="user-icon" src="./assests/user.png" alt="" /> */}
                <i className="fas fa-user user-icon" />
              </div>
              <button
                type="button"
                className="dropdown-btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              ></button>
              <div className="dropdown-menu dropdown-menu-right shadow p-3 mb-5 bg-body rounded">
                <button className="dropdown-item" type="button">
                  VIEW PROFILE
                </button>
                <button className="dropdown-item" type="button">
                  LOGOUT
                </button>
              </div>
            </div>
            <div className="notification-icon-container">
              {/* <img class="notification-icon" src="./assests/bell.png" alt="" /> */}
              <i className="fas fa-bell notification-icon" />
            </div>
          </div>
        </nav>
        <div className="left-container">
          <div className="logo-container" id="logo-ctn">
            <img className="logo-icon" src="./assests/github.png" alt="" />
            <h5 style={{ padding: "0px", margin: 0 }}>CMS</h5>
          </div>
          <div className="left-sub-container">
            <h6 style={{ marginBottom: "20px", opacity: "80%" }}>MENU</h6>
            <div className="menu-options-ctn" style={{ opacity: "100%" }}>
              <img className="menu-icons" src="./assests/home1.png" alt="" />
              <p className="menu-texts">HOME</p>
            </div>
            <div className="menu-options-ctn">
              <img className="menu-icons" src="./assests/upload1.png" alt="" />
              <p className="menu-texts">CALL FOR PAPER</p>
            </div>
            <div className="menu-options-ctn">
              <img className="menu-icons" src="./assests/group1.png" alt="" />
              <p className="menu-texts">ORGANIZATION</p>
            </div>
            <h6 style={{ marginBottom: "20px", opacity: "80%" }}>ARCHIVE</h6>
            <div className="menu-options-ctn">
              <img
                className="menu-icons"
                src="./assests/database2.png"
                alt=""
              />
              <p className="menu-texts">DATA</p>
            </div>
            <div className="menu-options-ctn">
              <img
                className="menu-icons"
                src="./assests/clipboard1.png"
                alt=""
              />
              <p className="menu-texts">RESOURCES</p>
            </div>
            <div className="menu-options-ctn">
              <img
                className="menu-icons"
                src="./assests/chronograph1.png"
                alt=""
              />
              <p className="menu-texts">PAST PROCEEDING</p>
            </div>
          </div>
          <div className="logout-container text-danger">
            <i
              className="fa-solid fa-right-from-bracket"
              style={{ margin: "0 10px 0 15px" }}
            />
            <h6 style={{ padding: "0px", margin: 0 }}>LOGOUT</h6>
          </div>
        </div>
      </div>
    );
  },
});
