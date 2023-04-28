// import logo from './logo.svg';
import "../assets/CSS/UserProfile.css";
import { useEffect, useState } from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import userimage from "../../public/images/DAIICT.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const c1 = {
  conferenceName: "Adbhut Conference",
  startDate: "22-01-2022",
  endDate: "24-01-2022",
  guestSpeakers: ["Shree Ram", "Shree Krishna", "Shree Hanuman"],
  topics: ["jivan", "mrutyu", "gnyan"],
  description: "aa to atyant sundar confereence chhe. khub khub abhar.",
};

// const user = {
//   username: "Narayan",
//   email: "shree_hari@gmail.com",
//   password: "xyz",
//   role: "attendee",
//   oldConfList: [c1, c1, c1, c1, c1, c1, c1],
//   newConfList: [c1, c1, c1, c1, c1, c1, c1],
//   linkedIn: "https://www.linkedin.com/in/narayan-0b1b1b1b1/",
//   instagram: "https://www.insta.com/narayan",
// };

function UserProfile() {
  const { user } = useAuthContext();
  let url = "";
  const [userData] = useState(user.user);
  const [allConferences, setAllConferences] = useState([]);
  const [pastConferences, setPastConferences] = useState([]);
  const [upcomoingConferences, setUpcomingConferences] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentConf, setCurrentConf] = useState("");

  useEffect(() => {
    document.title = `${user.user.username}'s Profile`;
    fetch("http://localhost:3000/org/all")
      .then((res) => res.json())
      .then((data) => {
        setAllConferences(data.conferences);
      });

    setPastConferences(
      allConferences
        .filter((conference) => new Date(conference.endDate) < new Date())
        .sort((a, b) => new Date(b.endDate) - new Date(a.endDate))
    );

    setUpcomingConferences(
      allConferences
        .filter((conference) => new Date(conference.startDate) >= new Date())
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    );
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const setConf = (confName) => {
    setCurrentConf(confName);
    setIsModalOpen(true);
  };

  // const [postImage, setPostImage] = useState({ myFile: "" });
  // const [image, setImage] = useState([]);

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

  // function getImage() {
  //   // for now passed hard coded value
  //   fetch("http://localhost:3000/auth/user/show-pic/6446d482aa8b2ea8be3ba696", {
  //     method: "GET",
  //   }).then((res) => {
  //     res.json().then((data) => {
  //       console.log(data);
  //       setImage(data.profile_picture);
  //     });
  //   });
  // }

  // function uploadImage() {
  //   fetch("http://localhost:3000/upload", {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: "6446d482aa8b2ea8be3ba696", // for now passed hard coded value
  //       profile_picture: postImage.myFile,
  //     }),
  //   })
  //     .then((response) => {
  //       // console.log(response);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //     });
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // createPost(postImage)
  //   console.log("hello in handleSubmit");
  //   uploadImage();
  //   console.log("Image Uploaded Successfully");
  // };

  // const handleFileUpload = async (e) => {
  //   const file = e.target.files[0];
  //   console.log("hello in handleFileUpload");
  //   const base64 = await convertToBase64(file);
  //   setPostImage({ ...postImage, myFile: base64 });
  // };

  return (
    <>
      <Navbar />
      <div className="userProfileContainer">
        <div className="box">
          <div className="profileBox py-5">
          <div className="d-flex justify-content-center">
              <FontAwesomeIcon
                className="my-2 border border-3 text-light rounded-circle p-5"
                style={{ fontSize: "8em" }}
                icon={faUser}
              />
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="profileUserName p-2  rounded">
                {userData.username}
              </div>
              <hr class="h_line" />
              <div className="profileEmail">
                <span className="emailIcon">
                  <AiOutlineMail />
                </span>
                <Link href={`mailto: ${userData.email}`}>
                  {userData.email}
                </Link>
              </div>
              <hr class="h_line" />
              <div className="profileLinks">
                <Link href={userData.instagram}>
                  <AiOutlineInstagram />
                </Link>
                <Link href={userData.linkedIn}>
                  <AiOutlineLinkedin />
                </Link>
              </div>
            </div>
          </div>
          <div className="conferenceList">
            <div className="header">Registered Conferences</div>
            <div className="confTypes">
              <div class="conferenceItem shadow-lg rounded dropdown dropdown-2" onclick="try">
                Past Conferences
                {conftable(pastConferences)}
              </div>
              <div class="conferenceItem shadow-lg rounded dropdown dropdown-2" onclick="try">
                Upcoming Conferences
                {conftable(upcomoingConferences)}
              </div>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div className="modalWindow">
            <div className="modalBox" onClick={toggleModal}>
              <table class="tg">
                <tbody
                  style={{
                    textAlign: "left",
                    fontSize: "1.2rem",
                    color: "black",
                    fontWeight: "bold",
                    padding: "1rem",
                  }}
                  >
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
      </div>
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
