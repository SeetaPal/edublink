import React, { useEffect, useState } from "react";
import "./ZoomMeeting.css";
import meetingBanner from "../../../assets/images/zoommetting.png";

export default function ZoomMeetingDetails() {

  const targetDate = new Date("Dec 24, 2027 08:15:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });

    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 🔥 BANNER */}
      <section className="banner">
        <div className="bannerContent">
          <h1>Developing Your Communication</h1>

          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="home">Zoom Events</span>
            <span className="sep"> &gt; </span>
            <span className="active">Developing Your Communication</span>
          </p>
        </div>
      </section>

      <section className="zoom-wrapper">

        {/* LEFT SIDE */}
        <div className="zoom-left">

          <img
            src={meetingBanner}
            alt="Zoom Meeting"
            className="meeting-banner"
          />

          <h2>Developing Your Communication</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor inc idid unt ut labore et dolore 
            magna aliqua enim ad minim veniam, quis nostrud exerec 
            tation ullamco laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur enim ipsam.
          </p>

          <p>
         Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit 
         voluptatem accusantium doloremque laudantium totam rem aperiam.          </p>

        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="zoom-sidebar">

          {/* COUNTDOWN */}
          <div className="countdown-wrap">

            <div className="count-item">
              <div className="time-box">
                <h3>{timeLeft.days}</h3>
              </div>
              <span>Days</span>
            </div>

            <div className="count-item">
              <div className="time-box">
                <h3>{timeLeft.hours}</h3>
              </div>
              <span>Hours</span>
            </div>

            <div className="count-item">
              <div className="time-box">
                <h3>{timeLeft.minutes}</h3>
              </div>
              <span>Minutes</span>
            </div>

            <div className="count-item">
              <div className="time-box">
                <h3>{timeLeft.seconds}</h3>
              </div>
              <span>Seconds</span>
            </div>

          </div>

          {/* DETAILS */}
          <div className="details-box">

            <h3>Details</h3>

            <div className="detail-row">
              <strong>Topic:</strong>
              <span>Developing Your Communication</span>
            </div>

            <div className="detail-row">
              <strong>Hosted By:</strong>
              <span>Hilary Swank</span>
            </div>

            <div className="detail-row">
              <strong>Start:</strong>
              <span>Dec 24, 2027 8:15 AM</span>
            </div>

            <div className="detail-row">
              <strong>Duration:</strong>
              <span>1 hour 15 minutes</span>
            </div>

            <div className="detail-row">
              <strong>Timezone:</strong>
              <span>Asia/Calcutta</span>
            </div>

            <p className="note">
  <strong>Note:</strong> 
  <span> Countdown time is shown based on your local timezone.</span>
</p>

            <a href="/" className="zoom-btn">Join Meeting via Zoom App</a>
            <a href="/" className="web-btn">Join via Web Browser</a>

          </div>

        </aside>

      </section>
    </>
  );
}