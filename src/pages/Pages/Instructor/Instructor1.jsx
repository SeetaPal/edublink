

import React from "react";
import "./Instructor1.css";

// 🔥 Local images import
import inst1 from "../../../assets/images/team-01.webp";
import inst2 from "../../../assets/images/team-02.webp";
import inst3 from "../../../assets/images/team-03.webp";
import inst4 from "../../../assets/images/team-04.webp";
import inst5 from "../../../assets/images/team-05.webp";
import inst6 from "../../../assets/images/team-06.jpg";

function Instructor1() {
  const instructors = [
    { img: inst1 },
    { img: inst2 },
    { img: inst3 },
    { img: inst4 },
    { img: inst5 },
    { img: inst6 },
  ];

  return (
    <div className="instructor-page">

      {/* 🔷 Banner */}
        <section className="banner">

        <div className="bannerContent">
          <h1>Instructor 1</h1>

          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">
              Instructor</span>
            
          </p>
        </div>
      </section>

      {/* 🔷 Heading */}
      <div className="instructor-heading1">
        <h2>INSTRUCTORS</h2>
          <p className="heading-underline">Course Instructors</p>
      </div>

      {/* 🔷 Cards */}
      <div className="instructor-grid">

        {instructors.map((item, index) => (
          <div className="instructor1-card" key={index}>

  <div className="img-wrapper">
    <img src={item.img} alt="instructor" />

    <div className="instructor-overlay">
      <div className="instructor-social-icons">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  </div>

            <h3>Edward Norton</h3>

            <span>UI Designer</span>

            <p>
              Consectetur adipisicing elit, sed do eius mod tempor incididunt
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Instructor1;