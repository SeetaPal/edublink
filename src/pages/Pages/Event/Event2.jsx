import React from "react";
import "./Event2.css";
// import {FaMapMarkerAlt,FaPhoneAlt, FaDollarSign, FaUsers, FaUserCheck } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaDollarSign, FaUsers, FaUserCheck, FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import eventBannerImg from "../../../assets/images/Event2.jpg";
import event1Img from "../../../assets/images/team-01.webp";
import event2Img from "../../../assets/images/team-02.webp";
import event3Img from "../../../assets/images/team-03.webp";
import event4Img from "../../../assets/images/team-04.webp";

const speakers = [
  {
    img: event1Img,
    name: "John Doe",
    role: "Senior Instructor",
  },
  {
    img: event2Img,
    name: "Sarah Smith",
    role: "UI/UX Designer",
  },
  {
    img: event3Img,
    name: "Michael Lee",
    role: "Developer",
  },
  {
    img: event4Img,
    name: "Emma Watson",
    role: "Marketing Head",
  },
];

const Event2 = () => {
  return (
    <div className="Event2-classname">

      {/* Banner */}
      <div className="Event2-banner">
        <div className="Event2-content">
          <h1 className="Event2-title">
            Creative Teaching Seminar Master Class
          </h1>
          <p className="Event2-breadcrumb">
            Home <span>&gt;</span> Event <span>&gt;</span> Creative Teaching Seminar Master Class
          </p>


        </div>
      </div>

      {/* Image */}
      <div className="Event2-imageWrapper">
        <div className="Event2-imageSection">
          <img src={eventBannerImg} alt="Event" />
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className="Event2-details">

        {/* LEFT SIDE */}
        <div className="Event2-left">
          <h2>About The Event</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip commodo consequat.
          </p>

          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ul>
            <li>Aute irure dolor in reprehenderit</li>
            <li>Occaecat cupidatat non proident sunt in culpa</li>
            <li>Pariatur enim ipsam</li>
          </ul>

          <h3>Event Location</h3>

          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          {/* Location + Phone */}
          <div className="Event2-locationBox">
            <div className="loc-item">
              <FaMapMarkerAlt className="icon" />
              <span>Newyork City, USA</span>
            </div>

            <span className="divider">|</span>

            <div className="loc-item">
              <FaPhoneAlt className="icon" />
              <span>012 (345) 6789</span>
            </div>
          </div>

          {/* MAP */}
          <div className="Event2-map">
            <iframe
              src="https://www.google.com/maps?q=Melbourne+VIC+Australia&output=embed"
              title="Melbourne Map"
              loading="lazy"
            ></iframe>
          </div>

        </div>




        {/* RIGHT SIDE */}
        <div className="Event2-right">

          <div className="Event2-infoCard">
            <h3>Event Info</h3>

            <div className="info-row">
              <span className="info-left">
                <FaDollarSign className="info-icon" />
                Cost:
              </span>
              <b>$59.00</b>
            </div>

            <div className="info-row">
              <span className="info-left">
                <FaUsers className="info-icon" />
                Total Slot:
              </span>
              <b>2750</b>
            </div>

            <div className="info-row">
              <span className="info-left">
                <FaUserCheck className="info-icon" />
                Booked Slot:
              </span>
              <b>0</b>
            </div>



            <button className="book-btn">Book Now</button>
            <small>You must login before register event.</small>

            {/* COUNTDOWN */}
            <div className="Event2-countdown">
              {["Days", "Hours", "Min", "Sec"].map((label, i) => (
                <div className="circle" key={i}>
                  <span>12</span>
                  <small>{label}</small>
                </div>
              ))}
            </div>

          </div>

        </div>


      </div>
      {/* SPEAKERS */}

     <div className="Event2-speakers">

  <h1 className="speaker-title">Event Speakers</h1>

  <div className="speaker-grid">

    {speakers.map((speaker, i) => (
      <div className="speaker-card" key={i}>

        {/* IMAGE */}
        <div className="speaker-img">
          <img src={speaker.img} alt={speaker.name} />

          {/* SOCIAL ICONS */}
          <div className="social-icons">

            {/* SHARE BUTTON */}
            <div className="share-btn">
              <FaShareAlt />
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>

          </div>
        </div>

        {/* CONTENT */}
        <h2>{speaker.name}</h2>
        <p>{speaker.role}</p>

      </div>
    ))}

  </div>

</div>
    </div>
  );
};

export default Event2;