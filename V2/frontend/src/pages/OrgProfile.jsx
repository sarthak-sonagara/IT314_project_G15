// import logo from './logo.svg';
import "../assets/CSS/OrgProfile.css";
import { useState } from 'react';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import orgimage from "../../public/images/DAIICT.png";
// var cn = require('classNames');

const c1 = {
  conferenceName: "Adbhut Conference",
  startDate: "22-01-2022",
  endDate: "24-01-2022",
  guestSpeakers: ["Shree Ram", "Shree Krishna", "Shree Hanuman"],
  topics: ["jivan", "mrutyu", "gnyan"],
  description: "aa to atyant sundar confereence chhe. khub khub abhar."
}

const org = {
  orgname: "Narayan",
  email: "shree_hari@gmail.com",
  password: "xyz",
  oldConfList: [c1, c1, c1, c1, c1, c1, c1],
  newConfList: [c1, c1, c1, c1, c1, c1, c1],
  linkedIn: "https://www.linkedin.com/in/narayan-0b1b1b1b1/",
  instagram: "https://www.insta.com/narayan"
}


function OrgProfile() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentConf, setCurrentConf] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const setConf = (confName) => {
    setCurrentConf(confName);
    setIsModalOpen(true);
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

  function conftable(conf) {
    const rows = conf.map((conf, ind) => {
      const classind = "org_dropdown_item-1";
      return (
        <li onClick={() => { setConf(conf); }} class={(classind)} >{conf.conferenceName}</li>
      )
    });
    return (
      <ul class="org_dropdown_menu org_dropdown_menu-2" style={{
        position: "absolute",
        top: "100%",
        left: "0",
        zIndex: "1000",
        float: "left",
        minWidth: "160px",
        padding: "5px 0",
        margin: "2px 0 0",
        fontSize: "14px",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#fff",
        WebkitBackgroundClip: "padding-box",
        backgroundClip: "padding-box",
        border: "1px solid #ccc",
        borderRadius: "4px",
        WebkitBoxShadow: "0 6px 12px rgba(0,0,0,.175)",
        boxShadow: "0 6px 12px rgba(0,0,0,.175)",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
        WebkitFontSmoothing: "antialiased",
        textShadow: "1px 1px 1px rgba(0,0,0,0.004)",
        color: "#333",
        WebkitTransition: "all 0.2s ease-in-out",
        transition: "all 0.2s ease-in-out",
        cursor: "pointer"

      }}>
        {rows}
      </ul>
    )
  }

  return (
    <div className="userProfileContainer">
    <div className="UserProfileBodyCtn">
      <div className="org_box">
        <div className="org_profileBox">
        <form onSubmit={handleSubmit} className="profileform">
            <label htmlFor="file-upload" className="custom-file-upload">
              {image ? (
                <img
                  src={image}
                  alt="Uploaded Profile picture"
                  className="org_profilePhoto"
                />
              ) : (
                <img
                  src={userimage}
                  alt="Default profile picture"
                  className="org_profilePhoto"
                />
              )}
              
            </label>
            <span>
            <input
              className="choose-file"
              type="file"
              label="image"
              name="myFile"
              id="file-upload"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleFileUpload(e)}
            />
            <button type="submit" className="upload-btn">Upload</button>
            </span>
          </form>
          <div className="profileOrgName">{org.orgname}</div>
          <div className='org_role'>organization</div>
          <hr class="org_h_line" />
          <div className="org_profileEmail">
            <span className='org_emailIcon'><AiOutlineMail /></span>
            <a href={`mailto: ${org.email}`}>
              {org.email}
            </a>
          </div>
          <hr class="org_h_line" />
          <div className="org_profileLinks">
            <a href={org.instagram}><AiOutlineInstagram /></a>
            <a href={org.linkedIn}><AiOutlineLinkedin /></a>
          </div>
        </div>
        <div className="org_conferenceList">
          <div className="org_header">Organized Conferences</div>
          <div className="org_confTypes">
            <div class="org_conferenceItem org_dropdown org_dropdown-2" onclick="try">
              Past Conferences
              {conftable(org.oldConfList)}
            </div>
            <div class="org_conferenceItem org_dropdown org_dropdown-2" onclick="try">
              Upcoming Conferences
              {conftable(org.newConfList)}
            </div>
          </div>
        </div>
      </div>
      {
        isModalOpen && <div className="org_modalWindow">
          <div className="org_modalBox" onClick={toggleModal}>
            <table class="tg">
              <tbody style={{
                textAlign: "left",
                fontSize: "1.2rem",
                color: "black",
                fontWeight: "bold",
                padding: "1rem"
              }}>
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
                  <td class="tg-0lax">{currentConf.guestSpeakers.toString()}</td>
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
      }
    </div>
    </div>
  );
}

export default OrgProfile;
