import React from "react";
import dateTimeIcon from "../assets/date-time.png";
import bellIcon from "../assets/bell.png";

const UpcomingExams = () => {
  return (
    <section className="exams-section">
      <div className="exams-right">
        <div>
          <h3>
            Upcoming <br /> Examinations
          </h3>
          <p>Enquire about the examination & register for the exams</p>
        </div>
        <div className="exam-box">
          <div className="image-wrapper">
            <img
              src={bellIcon}
              alt="Base Icon"
              className="overlay-icon"
              width="20"
              height="20"
            />

            <img
              src={dateTimeIcon}
              alt="Date and Time Icon"
              className="base-image"
            />
          </div>

          <div>
            <p className="exam-date">02th October 2014</p>
            <p style={{ margin: "0px" }}>Level 1 exam</p>
          </div>
        </div>
        <div className="exam-box">
          <div className="image-wrapper">
            <img
              src={bellIcon}
              alt="Base Icon"
              className="overlay-icon"
              width="20"
              height="20"
            />

            <img
              src={dateTimeIcon}
              alt="Date and Time Icon"
              className="base-image"
            />
          </div>
          <div>
            <p className="exam-date">Nov-Dec 2016</p>
            <p>Level 2</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </div>
        <div className="exam-box">
          <div className="image-wrapper">
            <img
              src={bellIcon}
              alt="Base Icon"
              className="overlay-icon"
              width="20"
              height="20"
            />

            <img
              src={dateTimeIcon}
              alt="Date and Time Icon"
              className="base-image"
            />
          </div>
          <div>
            <p className="exam-date">Ongoing this year</p>
            <p>Level 3 (Grad)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingExams;
