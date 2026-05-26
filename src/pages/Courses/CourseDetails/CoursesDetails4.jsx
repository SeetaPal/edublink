// CoursesDetails4.jsx

import React, { useState } from "react";
import "./CoursesDetails4.css";
import instructorImg from "../../../assets/images/team-02.webp";
import renderStars from "../../../components/renderStars";


import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaHeart,
  FaUser,
  FaFolderOpen,
  FaChevronUp,
  FaChevronDown,
  FaRegFileAlt,
  FaRegQuestionCircle,
  FaClock, FaUserGraduate
} from "react-icons/fa";


import bannerImg from "../../../assets/images/blog6.jpg";
import course1 from "../../../assets/images/course1.jpg";
import course2 from "../../../assets/images/course2.jpg";
import course3 from "../../../assets/images/course3.jpg";
import course4 from "../../../assets/images/course4.jpg";

const CoursesDetails4 = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // ===== STATE =====

  const [isOpen, setIsOpen] = useState(true);
  const [isOpenLesson, setIsOpenLesson] = useState(true);
  const [isOpenLesson3, setIsOpenLesson3] = useState(true);

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
    <>
      {/* ===== BANNER ===== */}

      <div className="coursesDetails4_banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="coursesDetails4_overlay">
          <div className="coursesDetails4_content">

            <h1 className="coursesDetails4_title">
              Starting SEO as your <strong>Home</strong> Based{" "}
              <strong>Business</strong>
            </h1>

            <div className="coursesDetails4_breadcrumb">
              <span>Home</span>

              <span className="coursesDetails4_arrow">{">"}</span>

              <span>Course</span>

              <span className="coursesDetails4_arrow">{">"}</span>

              <span className="active">
                Starting SEO as your Home Based Business
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* ===== NEW COURSE DETAILS SECTION ===== */}

      <div className="coursesDetails4_main_section">

        {/* LEFT SIDE */}
        <div className="coursesDetails4_left">

          <h2 className="coursesDetails4_course_title">
            Starting SEO as your Home Based Business
          </h2>

          <div className="coursesDetails4_info_row">

            <span>
              By <strong>Edward Norton</strong>
            </span>

            <span className="dot">|</span>

            <span>Business</span>

            <span className="dot">|</span>

            <span className="coursesDetails4_reviews">
              ★★★★★ <span>(3 Reviews)</span>
            </span>

          </div>

          {/* VIDEO */}
          <div className="coursesDetails4_video_wrapper">

            <iframe
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Course Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>

          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="coursesDetails4_right">

          <div className="coursesDetails4_card">

            <h3 className="coursesDetails4_card_title">
              Course Includes:
            </h3>

            <div className="coursesDetails4_card_item">
              <span>Price:</span>
              <strong>$30</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Instructor:</span>
              <strong>Edward Norton</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Duration:</span>
              <strong>15 weeks</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Lessons:</span>
              <strong>11</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Students:</span>
              <strong>227</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Language:</span>
              <strong>English</strong>
            </div>

            <div className="coursesDetails4_card_item">
              <span>Certifications:</span>
              <strong>Yes</strong>
            </div>

            <button className="coursesDetails4_buy_btn">
              Buy Now
            </button>

            <div className="coursesDetails4_share">

              <span>Share On:</span>

              <div className="coursesDetails4_socials">

                <i className="fab fa-facebook-f"></i>

                <i className="fab fa-twitter"></i>

                <i className="fab fa-linkedin-in"></i>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* // ===== STATE =====*/}

      <div className="coursesDetails4_tabs_section">

        {/* TAB BUTTONS */}

        <div className="coursesDetails4_tabs_header">

          <button
            className={activeTab === "overview" ? "active" : ""}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>

          <button
            className={activeTab === "curriculum" ? "active" : ""}
            onClick={() => setActiveTab("curriculum")}
          >
            Curriculum
          </button>

          <button
            className={activeTab === "instructor" ? "active" : ""}
            onClick={() => setActiveTab("instructor")}
          >
            Instructor
          </button>

          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>

        </div>

        {/* ===== OVERVIEW ===== */}

        {activeTab === "overview" && (

          <div className="coursesDetails4_tab_content">

            <h2 className="coursesDetails4_heading">
              Course Description
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectur adipisicing elit,
              sed do eiusmod tempor inc idid unt ut labore et dolore
              magna aliqua enim ad minim veniam, quis nostrud exerec
              tation ullamco laboris nis aliquip commodo consequat
              duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur enim
              ipsam.
            </p>

            <p>
              Excepteur sint occaecat cupidatat non proident sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium totam rem
              aperiam.
            </p>

            <h2 className="coursesDetails4_heading">
              What You’ll Learn?
            </h2>

            <div className="coursesDetails4_learn_list">

              <div className="coursesDetails4_learn_item">
                <span>✔</span>
                <p>
                  Neque sodales ut etiam sit amet nisl purus non tellus
                  orci ac auctor
                </p>
              </div>

              <div className="coursesDetails4_learn_item">
                <span>✔</span>
                <p>
                  Tristique nulla aliquet enim tortor at auctor urna.
                  Sit amet aliquam id diam maer
                </p>
              </div>

              <div className="coursesDetails4_learn_item">
                <span>✔</span>
                <p>
                  Nam libero justo laoreet sit amet. Lacus sed viverra
                  tellus in hac
                </p>
              </div>

              <div className="coursesDetails4_learn_item">
                <span>✔</span>
                <p>
                  Tempus imperdiet nulla malesuada pellentesque elit
                  eget gravida cum sociis
                </p>
              </div>

            </div>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Quis ipsum suspendisse ultrices gravida.
              Risus commodo viverra maecenas accumsan lacus vel
              facilisis.
            </p>

          </div>
        )}

        {/* ===== CURRICULUM ===== */}

        {/* {activeTab === "curriculum" && (

    <div className="coursesDetails4_tab_content">

      <div className="coursesDetails4_curriculum_item">
        Basic Introduction
      </div>

      <div className="coursesDetails4_curriculum_item">
        Fundamental Concept of HTML
      </div>

      <div className="coursesDetails4_curriculum_item">
        Programming Core Concept
      </div>

    </div>
  )} */}

        {/* ===== CURRICULUM ===== */}

        {activeTab === "curriculum" && (

          <div className="coursesDetails4_tab_content">

            {/* =========================
        COURSE CURRICULUM 1
    ========================= */}

            <div className="coursesDetails4_curriculum_card">

              <div className="coursesDetails4_curriculum_header">

                <h2>Basic Introduction</h2>

                <button
                  className="coursesDetails4_toggle_btn"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

              </div>

              {isOpen && (

                <div className="coursesDetails4_curriculum_content">

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Brush up on Java concepts
                      </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span className="coursesDetails4_preview">
                        Preview
                      </span>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        A Quick Introduction to Excel’s Pivot Tables              </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>7 minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Amazon RDS Hands On          </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>7 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Associative Arrays          </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>3 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegQuestionCircle className="coursesDetails4_q_icon" />
                        PHP fundamental            </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span className="coursesDetails4_question_box">
                        2 Question
                      </span>

                      {/* <span className="coursesDetails4_time_box">
                        4 Minutes
                      </span> */}


                      <i className="fas fa-lock"></i>

                    </div>

                  </div>

                </div>
              )}

            </div>

            {/* =========================
        COURSE CURRICULUM 2
    ========================= */}

            <div className="coursesDetails4_curriculum_card">

              <div className="coursesDetails4_curriculum_header">

                <h2>Fundamental Concept of HTML.</h2>

                <button
                  className="coursesDetails4_toggle_btn"
                  onClick={() => setIsOpenLesson(!isOpenLesson)}
                >
                  {isOpenLesson ? <FaChevronUp /> : <FaChevronDown />}
                </button>

              </div>

              {isOpenLesson && (

                <div className="coursesDetails4_curriculum_content">

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        A Note on Semantic HTML                      </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>3 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Centering our Page
                      </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>3 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Class and ID Selectors
                      </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>3 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">
                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />
                        Code download
                      </span>
                    </div>

                    <div className="coursesDetails4_curriculum_right">
                      <span>3 Minutes</span>
                      <i className="fas fa-lock"></i>
                    </div>

                  </div>

                </div>
              )}

            </div>

 {/* =========================
        COURSE CURRICULUM 3
========================= */}

            <div className="coursesDetails4_curriculum_card">

              <div className="coursesDetails4_curriculum_header">

                <h2>Programming Core Concept</h2>

                <button
                  type="button"
                  className="coursesDetails4_toggle_btn"
                  onClick={() => setIsOpenLesson3(!isOpenLesson3)}
                >
                  {isOpenLesson3 ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

              </div>

              {isOpenLesson3 && (

                <div className="coursesDetails4_curriculum_content">

                  {/* ROW 1 */}

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">

                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />

                        Combining Selectors
                      </span>

                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span>5 Minutes</span>

                      <i className="fas fa-lock"></i>

                    </div>

                  </div>

                  {/* ROW 2 */}

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">

                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />

                        Comparison and Logical Operators
                      </span>

                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span>7 Minutes</span>

                      <i className="fas fa-lock"></i>

                    </div>

                  </div>

                  {/* ROW 3 */}

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">

                      <span>
                        <FaRegFileAlt className="coursesDetails4_doc_icon" />

                        Cookie Authentication API for Jira Requests
                      </span>

                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span>7 Minutes</span>

                      <i className="fas fa-lock"></i>

                    </div>

                  </div>

                  {/* ROW 4 */}

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">

                      <span>
                        <FaRegQuestionCircle className="coursesDetails4_q_icon" />

                        Clearing Floats
                      </span>

                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span className="coursesDetails4_question_box">
                        2 Question
                      </span>

                      <span className="coursesDetails4_time_box">
                        5 Minutes
                      </span>

                      <i className="fas fa-lock"></i>

                    </div>

                  </div>

                  {/* ROW 5 */}

                  <div className="coursesDetails4_curriculum_row">

                    <div className="coursesDetails4_curriculum_left">

                      <span>
                        <FaRegQuestionCircle className="coursesDetails4_q_icon" />

                        Pseudo-elements          </span>

                    </div>

                    <div className="coursesDetails4_curriculum_right">

                      <span className="coursesDetails4_question_box">
                        2 Question
                      </span>

                      <span className="coursesDetails4_time_box">
                        5 Minutes
                      </span>

                      <i className="fas fa-lock"></i>

                    </div>

                  </div>
                </div>

              )}

            </div>

          </div>
        )}

        {/* ===== INSTRUCTOR ===== */}

        {activeTab === "instructor" && (

          <div className="coursesDetails4_tab_content">

            <div className="coursesDetails4_instructor_box">

              <img
                src={instructorImg}
                alt="Instructor"
              />

              <div className="coursesDetails4_instructor_info">

                <h3>Edward Norton</h3>

                <span>Design Expert</span>

                <p>
                  Consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt labore et dolore magna aliqua enim minim
                  veniam quis nostrud exercitation ulla mco laboris
                  nisi ut aliquip ex ea commodo consequat. duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>

                <div className="coursesDetails4_instructor_socials">

                  <i>
                    <FaFacebookF />
                  </i>

                  <i>
                    <FaTwitter />
                  </i>

                  <i>
                    <FaLinkedinIn />
                  </i>

                </div>

              </div>

            </div>

          </div>
        )}

        {/* ===== REVIEWS ===== */}

        {activeTab === "reviews" && (

          <div className="coursesDetails4_tab_content">

            {/* =========================
        RATING SECTION
    ========================= */}

            <div className="coursesDetails4_rating_section">

              {/* LEFT CARD */}

              <div className="coursesDetails4_rating_left_card">

                <h2>4.0</h2>

                <div className="coursesDetails4_stars">
                  <span>★ ★ ★ ★</span>

                  <span className="coursesDetails4_white_star">
                    ★
                  </span>
                </div>

                <p>2 Ratings</p>

              </div>

              {/* RIGHT */}

              <div className="coursesDetails4_rating_right">

                <div className="coursesDetails4_rating_row">

                  <span>5 ★</span>

                  <div className="coursesDetails4_bar">
                    <div className="coursesDetails4_fill coursesDetails4_w_60"></div>
                  </div>

                  <span>1</span>

                </div>

                <div className="coursesDetails4_rating_row">

                  <span>4 ★</span>

                  <div className="coursesDetails4_bar">
                    <div className="coursesDetails4_fill coursesDetails4_w_0"></div>
                  </div>

                  <span>0</span>

                </div>

                <div className="coursesDetails4_rating_row">

                  <span>3 ★</span>

                  <div className="coursesDetails4_bar">
                    <div className="coursesDetails4_fill coursesDetails4_w_60"></div>
                  </div>

                  <span>1</span>

                </div>

                <div className="coursesDetails4_rating_row">

                  <span>2 ★</span>

                  <div className="coursesDetails4_bar">
                    <div className="coursesDetails4_fill coursesDetails4_w_0"></div>
                  </div>

                  <span>0</span>

                </div>

                <div className="coursesDetails4_rating_row">

                  <span>1 ★</span>

                  <div className="coursesDetails4_bar">
                    <div className="coursesDetails4_fill coursesDetails4_w_0"></div>
                  </div>

                  <span>0</span>

                </div>

              </div>

            </div>

            {/* =========================
        REVIEWS SECTION
    ========================= */}

            <div className="coursesDetails4_reviews_section">

              <h2 className="coursesDetails4_reviews_title">
                Reviews
              </h2>

              {/* REVIEW ITEM */}

              <div className="coursesDetails4_review_item">

                <div className="coursesDetails4_review_left">

                  <img
                    src={instructorImg}
                    alt="review-user"
                  />

                </div>

                <div className="coursesDetails4_review_right">

                  <div className="coursesDetails4_review_stars">
                    ★ ★ ★ ★ ★
                  </div>

                  <h3>John Doe</h3>

                  <h4>Web Designer</h4>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, accusamus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit.
                  </p>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>


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

    </>
  );
};

export default CoursesDetails4;