import React from "react";
import "../assets/CSS/TimeLine.css";

const TimelineCard = ({ conference, index }) => {
  const className = index & 1 ? "card-container right" : "card-container left";
  return (
    <>
      <div className={className}>
        <div className="content shadow-lg">
          <h2>{conference.conferenceName}</h2>
          <h4>
            {conference.startDate} - {conference.endDate}
          </h4>
          <p>
            Guest Speaker: Lorem, ipsum dolor.
            <br />
            Topic: Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad
            <br />
            {conference.description}
          </p>
          {conference.topics.length && (
            <>
              <h4>Topics</h4>
              {conference.topics.map((topic) => {
                return <span>{topic} </span>;
              })}
            </>
          )}

          {conference.guestSpeakers.length && (
            <>
              <h4>Guest Speakers</h4>
              {conference.guestSpeakers.map((guestSpeaker) => {
                return <span>{guestSpeaker} </span>;
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default TimelineCard;
