import React from "react";
import "../assets/CSS/TimeLine.css";

const TimelineCard = ({ conference,index }) => {
  console.log(conference);
  const className = index & 1 ? "timeline-2 right-2" : "timeline-2 left-2";
  return (
    <>
      <div class={className}>
        <div class="card">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4">{conference.conferenceName}</h4>
            <p class="text-muted mb-4">{conference.startDate} - {conference.endDate}</p>


            <p class="mb-0"><b>Description: </b></p>
            <p class="mb-0">{conference.description}</p>


            {conference.topics.length && (
              <>
                <p class="mb-0"><b>Topic: </b></p>
                {conference.topics.map((topic) => {
                return <p class="mb-0">{topic}</p>;
              })}
              </>
            )}


            {conference.guestSpeakers.length && (
              <>
                <p class="mb-0"><b>Guest Speaker: </b></p>
                {conference.guestSpeakers.map((guestSpeaker) => {
                  return <p class="mb-0">speaker name</p>;
                })}
              </>
            )}
            
          </div>
        </div>
      </div>

      {/* <div className={className}>
        <div className="content shadow-lg">
          <h3>{conference.conferenceName}</h3>
          <p>
            {conference.startDate} - {conference.endDate}
          </p>
          <p>
            <b>Description:</b>
            <br />
            {conference.description}
          </p>
          {conference.topics.length && (
            <>
              <p><b>Topics</b>
              <br />
              {conference.topics.map((topic) => {
                return <span>{topic} </span>;
              })}
              </p>
            </>
          )}

          {conference.guestSpeakers.length && (
            <>
              <p><b>Guest Speakers</b>
              <br />
              {conference.guestSpeakers.map((guestSpeaker) => {
                return <span>{guestSpeaker} </span>;
              })}
              </p>
            </>
          )}
        </div>
      </div> */}



    </>
  );
};

export default TimelineCard;
