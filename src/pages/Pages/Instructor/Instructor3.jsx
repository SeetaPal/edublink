
import React from "react";
import "./Instructor3.css";

import inst1 from "../../../assets/images/team-01.webp";
import inst2 from "../../../assets/images/team-02.webp";
import inst3 from "../../../assets/images/team-03.webp";
import inst4 from "../../../assets/images/team-04.webp";
import inst5 from "../../../assets/images/team-05.webp";
import inst6 from "../../../assets/images/team-06.jpg";

function Instructor3() {
  const instructors = [
    { img: inst1, name: "Jane Seymour", role: "UI Designer" },
    { img: inst2, name: "John Smith", role: "Web Developer" },
    { img: inst3, name: "Emma Watson", role: "UX Designer" },
    { img: inst4, name: "Chris Evans", role: "Frontend Dev" },
    { img: inst5, name: "Scarlett Johansson", role: "Backend Dev" },
    { img: inst6, name: "Robert Downey", role: "Full Stack Dev" },
  ];

  return (
    <div className="Instructor3-page">

        {/* 🔷 Banner */}
        <section className="banner">

        <div className="bannerContent">
          <h1>Instructor 3</h1>
          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">
              Instructor 3</span>
            
          </p>
        </div>
      </section>

     {/* 🔷 Heading */}
      <div className="instructor-heading3">
        <h2>INSTRUCTORS</h2>
          <p className="heading-underline">Course Instructors</p>
      </div>


      {/* 🔷 Grid */}
      <div className="Instructor3-grid">

        {instructors.map((item, index) => (
          <div className="Instructor3-item" key={index}>

            <div className="Instructor3-img-wrapper">
              <img src={item.img} alt={item.name} />

              {/* 🔥 TEXT ON IMAGE */}
              <div className="Instructor3-text-box">
                <h1>{item.name}</h1>
                <span>{item.role}</span>
              </div>

              {/* 🔥 Overlay */}
              <div className="Instructor3-overlay">
                <div className="Instructor3-social-icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Instructor3;