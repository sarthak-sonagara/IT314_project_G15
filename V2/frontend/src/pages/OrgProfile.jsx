// import logo from './logo.svg';
import "../assets/CSS/OrgProfile.css";
import {useState} from 'react';
import {AiOutlineMail,AiOutlineInstagram,AiOutlineLinkedin} from 'react-icons/ai';
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
  oldConfList: [c1,c1,c1,c1,c1,c1,c1],
  newConfList: [c1,c1,c1,c1,c1,c1,c1],
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

function conftable(conf){
  const rows = conf.map((conf,ind) => {
    const classind = "org_dropdown_item-1";
    return (
      <li onClick={() => {setConf(conf);}} class={(classind)} >{conf.conferenceName}</li>
    )
  });
  return (
    <ul class="org_dropdown_menu org_dropdown_menu-2">
      {rows}
    </ul>
  )
}

  return (
    <>
    <div className="org_box">
      <div className="org_profileBox">
        <img src={orgimage} alt="Image of user" className="org_profilePhoto"/>
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
        </>
  );
}

export default OrgProfile;
