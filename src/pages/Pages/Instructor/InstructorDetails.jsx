import React from "react";
import "./InstructorDetails.css";
import { FaShareAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaHeart } from "react-icons/fa";
import renderStars from "../../../components/renderStars";

import instructorImg from "../../../assets/images/team-06.jpg";
import course1 from "../../../assets/images/course1.jpg";
import course2 from "../../../assets/images/course2.jpg";
import course3 from "../../../assets/images/course3.jpg";
import course4 from "../../../assets/images/course4.jpg";
import course5 from "../../../assets/images/course1.jpg";
import course6 from "../../../assets/images/course2.jpg";
import course7 from "../../../assets/images/course3.jpg";
import course8 from "../../../assets/images/course4.jpg";



const InstructorDetails = () => {
  const courses = [
    {
      img: course1,
      duration: "15 Weeks",
      level: "Beginner",
      title: "Starting SEO as your Home Based Business",
      ratingValue: 5,
      price: "$44",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "11 Lessons",
      students: "227 Students",
    },
    {
      img: course2,
      duration: "12 Weeks",

      level: "Expert",
      title: "Grow Personal Financial Security Thinking",
      ratingValue: 5,
      price: "$87",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "9 Lessons",
      students: "567 Students",
    },
    {
      img: course3,
      duration: "15 Hours",
      level: "All Levels",
      title: "The Complete Guide to Build RESTful API",
      ratingValue: 4,
      price: "$45",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "12 Lessons",
      students: "320 Students",
    },
    {
      img: course4,
      duration: "25 Hours",
      level: "Intermediate",
      title: "Competitive Strategy Law for Management",
      ratingValue: 3,
      price: "$60",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "10 Lessons",
      students: "410 Students",
    },
    {
      img: course5,
      duration: "30 Hours",

      level: "Beginner",
      title: "Machine Learning A-Z: Hands-On Python",
      ratingValue: 4,
      price: "$99",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "15 Lessons",
      students: "800 Students",
    },
    {
      img: course6,
      duration: "15 Hours",

      level: "All",
      title: "Learning How To Write As A Professional Author",
      ratingValue: 4,
      price: "$35",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "8 Lessons",
      students: "150 Students",
    },
    {
      img: course7,
      duration: "11 Weeks",

      level: "Intermediate",
      title: "Educating Through Christ to Learn And to Serve",
      ratingValue: 4,
      price: "$70",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",

      lessons: "14 Lessons",
      students: "500 Students",
    },
    {
      img: course8,
      duration: "25 Hours",

      level: "All Levels",
      title: "Web Development Masterclass & Projects",
      ratingValue: 4,
      price: "$120",
      description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",
      lessons: "20 Lessons",
      students: "1000 Students",
    },
  ];

  return (
    <div className="instructorDetails-page">
    
       {/* 🔷Banner */}
        <section className="banner">

        <div className="bannerContent">
          <h1>Instructor Details </h1>
          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">
              Instructor Details</span>
            
          </p>
        </div>
      </section>


      {/* Instructor Section */}
      <div className="instructorDetails-main">

        {/* Left Side */}
        <div className="instructorDetails-left">

          <img src={instructorImg} alt="Instructor" />

          {/* Social Icons */}
          <div className="instructorDetails-socialIcons">
            <i className="fas fa-share-alt"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>


        </div>

        {/* Right Side */}
        <div className="instructorDetails-right">

          <p className="role">INSTRUCTOR</p>

          <h1>Edward Narton</h1>

          <p className="subtitle">Developer and Teacher</p>

         <p className="stats">
  <i className="fas fa-user-graduate"></i> 20 Students
  {" | "}
  {renderStars(5)} (720 Ratings)
</p>

          <h2>About Me</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur elit sed do eius mod tempor incidid labore dolore magna aliqua.
            enim ad minim eniam quis nostrud exercitation ullamco laboris nisi aliquip ex commodo consequat.
            duis aute irure dolor in repreed ut perspiciatis unde omnis iste natus error sit voluptat em
            acus antium.
          </p>

          <p>
            doloremque laudantium totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi arch
            itecto beatae vitae dicta sunt explicabo.
          </p>

          {/* Contact */}
          <div className="instructorDetails-contact">
            <h2>Contact Me</h2>
            <p>
              <b>Address:</b> <span>North Helenavile, FV77 8WS</span>
            </p>
            <p>
              <b>Email:</b> <span>info@edublink.com</span>
            </p>
            <p>
              <b>Phone:</b> <span>+01 1235641</span>
            </p>
          </div>
        </div>
      </div>



      {/* Courses Section */}

      <div className="coursesDetail-section">

        <h1 className="coursesDetail-title">My Popular Courses</h1>

        <div className="coursesDetail-grid">
          {courses.map((course, index) => (
            <div className="coursesDetail-card" key={index}>


              <div className="coursesDetail-course-image-wrapper">
                <img src={course.img} alt="course" />

                <div className="coursesDetail-course-time-badge">
                  <span className="coursesDetail-clock">🕒</span>
                  <span>{course.duration}</span>
                </div>

                <div
                  className="coursesDetail-heart"
                  onClick={() => alert("You need to Login first.")}
                >
                  <FaHeart />
                </div>

              </div>

              <span className="coursesDetail-level">
                {course.level}
              </span>

              <h3>{course.title}</h3>

              <p className="coursesDetail-rating">
                {renderStars(4)} (4.0 / 3 Ratings)
              </p>
              <p className="coursesDetail-price">{course.price}</p>
              <p className="coursesDetail-desc">
                {course.description}
              </p>


              <p className="coursesDetail-meta">
                📘 {course.lessons} | 👨‍🎓 {course.students}
              </p>

              <button className="coursesDetail-enrollBtn">
                Enroll Now →
              </button>

            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default InstructorDetails;