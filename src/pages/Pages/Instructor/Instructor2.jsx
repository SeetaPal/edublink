import React from "react";
import "./Instructor2.css";

// 🔥 Local images
import inst1 from "../../../assets/images/team-01.webp";
import inst2 from "../../../assets/images/team-02.webp";
import inst3 from "../../../assets/images/team-03.webp";
import inst4 from "../../../assets/images/team-04.webp";
import inst5 from "../../../assets/images/team-05.webp";
import inst6 from "../../../assets/images/team-06.jpg";
import inst7 from "../../../assets/images/team-07.webp";
import inst8 from "../../../assets/images/team-08.webp";

function Instructor2() {
  const instructors = [
    { img: inst1, name: "Jane Seymour" },
    { img: inst2, name: "Edward Norton" },
    { img: inst3, name: "Penelope Cruz" },
    { img: inst4, name: "John Travolta" },
    { img: inst5, name: "Hilary Swank" },
    { img: inst6, name: "Michael Douglas" },
    { img: inst7, name: "Penelope Cruz" },
    { img: inst8, name: "John Travolta" },
  ];

  return (



    <div className="instructor2-page">
      
        {/* 🔷 Banner */}
        <section className="banner">

        <div className="bannerContent">
          <h1>Instructor 2</h1>
          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">
              Instructor 2</span>
            
          </p>
        </div>
      </section>


    
 {/* 🔷 Heading */}
      <div className="instructor-heading2">
        <h2>INSTRUCTORS</h2>
          <p className="heading-underline">Course Instructors</p>
      </div>

      {/* images */}

      <div className="instructor2-grid">
        {instructors.map((item, index) => (
          <div className="instructor2-item" key={index}>

            {/* 🔷 Image */}
            <div className="instructor2-img-box">
              <img src={item.img} alt="instructor" />

              {/* 🔥 Share Icons */}
              <div className="instructor2-share">
                <i className="fas fa-share-alt"></i>

                <div className="instructor2-share-icons">
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>

            {/* 🔷 Text */}
            <h1>{item.name}</h1>
            <p className="role">UI Designer</p>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Instructor2;