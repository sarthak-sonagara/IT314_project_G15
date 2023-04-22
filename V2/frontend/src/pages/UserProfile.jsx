// import logo from './logo.svg';
import "../assets/CSS/UserProfile.css";
import {useState} from 'react';
import {AiOutlineMail,AiOutlineInstagram,AiOutlineLinkedin} from 'react-icons/ai';
// var cn = require('classNames');

const c1 = {
  conferenceName: "Adbhut Conference",
  startDate: "22-01-2022",
  endDate: "24-01-2022",
  guestSpeakers: ["Shree Ram", "Shree Krishna", "Shree Hanuman"],
  topics: ["jivan", "mrutyu", "gnyan"],
  description: "aa to atyant sundar confereence chhe. khub khub abhar."
}

const user = {
  userimage: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1213718422%2Fvector%2Flord-rama-with-his-wife-sita-and-brother-laxman-illustration.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D7HK6sk_ipDvWCOyKPpQe7oy3f-BnUWyeitPP_SjgfrA%3D&tbnid=oUoffvSVfBY3tM&vet=12ahUKEwjBjtLkqr3-AhVSynMBHe-hBw8QMygJegUIARDfAQ..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fillustrations%2Fvishnu&docid=iRRJg9Ta3QjIRM&w=612&h=459&q=shree%20vishnu%20simple%20abstract&ved=2ahUKEwjBjtLkqr3-AhVSynMBHe-hBw8QMygJegUIARDfAQ",
  username: "Narayan",
  email: "shree_hari@gmail.com",
  password: "xyz",
  role: "attendee",
  oldConfList: [c1,c1,c1,c1,c1,c1,c1],
  newConfList: [c1,c1,c1,c1,c1,c1,c1],
  linkedIn: "https://www.linkedin.com/in/narayan-0b1b1b1b1/",
  instagram: "https://www.insta.com/narayan"
}


function UserProfile() {

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
    const classind = "dropdown_item-1";
    return (
      <div onClick={() => {setConf(conf);}}><li class={(classind)} >{conf.conferenceName}</li></div>
    )
  });
  return (
    <ul class="dropdown_menu dropdown_menu-2">
      {rows}
    </ul>
  )
}

  return (
    <div className="UserProfileBodyCtn">
    <div className="box">
      <div className="profileBox">
        <img src={user.userimage} alt="Image of user" className="profilePhoto"/>
        <div className="profileUserName">{user.username}</div>
        <div className='role'>{user.role}</div>
        <hr class="h_line" />
        <div className="profileEmail">
          <span className='emailIcon'><AiOutlineMail /></span>
          <a href={`mailto: ${user.email}`}>
            {user.email}  
                                  {/* TODO: hasdjhsad */}
                                  {/*dfdf  */}
          </a>
        </div>
        <hr class="h_line" />
        <div className="profileLinks">
          <a href={user.instagram}><AiOutlineInstagram /></a> 
          <a href={user.linkedIn}><AiOutlineLinkedin /></a>   
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
        { 
          isModalOpen && <div className="modalWindow">
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

  );
}

export default UserProfile;
