import React from "react";
import "../assets/CSS/TimeLine.css";

const TimelineCard = ({ conference, index }) => {
  const className = index & 1 ? "timeline-2 right-2" : "timeline-2 left-2";
  return (
    <>
      <div class={className}>
        <div class="card">
          <div class="card-body p-4">
            <h4 class="fw-bold mb-4">{conference.conferenceName}</h4>
            <hr />
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
                  return <p class="mb-0">{guestSpeaker}</p>;
                })}
              </>
            )}
          </div>
        </div>
      </div>

    </>
  );
};

export default TimelineCard;
