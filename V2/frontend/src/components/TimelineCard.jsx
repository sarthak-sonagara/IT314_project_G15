import React from "react";
import "../assets/CSS/timeline.css";

const TimelineCard = ({ conference, index }) => {
  const className = index & 1 ? "timeline-2 right-2" : "timeline-2 left-2";
  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  return (
    <>
      <div class={className}>
        <div class="card">
          <div class="card-body p-">
            <h4 class="fw-bold mb-2 bg-info p-2 rounded text-light">
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
                  <b>Topic: </b>
                </p>
                {conference.topics.map((topic) => {
                  return (
                    <span class="mb-0 px-2 py-1 bg-primary mx-1 rounded text-light">
                      {topic}
                    </span>
                  );
                })}
              </>
            )}

            {conference.guestSpeakers.length && (
              <>
                <p class="mb-0">
                  <b>Guest Speaker: </b>
                </p>
                {conference.guestSpeakers.map((guestSpeaker) => {
                  return (
                    <span class="mb-0 px-2 py-1 bg-primary mx-1 rounded text-light">
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
