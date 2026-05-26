



import React, { useState } from "react";
import {
  FaChevronUp,
  FaChevronDown,
  FaRegFileAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";

import "./CoursesDetails2.css";
import { FaClock, FaUserGraduate } from "react-icons/fa";

import course1 from "../../../assets/images/team-02.webp";
import course2 from "../../../assets/images/team-05.webp";
import course3 from "../../../assets/images/team-05.webp";
import course4 from "../../../assets/images/team-08.webp";


const CoursesDetails2 = () => {
  const [isOpen, setIsOpen] = useState(true);

    const [isOpenLesson, setIsOpenLesson] = useState(true);

  const recommendedCourses = [
    {
      id: 1,
      image: course1,
      duration: "12 Weeks",
      level: "Expert",
      title: "Grow Personal Financial Security Thinking",
      rating: "★★★★★",
      ratingText: "(5.0/2 Rating)",
      price: "$49",
      desc:
        "Learn advanced financial planning, budgeting and investment strategies for long-term growth.",

      lessons: "8 Lessons",
      students: "150 Students",
    },

    {
      id: 2,
      image: course2,
      duration: "10 Weeks",
      level: "Intermediate",
      title: "Master Complete React Development Course",
      rating: "★★★★",
      ratingText: "(4.0/2 Rating)",
      price: "$59",
      desc: "Build powerful React applications with hooks, routing, API integration and modern UI concepts.",

      lessons: "12 Lessons",
      students: "230 Students",
    },

    {
      id: 3,
      image: course3,
      duration: "40 Hours",
      level: "Beginner",
      title: "UI UX Design Fundamentals For Beginners",
      rating: "★★★",
      ratingText: "(3.0/2 Rating)",
      desc:
        "Master design systems, typography, colors, wireframes and user-centered design principles.",

      price: "$39",
      lessons: "10 Lessons",
      students: "180 Students",
    },

    {
      id: 4,
      image: course4,
      duration: "15 Weeks",
      level: "Advanced",
      title: "Node JS Complete Backend Bootcamp Course",
      rating: "★★★★★",
      ratingText: "(5.0/5 Rating)",
      price: "$89",
      desc: "Create scalable backend APIs using Node.js, Express, MongoDB, authentication and deployment.",

      lessons: "18 Lessons",
      students: "400 Students",
    },
  ];

  return (
    <div className="CoursesDetails2_className">

      {/* =========================
          BANNER
      ========================= */}

      <section className="coursesDetails2_banner">
        <div className="coursesDetails2_container">

          <div className="coursesDetails2_banner_content">

            <p className="coursesDetails2_breadcrumb">
              Home &gt; Course &gt; Web Development Masterclass &
              Certifications
            </p>

            <h1 className="coursesDetails2_title">
              Web Development Masterclass <br />
              & Certifications
            </h1>

            <div className="coursesDetails2_meta">
              <span>By Steve Martin</span>
              <span>|</span>
              <span>Programming</span>
              <span>|</span>
              <span>★★★★★ (2 Reviews)</span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================
          MAIN SECTION
      ========================= */}

      <section className="coursesDetails2_main coursesDetails2_container">

        {/* LEFT SIDE */}

        <div className="coursesDetails2_left">

          <div className="coursesDetails2_content_box">

            <h2>Course Description</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <h2>What You’ll Learn From This Course</h2>

            <ul className="coursesDetails2_learn_list">

              <li>
                Neque sodales ut etiam sit amet nisl purus non tellus orci ac
                auctor
              </li>

              <li>
                Tristique nulla aliquet enim tortor at auctor urna. Sit amet
                aliquam id diam maer
              </li>

              <li>
                Nam libero justo laoreet sit amet. Lacus sed viverra tellus in
                hac
              </li>

              <li>
                Tempus imperdiet nulla malesuada pellentesque elit eget gravida
                cum sociis
              </li>

            </ul>

            <h2>Certification</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

          </div>

          {/* =========================
              CURRICULUM CARD 1
          ========================= */}

          <div className="coursesDetails2_curriculum_card">

            <div className="coursesDetails2_curriculum_header">

              <h2>Course Introduction</h2>

              <button
                className="coursesDetails2_toggle_btn"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>

            </div>

            {isOpen && (
              <div className="coursesDetails2_curriculum_content">

                {/* ROW 1 */}

                <div className="coursesDetails2_curriculum_row">

                  <div className="coursesDetails2_curriculum_left">
                    <span>
                      <FaRegFileAlt className="coursesDetails2_doc_icon" />
                      Introduction To The Course
                    </span>
                  </div>

                  <div className="coursesDetails2_curriculum_right">
                    <span className="coursesDetails2_preview">
                      Preview
                    </span>
                  </div>

                </div>

                {/* ROW 2 */}

                <div className="coursesDetails2_curriculum_row">

                  <div className="coursesDetails2_curriculum_left">
                    <span>
                      <FaRegFileAlt className="coursesDetails2_doc_icon" />
                      Introduction To Web Development
                    </span>
                  </div>

                  <div className="coursesDetails2_curriculum_right">
                    <span>10 Minutes</span>
                    <span>|</span>
                    <i className="fas fa-lock"></i>
                  </div>

                </div>

                {/* ROW 3 */}

                <div className="coursesDetails2_curriculum_row">

                  <div className="coursesDetails2_curriculum_left">
                    <span>
                      <FaRegFileAlt className="coursesDetails2_doc_icon" />
                      Installing Visual Studio Code On Windows
                    </span>
                  </div>

                  <div className="coursesDetails2_curriculum_right">
                    <span>15 Minutes</span>
                    <span>|</span>
                    <i className="fas fa-lock"></i>
                  </div>

                </div>

                {/* ROW 4 */}

                <div className="coursesDetails2_curriculum_row">

                  <div className="coursesDetails2_curriculum_left">
                    <span>
                      <FaRegQuestionCircle className="coursesDetails2_q_icon" />
                      Web Development
                    </span>
                  </div>

                  <div className="coursesDetails2_curriculum_right">

                    <span className="coursesDetails2_question_box">
                      2 Question
                    </span>

                    <span className="coursesDetails2_time_box">
                      4 Minutes
                    </span>

                    <span>|</span>

                    <i className="fas fa-lock"></i>

                  </div>

                </div>

              </div>
            )}

          </div>


  {/* =========================
              CURRICULUM CARD  2
          ========================= */}
          <div className="coursesDetails2_curriculum_card">

  <div className="coursesDetails2_curriculum_header">

    <h2>A look at the psychology of educating.</h2>

    <button
      className="coursesDetails2_toggle_btn"
      onClick={() => setIsOpenLesson(!isOpenLesson)}
    >
      {isOpenLesson ? <FaChevronUp /> : <FaChevronDown />}
    </button>

  </div>

  {isOpenLesson && (

    <div className="coursesDetails2_curriculum_content">

      {/* ROW 1 */}

      <div className="coursesDetails2_curriculum_row">

        <div className="coursesDetails2_curriculum_left">
          <span>
            <FaRegFileAlt className="coursesDetails2_doc_icon" />
            A students view on teaching
          </span>
        </div>

        <div className="coursesDetails2_curriculum_right">
          <span>15 Minutes</span>
          <i className="fas fa-lock"></i>
        </div>

      </div>

      {/* ROW 2 */}

      <div className="coursesDetails2_curriculum_row">

        <div className="coursesDetails2_curriculum_left">
          <span>
            <FaRegFileAlt className="coursesDetails2_doc_icon" />
            Teachers
          </span>
        </div>

        <div className="coursesDetails2_curriculum_right">
          <span>10 Minutes</span>
          <i className="fas fa-lock"></i>
        </div>

      </div>

      {/* ROW 3 */}

      <div className="coursesDetails2_curriculum_row">

        <div className="coursesDetails2_curriculum_left">
          <span>
            <FaRegFileAlt className="coursesDetails2_doc_icon" />
            Blocks to learning
          </span>
        </div>

        <div className="coursesDetails2_curriculum_right">
          <span>15 Minutes</span>
          <i className="fas fa-lock"></i>
        </div>

      </div>

      {/* ROW 4 */}

      <div className="coursesDetails2_curriculum_row">

        <div className="coursesDetails2_curriculum_left">
          <span>
            <FaRegFileAlt className="coursesDetails2_doc_icon" />
            Conclusion
          </span>
        </div>

        <div className="coursesDetails2_curriculum_right">
          <span>15 Minutes</span>
          <i className="fas fa-lock"></i>
        </div>

      </div>

    </div>

  )}

</div>


          {/* =========================
              INSTRUCTOR SECTION
          ========================= */}

          <div className="coursesDetails2_instructor_section">

            {/* LEFT IMAGE */}

            <div className="coursesDetails2_instructor_left">

              <img
                src={require("../../../assets/images/team-04.webp")}
                alt="Steve Martin"
              />

            </div>

            {/* RIGHT CONTENT */}

            <div className="coursesDetails2_instructor_right">

              <h1>Steve Martin</h1>

              <span className="coursesDetails2_role">
                Laravel Expert
              </span>

              <p>
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                labore et dolore magna aliqua enim minim veniam quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate.
              </p>

              <div className="coursesDetails2_social_icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>

            </div>

          </div>

          {/* =========================
              RATING SECTION
          ========================= */}

          <div className="coursesDetails2_rating_section">

            {/* LEFT CARD */}

            <div className="coursesDetails2_rating_left_card">

              <h2>4.0</h2>

              <div className="coursesDetails2_stars">
                <span>★ ★ ★ ★</span>
                <span className="white_star">★</span>
              </div>

              <p>2 Ratings</p>

            </div>

            {/* RIGHT */}

            <div className="coursesDetails2_rating_right">

              <div className="rating_row">
                <span>5 ★</span>

                <div className="bar">
                  <div className="fill w-60"></div>
                </div>

                <span>1</span>
              </div>

              <div className="rating_row">
                <span>4 ★</span>

                <div className="bar">
                  <div className="fill w-0"></div>
                </div>

                <span>0</span>
              </div>

              <div className="rating_row">
                <span>3 ★</span>

                <div className="bar">
                  <div className="fill w-60"></div>
                </div>

                <span>1</span>
              </div>

              <div className="rating_row">
                <span>2 ★</span>

                <div className="bar">
                  <div className="fill w-0"></div>
                </div>

                <span>0</span>
              </div>

              <div className="rating_row">
                <span>1 ★</span>

                <div className="bar">
                  <div className="fill w-0"></div>
                </div>

                <span>0</span>
              </div>

            </div>

          </div>

          {/* =========================
              REVIEWS SECTION
          ========================= */}

          <div className="coursesDetails2_reviews_section">

            <h1 className="coursesDetails2_reviews_title">
              Reviews
            </h1>

            {/* ===============
            
            coursesDetails2_review_item 

            ========================*/}

            <div className="coursesDetails2_review_item">

              {/* LEFT IMAGE */}

              <div className="coursesDetails2_review_left">

                <img
                  src={require("../../../assets/images/team-02.webp")}
                  alt="User"
                />

              </div>

              {/* RIGHT */}

              <div className="coursesDetails2_review_right">

                <div className="coursesDetails2_review_stars">
                  ★ ★ ★ ★ ★
                </div>

                <h3>Edward Norton</h3>

                <h4>Excellent Course</h4>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            RIGHT SIDE CARD
        ========================= */}

        <div className="coursesDetails2_right">

          <div className="coursesDetails2_card">

            {/* VIDEO */}

            <div className="coursesDetails2_video">

              <iframe
                width="100%"
                height="220"
                src="https://www.youtube.com/embed/Ke90Tje7VS0"
                title="Course Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>

            </div>

            <h3 className="coursesDetails2_card_title">
              Course Includes:
            </h3>

            <div className="coursesDetails2_info_row">
              <span>Price:</span>
              <span>$29</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Instructor:</span>
              <span>Steve Martin</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Duration:</span>
              <span>25 hours</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Lessons:</span>
              <span>7</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Students:</span>
              <span>150</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Language:</span>
              <span>English</span>
            </div>

            <div className="coursesDetails2_info_row">
              <span>Certifications:</span>
              <span>Yes</span>
            </div>

            <button className="coursesDetails2_buy_btn">
              Buy Now
            </button>

            <div className="coursesDetails2_share">

              <span>Share On:</span>

              <div className="coursesDetails2_icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
    COURSES YOU MAY LIKE
========================= */}

      <div className="coursesDetails2_related_section">

        <h2 className="coursesDetails2_related_title">
          Courses You May Like
        </h2>

        <div className="coursesDetails2_related_wrapper">

          {recommendedCourses.map((course) => (

            <div
              className="coursesDetails2_related_card"
              key={course.id}
            >

              {/* IMAGE */}

              <div className="coursesDetails2_related_image_box">

                <img
                  src={course.image}
                  alt={course.title}
                  className="coursesDetails2_related_img"
                />

                {/* HEART */}

                <button
                  className="coursesDetails2_heart_btn"
                  onClick={() => alert("You need to Login first.")}
                >
                  ♡
                </button>

                {/* DURATION */}

                <div className="coursesDetails2_related_duration">

                  <FaClock />

                  <span>{course.duration}</span>

                </div>

              </div>

              {/* CONTENT */}

              <div className="coursesDetails2_related_content">

                {/* LEVEL */}

                <span className="coursesDetails2_related_level">
                  {course.level}
                </span>

                {/* TITLE */}

                <h3>{course.title}</h3>

                {/* RATING */}

                <div className="coursesDetails2_related_rating">

                  <span className="coursesDetails2_related_stars">
                    {course.rating}
                  </span>

                  <span className="coursesDetails2_related_rating_text">
                    {course.ratingText}
                  </span>

                </div>

                {/* PRICE */}

                <h4>{course.price}</h4>

                {/* DESCRIPTION */}

                <p className="coursesDetails2_hover_desc">
                  {course.desc}
                </p>

                {/* FOOTER */}

                <div className="coursesDetails2_related_footer">

                  <span>{course.lessons}</span>

                  <span>|</span>

                  <span className="coursesDetails2_students">

                    <FaUserGraduate />

                    {course.students}

                  </span>

                </div>

              </div>


              {/* BUTTON */}

              <button className="coursesDetails2_enroll_btn">
                Enroll Now →
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default CoursesDetails2;