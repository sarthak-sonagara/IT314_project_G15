// import logo from './logo.svg';
import "../assets/CSS/UserProfile.css";
import { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import userimage from "../../public/images/DAIICT.png";
// var cn = require('classNames');

import axios from "axios";
const baseUrl = "http://localhost:3000";

const c1 = {
  conferenceName: "Adbhut Conference",
  startDate: "22-01-2022",
  endDate: "24-01-2022",
  guestSpeakers: ["Shree Ram", "Shree Krishna", "Shree Hanuman"],
  topics: ["jivan", "mrutyu", "gnyan"],
  description: "aa to atyant sundar confereence chhe. khub khub abhar.",
};

const user = {
  username: "Narayan",
  email: "shree_hari@gmail.com",
  password: "xyz",
  role: "attendee",
  oldConfList: [c1, c1, c1, c1, c1, c1, c1],
  newConfList: [c1, c1, c1, c1, c1, c1, c1],
  linkedIn: "https://www.linkedin.com/in/narayan-0b1b1b1b1/",
  instagram: "https://www.insta.com/narayan",
};

function UserProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentConf, setCurrentConf] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setConf = (confName) => {
    setCurrentConf(confName);
    setIsModalOpen(true);
  };

  function conftable(conf) {
    const rows = conf.map((conf, ind) => {
      const classind = "dropdown_item-1";
      return (
        <div
          onClick={() => {
            setConf(conf);
          }}
        >
          <li class={classind}>{conf.conferenceName}</li>
        </div>
      );
    });
    return <ul class="dropdown_menu dropdown_menu-2">{rows}</ul>;
  }

  const [postImage, setPostImage] = useState({ myFile: "" });
  const [image, setImage] = useState([]);

  useEffect(() => {
    getImage();
  }, []);


  function getImage() {
    // for now passed hard coded value
    fetch("http://localhost:3000/auth/user/show-pic/6446d482aa8b2ea8be3ba696", {
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setImage(data.profile_picture);
      });
    });
  }

  function uploadImage() {
    fetch("http://localhost:3000/auth/user/upload-pic/", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: "6446d482aa8b2ea8be3ba696", // for now passed hard coded value
        profile_picture: postImage.myFile,
      }),
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // Handle error
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // createPost(postImage)
    console.log("hello in handleSubmit");
    uploadImage();
    console.log("Image Uploaded Successfully");
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    console.log("hello in handleFileUpload");
    const base64 = await convertToBase64(file);
    setPostImage({ ...postImage, myFile: base64 });
  };

  return (
    <>
      <div className="box">
        <div className="profileBox">
          <form onSubmit={handleSubmit} className="profileform">
            <label htmlFor="file-upload" className="custom-file-upload">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Profile picture"
                  className="profilePhoto"
                />
              ) : (
                <img
                  src={userimage}
                  alt="Default profile picture"
                  className="profilePhoto"
                />
              )}
              
            </label>
            <input
              type="file"
              label="image"
              name="myFile"
              id="file-upload"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleFileUpload(e)}
            />
            <button type="submit" className="upload-btn">Upload</button>
          </form>
          <div className="profileUserName">{user.username}</div>
          <div className="role">{user.role}</div>
          <hr class="h_line" />
          <div className="profileEmail">
            <span className="emailIcon">
              <AiOutlineMail />
            </span>
            <a href={`mailto: ${user.email}`}>
              {user.email}
            </a>
          </div>
          <hr class="h_line" />
          <div className="profileLinks">
            <a href={user.instagram}>
              <AiOutlineInstagram />
            </a>
            <a href={user.linkedIn}>
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
        <div className="conferenceList">
          <div className="header">Registered Conferences</div>
          <div className="confTypes">
            <div class="conferenceItem dropdown dropdown-2" onclick="try">
              Past Conferences
              {conftable(user.oldConfList)}
            </div>
            <div class="conferenceItem dropdown dropdown-2" onclick="try">
              Upcoming Conferences
              {conftable(user.newConfList)}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modalWindow">
          <div className="modalBox" onClick={toggleModal}>
            <table class="tg">
              <tbody>
                <tr>
                  <td class="tg-gseg">Name</td>
                  <td class="tg-0lax">{currentConf.conferenceName}</td>
                </tr>
                <tr>
                  <td class="tg-gseg">Start date</td>
                  <td class="tg-0lax">{currentConf.startDate}</td>
                </tr>
                <tr>
                  <td class="tg-gseg">End date</td>
                  <td class="tg-0lax">{currentConf.endDate}</td>
                </tr>
                <tr>
                  <td class="tg-gseg">Guest speakers</td>
                  <td class="tg-0lax">
                    {currentConf.guestSpeakers.toString()}
                  </td>
                </tr>
                <tr>
                  <td class="tg-gseg">Topics</td>
                  <td class="tg-0lax">{currentConf.topics.toString()}</td>
                </tr>
                <tr>
                  <td class="tg-gseg">Description</td>
                  <td class="tg-0lax">{currentConf.description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

//function convertToBase64
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
export default UserProfile;
