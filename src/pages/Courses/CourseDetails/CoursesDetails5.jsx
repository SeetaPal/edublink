// new

import React, { useState } from "react";
import "./CoursesDetails5.css";
import "./CoursesDetails4.css";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaUser,
  FaHeart,
  FaFolderOpen,
  FaChevronUp,
  FaChevronDown,
  FaRegFileAlt,
  FaDollarSign,
  FaRegQuestionCircle,
  FaLock,
  FaUsers,
  FaGlobe,
  FaAward,
  FaChalkboardTeacher,
  FaClock   // ✅ ADD THIS

} from "react-icons/fa";

import renderStars from "../../../components/renderStars";
import course1 from "../../../assets/images/course1.jpg";
import course2 from "../../../assets/images/course2.jpg";
import course3 from "../../../assets/images/course3.jpg";
import course4 from "../../../assets/images/course4.jpg";

const CoursesDetails5 = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenLesson, setIsOpenLesson] = useState(true);
  const [isOpenCore, setIsOpenCore] = useState(true); // ✅ ADD THIS

  const recommendedCourses = [
    {
      img: course1,
      duration: "15 Weeks",
      level: "Beginner",
      title: "Starting SEO as your Home Based Business",
      price: "$44",
      description:
        "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",
      lessons: "11 Lessons",
      students: "227 Students",
    },
    {
      img: course2,
      duration: "12 Weeks",
      level: "Expert",
      title: "Grow Personal Financial Security Thinking",
      price: "$87",
      description:
        "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",
      lessons: "9 Lessons",
      students: "567 Students",
    },
    {
      img: course3,
      duration: "15 Hours",
      level: "All Levels",
      title: "The Complete Guide to Build RESTful API",
      price: "$45",
      description:
        "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",
      lessons: "12 Lessons",
      students: "320 Students",
    },
    {
      img: course4,
      duration: "25 Hours",
      level: "Intermediate",
      title: "Competitive Strategy Law for Management",
      price: "$60",
      description:
        "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor",
      lessons: "10 Lessons",
      students: "410 Students",
    },


  ];


  return (
    <div className="CoursesDetails5-page">

      {/* BANNER */}
      <div className="CoursesDetails5-banner">
        Home <span>&gt;</span> Course <span>&gt;</span>
        <strong>Starting SEO as your Home Based Business</strong>
      </div>

      <section className="CoursesDetails5-topSection">

        {/* LEFT SIDE */}
        <div className="CoursesDetails5-leftBox">

          <div className="CoursesDetails5-descriptionBox">

            <h1 className="CoursesDetails5-title">
              Starting SEO as your Home Based Business
            </h1>

            <div className="CoursesDetails5-meta">

              <div className="CoursesDetails5-metaItem">
                <FaUser />
                <span>By <strong>Edward Norton</strong></span>
              </div>

              <span className="CoursesDetails5-divider">|</span>

              <div className="CoursesDetails5-metaItem">
                <FaFolderOpen />
                <span>Business</span>
              </div>

              <span className="CoursesDetails5-divider">|</span>

              <div className="CoursesDetails5-metaItem">
                <span className="CoursesDetails5-stars">
                  {renderStars(5)}
                </span>
                <span>(3 Reviews)</span>
              </div>

            </div>

            <h2>Course Description</h2>

            <p>
              Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt
              ut labore et dolore magna aliqua enim ad minutesim veniam, quis nostrud exerec tation ullamco
              laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.
            </p>

            <p>
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium totam rem aperiam.
            </p>

            <h2>What You’ll Learn?</h2>

            <ul className="CoursesDetails5-learnList">
              <li>Neque sodales ut etiam sit amet nisl purus</li>
              <li>Tristique nulla aliquet enim tortor at auctor</li>
              <li>Nam libero justo laoreet sit amet</li>
              <li>Tempus imperdiet nulla malesuada pellentesque</li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectur adipisicing elit, sed do eiusmod tempor inc idid unt
              ut labore et dolore magna aliqua enim ad minutesim veniam, quis nostrud exerec tation ullamco
              laboris nis aliquip commodo consequat duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur enim ipsam.
            </p>
          </div>

          {/* CURRICULUM 1 */}
          <div className="CoursesDetails5_curriculum_card">

            <div className="CoursesDetails5_curriculum_header">
              <h2>Basic Introduction</h2>

              <button
                className={`CoursesDetails5_toggle_btn ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {isOpen && (
              <div className="CoursesDetails5_curriculum_content">

                {/* 1 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Introduction To The Course
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span className="CoursesDetails5_preview">Preview</span>
                  </div>
                </div>

                {/* 2 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> A Quick Introduction to Excel’s Pivot Tables
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span className="time-badge">5 minutes</span>
                    <FaLock />
                  </div>
                </div>

                {/* 3 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Amazon RDS Hands On
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span className="time-badge">7 minutes</span>
                    <FaLock />
                  </div>
                </div>

                {/* 4 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Associative Arrays
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span className="time-badge">9 minutes</span>
                    <FaLock />
                  </div>
                </div>

                {/* 5 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegQuestionCircle /> PHP fundamental
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span className="time-badge">8 minutes</span>
                    <FaLock />
                  </div>
                </div>



              </div>
            )}
          </div>

          {/* CURRICULUM 2 */}
          <div className="CoursesDetails5_curriculum_card">

            <div className="CoursesDetails5_curriculum_header">
              <h2>Fundamental Concept of HTML</h2>

              <button
                className={`CoursesDetails5_toggle_btn ${isOpenLesson ? "active" : ""}`}
                onClick={() => setIsOpenLesson(!isOpenLesson)}
              >
                {isOpenLesson ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {isOpenLesson && (
              <div className="CoursesDetails5_curriculum_content">

                {/* 1 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> A students view on teaching
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>15 minutes</span>
                  </div>
                </div>

                {/* 2 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> A Note on Semantic HTML
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>10 minutes</span>
                  </div>
                </div>

                {/* 3 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Centering our Page
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>8 minutes</span>
                  </div>
                </div>

                {/* 4 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Class and ID Selectors
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>6 minutes</span>
                  </div>
                </div>

                {/* 5 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Code download
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>Download</span>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* CURRICULUM 3 */}
          <div className="CoursesDetails5_curriculum_card">

            <div className="CoursesDetails5_curriculum_header">
              <h2>Programminutesg Core Concept</h2>

              <button
                className={`CoursesDetails5_toggle_btn ${isOpenCore ? "active" : ""}`}
                onClick={() => setIsOpenCore(!isOpenCore)}
              >
                {isOpenCore ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>

            {isOpenCore && (
              <div className="CoursesDetails5_curriculum_content">

                {/* 1 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Combining Selectors
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>5 minutes</span>
                  </div>
                </div>

                {/* 2 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Comparison and Logical Operators
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>7 minutes</span>
                  </div>
                </div>

                {/* 3 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Cookie Authentication API for Jira requests
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>7 minutes</span>
                  </div>
                </div>

                {/* 4 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Clearing Floats
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>5 minutes</span>
                  </div>
                </div>

                {/* 5 */}
                <div className="CoursesDetails5_curriculum_row">
                  <div className="CoursesDetails5_curriculum_left">
                    <span>
                      <FaRegFileAlt /> Pseudo-elements
                    </span>
                  </div>
                  <div className="CoursesDetails5_curriculum_right">
                    <span>5 minutes</span>
                  </div>
                </div>

              </div>
            )}
          </div>

          {/* ✅ REVIEWS - ADD HERE (INSIDE LEFT BOX) */}
          <div className="CoursesDetails5_reviews_section">
            <div className="CoursesDetails5_review_item">
              <div className="CoursesDetails5_review_left">
                <img
                  src={require("../../../assets/images/team-02.webp")}
                  alt="User"
                />
              </div>

              {/* <div className="CoursesDetails5_review_right">

        <h3>Edward Norton</h3>
        <span>Design Expert</span>

        <p>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt 
          labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ulla mco 
          laboris nisi ut aliquip ex ea commodo consequat.
           duis aute irure dolor in reprehenderit in voluptate.
        </p>

      </div> */}

              <div className="CoursesDetails5_review_right">

                <h3>Edward Norton</h3>
                <span>Design Expert</span>

                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                  labore et dolore magna aliqua enim minim veniam quis nostrud exercitation...
                </p>

                {/* SOCIAL ICONS - RIGHT SIDE BELOW PARAGRAPH */}
                <div className="CoursesDetails5_review_social">
                  <FaFacebookF />
                  <FaLinkedinIn />
                  <FaTwitter />
                </div>

              </div>

            </div>



          </div>

          {/* =========================
      RATING SECTION
  ========================= */}

          <div className="CoursesDetails5_rating_section">

            {/* LEFT CARD */}
            <div className="CoursesDetails5_rating_left_card">

              <h2>4.0</h2>

              <div className="CoursesDetails5_stars">
                <span>★ ★ ★ ★</span>
                <span className="CoursesDetails5_white_star">★</span>
              </div>

              <p>2 Ratings</p>
            </div>

            {/* RIGHT */}
            <div className="CoursesDetails5_rating_right">

              <div className="CoursesDetails5_rating_row">
                <span>5 ★</span>
                <div className="CoursesDetails5_bar">
                  <div className="CoursesDetails5_fill w-60"></div>
                </div>
                <span>1</span>
              </div>

              <div className="CoursesDetails5_rating_row">
                <span>4 ★</span>
                <div className="CoursesDetails5_bar">
                  <div className="CoursesDetails5_fill w-0"></div>
                </div>
                <span>0</span>
              </div>

              <div className="CoursesDetails5_rating_row">
                <span>3 ★</span>
                <div className="CoursesDetails5_bar">
                  <div className="CoursesDetails5_fill w-60"></div>
                </div>
                <span>1</span>
              </div>

              <div className="CoursesDetails5_rating_row">
                <span>2 ★</span>
                <div className="CoursesDetails5_bar">
                  <div className="CoursesDetails5_fill w-0"></div>
                </div>
                <span>0</span>
              </div>

              <div className="CoursesDetails5_rating_row">
                <span>1 ★</span>
                <div className="CoursesDetails5_bar">
                  <div className="CoursesDetails5_fill w-0"></div>
                </div>
                <span>0</span>
              </div>

            </div>

          </div>


   {/* =========================
      REVIEWS SECTION (NEW UNIQUE)
========================= */}

          <div className="cd5_reviews_wrap">

            <h1 className="cd5_reviews_title">
              Reviews
            </h1>

            <div className="cd5_review_card">

              {/* IMAGE */}
              <div className="cd5_review_avatar">
                <img
                  src={require("../../../assets/images/team-02.webp")}
                  alt="User"
                />
              </div>

              {/* CONTENT */}
              <div className="cd5_review_content">

                <div className="cd5_review_stars">
                  ★ ★ ★ ★ ★
                </div>

                <h3 className="cd5_review_name">
                  Steve Martin</h3>

                <h4 className="cd5_review_role">Excellent Course</h4>

                <p className="cd5_review_text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="CoursesDetails5-rightBox">
          <div className="CoursesDetails5-card">
            {/* VIDEO */}
            <div className="CoursesDetails5-video">
              <iframe
                src="https://www.youtube.com/embed/Ke90Tje7VS0"
                title="video"
                allowFullScreen
              />
            </div>

            {/* COURSE DETAILS */}
            <h3 className="CoursesDetails5-cardTitle">Course Includes:</h3>

            <div className="CoursesDetails5-infoRow">
              <span><FaDollarSign /> Price:</span>
              <span>$30</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaChalkboardTeacher /> Instructor:</span>
              <span>Edward Norton</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaClock /> Duration:</span>
              <span>15 weeks</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaRegFileAlt /> Lessons:</span>
              <span>11</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaUsers /> Students:</span>
              <span>227</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaGlobe /> Language:</span>
              <span>English</span>
            </div>

            <div className="CoursesDetails5-infoRow">
              <span><FaAward /> Certifications:</span>
              <span>Yes</span>
            </div>

            {/* BUTTON */}
            <button className="CoursesDetails5-buyBtn">
              Buy Now
            </button>

            {/* SHARE */}
            <div className="CoursesDetails5-share">
              <span>Share On:</span>
              <div className="CoursesDetails5-icons">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================
    COURSES YOU MAY LIKE
========================= */}

<div className="coursesDetails4_section">

  <h1 className="coursesDetails4_sectionTitle">
    Courses You May Like
  </h1>

  <div className="coursesDetails4_grid">

    {recommendedCourses.map((course, index) => (

      <div
        className="coursesDetails4_card_course"
        key={index}
      >

        <div className="coursesDetails4_imageWrapper">

          <img
            src={course.img}
            alt="course"
          />

          <div className="coursesDetails4_timeBadge">
            🕒 {course.duration}
          </div>

          <div
            className="coursesDetails4_heart"
            onClick={() =>
              alert("You need to Login first.")
            }
          >
            <FaHeart />
          </div>

        </div>

        <span className="coursesDetails4_level">
          {course.level}
        </span>

        <h3>{course.title}</h3>

        <p className="coursesDetails4_rating">
          {renderStars(4)} (4.0 / 3 Ratings)
        </p>

        <p className="coursesDetails4_price">
          {course.price}
        </p>

        <p className="coursesDetails4_desc">
          {course.description}
        </p>

        <p className="coursesDetails4_meta">
          📘 {course.lessons} | 👨‍🎓{" "}
          {course.students}
        </p>

        <button className="coursesDetails4_btn">
          Enroll Now →
        </button>

      </div>

    ))}

  </div>

</div>

    </div>
  );
};

export default CoursesDetails5;