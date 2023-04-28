import React from "react";
import "../assets/CSS/timeline.css";

const TimelineCard = ({ conference, index }) => {
  const rootClass = index & 1 ? "timeline-2 right-2" : "timeline-2 left-2";
  const cardClass = index & 1 ? "card-left" : "card-right";
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  return (
    <>
      <div class={rootClass}>
        <div class={cardClass + " card"}>
          <div class="card-body p-3">
            <h4 class="fw-bold mb-2 bg-info p-2 rounded text-light bg-dark">
              {conference.conferenceName}
            </h4>
            <hr />
            <p class="text-muted mb-2">
              {formatDate(conference.startDate)} -{" "}
              {formatDate(conference.endDate)}
            </p>
            <p class="mb-0">
              <b>Description: </b>
            </p>
            <p class="mb-0">{conference.description}</p>

            {conference.topics.length && (
              <>
                <p class="mb-0">
                  <b>Topics: </b>
                </p>
                {conference.topics.map((topic) => {
                  return (
                    <span class="point mb-0 px-2 py-1 mx-1 rounded text-dark">
                      {topic}
                    </span>
                  );
                })}
              </>
            )}

            {conference.guestSpeakers.length && (
              <>
                <p class="mb-0">
                  <b>Guest Speakers: </b>
                </p>
                {conference.guestSpeakers.map((guestSpeaker) => {
                  return (
                    <span class="point mb-0 px-2 py-1  mx-1 rounded text-dark">
                      {guestSpeaker}
                    </span>
                  );
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
