
import React from "react";
import "./Home.css";
import homegirl from "../../assets/images/homegirl-1.webp";
import instructorImg from "../../assets/images/author-1-1-1.png";
import aboutImg  from "../../assets/images/homeabout-01.webp";

import { FaBook, FaChalkboardTeacher, FaCertificate, FaUsers } from "react-icons/fa";
import {
  FaBriefcase,
  FaPaintBrush,
  FaUserGraduate,
  FaHeartbeat,
  FaDatabase,
  FaBullhorn,
  FaMoneyBill,
  FaLaptopCode,
  FaChartLine
} from "react-icons/fa";

import { FaAward, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="hero-section container">

        {/* LEFT */}
        <div className="hero-left">

          <h1>
            Get <span>2500+</span>
          </h1>

          <h2>Best Online Courses From EduBlink</h2>

          <p>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
          </p>

          <button className="find-btn">Find Course</button>

        </div>

        {/* RIGHT */}
        <div className="hero-right">

          <div className="image-wrapper">

            <img src={homegirl} alt="home girl" />

            {/* FLOATING CARD */}
            <div className="floating-card">

              <img src={instructorImg} alt="instructor" />

              <div>
                <h4>Instructor</h4>
                <p>200+ Instructors</p>
              </div>

            </div>

          </div>
        </div>

      </div>


      {/* STATS BAR */}
      <div className="stats-bar">

        <div className="stat-item">
          <FaBook className="stat-icon" />
          <div className="stat-text">
            <h3>3020</h3>
            <p>Online Courses</p>
          </div>
        </div>

        <div className="stat-item">
          <FaChalkboardTeacher className="stat-icon" />
          <div className="stat-text">
            <h3>Top</h3>
            <p>Instructors</p>
          </div>
        </div>

        <div className="stat-item">
          <FaCertificate className="stat-icon" />
          <div className="stat-text">
            <h3>Online</h3>
            <p>Certifications</p>
          </div>
        </div>

        <div className="stat-item">
          <FaUsers className="stat-icon" />
          <div className="stat-text">
            <h3>6,000</h3>
            <p>Membership</p>
          </div>
        </div>

      </div>


      {/* TOP CATEGORIES SECTION */}
      <div className="categories-section container">

        <h2>Top Categories</h2>

        <p className="cat-subtitle">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore
        </p>

        <div className="categories-grid">

          <div className="cat-item c1"><FaBriefcase /> Business Management</div>
          <div className="cat-item c2"><FaPaintBrush /> Arts & Design</div>
          <div className="cat-item c3"><FaUserGraduate /> Personal Development</div>

          <div className="cat-item c4"><FaHeartbeat /> Health & Fitness</div>
          <div className="cat-item c5"><FaDatabase /> Data Science</div>
          <div className="cat-item c6"><FaBullhorn /> Marketing</div>

          <div className="cat-item c7"><FaMoneyBill /> Business & Finance</div>
          <div className="cat-item c8"><FaLaptopCode /> Computer Science</div>
          <div className="cat-item c9"><FaChartLine /> Analytics</div>

        </div>

      </div>

      {/* ABOUT SECTION */}
     {/* ABOUT SECTION */}
<div className="about-section container">

  <div className="about-media">

    <img
  src={aboutImg}
  alt="about"
  className="about-img"
/>

    {/* VIDEO TOP OVERLAY */}
   <div className="about-video-overlay">
  <video
    src="https://www.w3schools.com/html/mov_bbb.mp4"
    controls
    muted
  />
</div>

    {/* AWARD CARD */}
  <div className="award-overlay-card">

  <div className="award-left">
    <FaAward className="award-icon" />
  </div>

  <div className="award-text">
    <h3>29+</h3>
    <p>Wonderful Awards</p>
  </div>

  <div className="hover-arrows">
    <FaArrowUp />
    <FaArrowDown />
  </div>

</div>

  </div>

  <div className="about-right">
    <h2>Learn & Grow Your Skills From Anywhere</h2>

    <p>
      Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex
      tempor incididunt labore dolore magna aliqua enim minim veniam quis
      nostrud exercitation ullamco laboris.
    </p>

    <div className="about-features">
      <p>✔ Expert Trainers</p>
      <p>✔ Online Remote Learning</p>
      <p>✔ Lifetime Access</p>
    </div>
  </div>

</div>

    </div>
  );
};

export default Home;