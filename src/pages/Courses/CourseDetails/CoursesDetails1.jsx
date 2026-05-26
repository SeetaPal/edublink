import React, { useState } from "react";
import "./CoursesDetails1.css";
import { FaUser, FaTag, FaStar } from "react-icons/fa";


const CoursesDetails1 = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openIndex, setOpenIndex] = useState(null);

  const curriculum = [
    {
      title: "Introduction",
      lessons: [
        {
          name: "What the course will be about",
          duration: "10 minutes",
        },
        {
          name: "A little bit about me",
          duration: "10 minutes",
        },
        {
          name: "How to reach additional resources",
          duration: "12 minutes",
        },
        {
          name: "How to find information and ask questions",
          duration: "15 minutes",
        },
      ],
    },
    {
      title: "Disrupt Yourself",
      lessons: [
        {
          name: "Change the business model – Introduction",
          duration: "18 minutes",
        },
        {
          name: "M&A potential competitors – Introduction",
          duration: "21 minutes",
        },
        {
          name: "Copy competitors that may disrupt you – Lufthansa",
          duration: "23 minutes",
        },
        {
          name: "Intrapreneurship – Introduction",
          duration: "8 minutes",
        },
      ],
    },
  ];

  const courses = [
    {
      title: "Deploy Java Spring Apps Online",
      image: "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
      duration: "14 Hours",
      rating: 4.0,
      price: "$30",
      lessons: 7,
      students: 381
    },
    {
      title: "React Development Masterclass",
      image: "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
      duration: "10 Hours",
      rating: 4.0,
      price: "$35",
      lessons: 12,
      students: 220
    },
    {
      title: "Node.js Backend Bootcamp",
      image: "https://demo.edublink.co/wp-content/uploads/2023/03/course-11-590x430.jpg",
      duration: "18 Hours",
      rating: 4.0,
      price: "S29",
      lessons: 15,
      students: 510
    },
     
  ];

  return (
    <>
      {/* 🔵 HEADER */}
      <div className="edublink-course-page-header">

        <div className="eb-course-header-breadcrumb">
          <div className="edublink-container">
            <nav className="edublink-breadcrumb">
              <ul className="breadcrumb">
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Course</a></li>
                <li>
                  <span className="active">
                    Competitive Strategy Law for Management Consultants
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="eb-course-header-breadcrumb-content">
          <div className="edublink-container">
            <div className="edublink-course-breadcrumb-inner">

              <h1 className="entry-title">
                Competitive Strategy Law for
                <br />
                Management Consultants
              </h1>

              <ul className="eb-course-header-meta-items">

                <li>
                  <FaUser /> By Hilary Swank
                </li>

                <li>
                  <FaTag /> Business
                </li>

                <li>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < 3 ? "filled" : "empty"} />
                    ))}
                  </div>
                  <span>(2 Reviews)</span>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>

      {/* 🔵 DETAILS SECTION */}
      <div className="course-details-container">
        <div className="row">

          {/* LEFT */}
          <div className="col-lg-8">
            <div className="course-tabs">

              <ul className="course-nav-tabs">
                <li
                  className={activeTab === "overview" ? "active" : ""}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </li>

                <li
                  className={activeTab === "curriculum" ? "active" : ""}
                  onClick={() => setActiveTab("curriculum")}
                >
                  Curriculum
                </li>

                <li
                  className={activeTab === "instructor" ? "active" : ""}
                  onClick={() => setActiveTab("instructor")}
                >
                  Instructor
                </li>

                <li
                  className={activeTab === "reviews" ? "active" : ""}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </li>
              </ul>

              <div className="tab-content">

                {activeTab === "overview" && (
                  <div className="course-overview">

                    <h4>Course Description</h4>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
                      accumsan lacus vel facilisis.
                    </p>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                      et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
                    </p>

                    {/* 🔥 WHAT YOU'LL LEARN */}
                    <h4>What You’ll Learn From This Course</h4>

                    <ul className="course-learn-list">
                      <li>Neque sodales ut etiam sit amet nisl purus non tellus orci ac auctor</li>
                      <li>Tristique nulla aliquet enim tortor at auctor urna. Sit amet aliquam id diam</li>
                      <li>Nam libero justo laoreet sit amet. Lacus sed viverra tellus in hac</li>
                      <li>Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis</li>
                    </ul>

                    {/* 🔥 CERTIFICATION */}
                    <h4>Certification</h4>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                      dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                      lacus vel facilisis.
                    </p>

                  </div>
                )}

                {activeTab === "curriculum" && (
                  <div className="curriculum-wrapper">

                    <h4>Curriculum</h4>

                    {curriculum.map((section, index) => (
                      <div key={index} className="curriculum-card">

                        {/* 🔵 HEADER (CLICK TO TOGGLE) */}
                        <div
                          className="curriculum-header"
                          onClick={() =>
                            setOpenIndex(openIndex === index ? null : index)
                          }
                        >
                          <h5>{section.title}</h5>

                          <span className="icon">
                            {openIndex === index ? "⌃" : "⌄"}
                          </span>
                        </div>

                        {/* 🔵 BODY */}
                        {openIndex === index && (
                          <div className="curriculum-body">

                            {section.lessons.map((lesson, i) => (
                              <div key={i} className="lesson-row">

                                <span>{lesson.name}</span>

                                <span className="time">{lesson.duration}</span>

                              </div>
                            ))}

                          </div>
                        )}

                      </div>
                    ))}

                  </div>
                )}

                {activeTab === "instructor" && (
                  <div className="instructor-box">

                    <div className="instructor-inner">

                      {/* 🔵 LEFT IMAGE */}
                      <div className="instructor-img">
                        <img
                          src="https://demo.edublink.co/wp-content/uploads/2023/07/team-12.webp"
                          alt="instructor"
                        />
                      </div>

                      {/* 🔵 RIGHT CONTENT */}
                      <div className="instructor-info">

                        <h4>Hilary Swank</h4>

                        <span className="role">Digital Marketer</span>

                        <p>
                          Consectetur adipisicing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua enim
                          minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate.
                        </p>

                      </div>

                    </div>

                  </div>
                )}

                {activeTab === "reviews" && (
                  <div className="reviews-wrapper">

                    {/* ⭐ TOP RATING SECTION */}
                    <div className="rating-box">

                      {/* LEFT CARD */}
                      <div className="rating-left-card">
                        <h2>3.2</h2>
                        <div className="stars">⭐⭐⭐☆☆</div>
                        <p>2 Ratings</p>
                      </div>

                      {/* RIGHT DISTRIBUTION */}
                      <div className="rating-right-bar">
                        <ul>
                          <li>
                            5 ⭐ <div className="bar"><span style={{ width: "0%" }}></span></div> 0
                          </li>
                          <li>
                            4 ⭐ <div className="bar"><span style={{ width: "50%" }}></span></div> 1
                          </li>
                          <li>
                            3 ⭐ <div className="bar"><span style={{ width: "50%" }}></span></div> 1
                          </li>
                          <li>
                            2 ⭐ <div className="bar"><span style={{ width: "0%" }}></span></div> 0
                          </li>
                          <li>
                            1 ⭐ <div className="bar"><span style={{ width: "0%" }}></span></div> 0
                          </li>
                        </ul>
                      </div>

                    </div>

                    {/* ⭐ REVIEWS TITLE */}
                    <h1 className="review-title">Reviews</h1>

                    {/* 👤 SINGLE REVIEW */}
                    <div className="review-card">

                      {/* LEFT IMAGE */}
                      <img
                        className="review-avatar"
                        src="https://i.pravatar.cc/80?img=12"
                        alt="user"
                      />

                      {/* RIGHT CONTENT */}
                      <div className="review-content">

                        {/* STARS */}
                        <div className="review-stars">⭐⭐⭐⭐⭐</div>

                        {/* NAME */}
                        <h4>Edward Norton</h4>

                        {/* TITLE */}
                        <h5>Outstanding Course with great support</h5>

                        {/* TEXT */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                      </div>

                    </div>

                  </div>
                )}

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="course-sidebar">
              <div className="course-video">
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/m2m5Xx5T4No"
                  title="Course Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="sidebar-content">
                <h4>Course Includes:</h4>
                <ul>
                  <li><span>Price</span> $75</li>
                  <li><span>Instructor:</span>$Hilary Swank</li>
                  <li><span>Duration:</span> 25 hours</li>
                  <li><span>Lessons:</span> 7</li>
                  <li><span>Students:</span> 362</li>
                  <li><span>Language:</span>English</li>
                  <li><span>Certifications</span>Yes</li>
                </ul>
                <button className="buy-btn">Buy Now</button>
                {/* 🔥 SHARE SECTION */}
                <div className="share-box">
                  <h5>Share On:</h5>

                  <div className="share-icons">
                    <a href="#" className="fb">Facebook</a>
                    <a href="#" className="tw">Twitter</a>
                    <a href="#" className="ig">Instagram</a>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* course-card */}
          <div className="course-card-wrapper">

            {courses.map((course, index) => (
              <div className="course-card" key={index}>

                <div className="thumb">
                  <img src={course.image} alt="" />
                  <span className="duration">⏱ {course.duration}</span>
                </div>

                <div className="course-content">
                  <button className="level-btn">Beginner</button>
                  <h3 className="title">{course.title}</h3>
                  <div className="rating-box">
  <div className="stars">
    {[1,2,3,4,5].map((_, i) => (
      <span
        key={i}
        className={`star ${i < Math.floor(course.rating) ? "active-star" : ""}`}
      >
        ★
      </span>
    ))}
  </div>

  <span className="rating-text">
    ({course.rating} / Rating)
  </span>
</div>
                  <div className="price">{course.price}</div>
                  {/* <div className="meta">
                    <span>📚 {course.lessons} Lessons</span>
                    <span>👨‍🎓 {course.students} Students</span>
                  </div> */}

                  <div className="meta">
  <span>📚 {course.lessons} Lessons</span>
  <span className="divider">|</span>
  <span>👨‍🎓 {course.students} Students</span>
</div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesDetails1;