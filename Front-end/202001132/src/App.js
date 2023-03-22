
import { useState } from 'react';
import './App.css';
import imgg from './imgg.png';


function App() {
    
  const myBox = (title, text) => (
    <div className="myBox">
      <div className="boxTitle">
        {title}
      </div>
      <div className="boxText">
        {text}
      </div>
    </div>
  )

  const myLink = (title) => (
    <div className="myLink">
      {title}
    </div>
  )
  
  return (
    <div className="App">

      <div className="headerImageTitle">
        My FIRE Site
      </div>
        <img className="headerImage" src={imgg} />
      <div className="content">
        <div className="leftSection">
          <div className="linkContainer">
            {myLink("Home")}
            {myLink("Call For Papers")}
            {myLink("Tutorials")}
            {myLink("Lecture Series")}
            {myLink("Schedule")}
            {myLink("Registration")}
            {myLink("Travel Grant")}
            {myLink("Organization")}
            {myLink("Accomodation")}
            {myLink("Contact Us")}
            {myLink("Accepted Papers")}
          </div>
          <div className="horizontalLine"/>
          <div className="linkContainer">
            {myLink("Archieves")}
            {myLink("Data")}
            {myLink("Resources")}
            {myLink("Past Proceedings")}
            {myLink("FIRE")}
          </div>
        </div>
        <div className="middleSection">
          {myBox("Welcome", "This is the text inside the box")}
          <div className="horizontalLine" />
          {myBox("Welcome", "This is the text inside the box")}
        </div>
        <div className="rightSection">

        </div>
      </div>
    </div>
  );
}

export default App;
