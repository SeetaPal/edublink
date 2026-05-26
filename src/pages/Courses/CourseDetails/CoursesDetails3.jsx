import React, { useState } from "react";
import "./CoursesDetails3.css";
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



import renderStars from "../../../components/renderStars";

import instructorImg from "../../../assets/images/team-06.jpg";
import course1 from "../../../assets/images/course1.jpg";
import course2 from "../../../assets/images/course2.jpg";
import course3 from "../../../assets/images/course3.jpg";
import course4 from "../../../assets/images/course4.jpg";


const CoursesDetails3 = () => {

    const [isOpen, setIsOpen] = useState(true);
    const [isOpenLesson, setIsOpenLesson] = useState(true);

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
        <div className="CoursesDetails3-page">

            {/*--------- Banner --------- */}
            <div className="CoursesDetails3-banner">

                <div className="CoursesDetails3-breadcrumb">
                    Home <span> &gt; </span> Course <span> &gt; </span>
                    <strong> Educating Through Christ </strong>
                    <strong> to Learn And to Serve </strong>
                </div>

                <h1 className="CoursesDetails3-bannerTitle">
                    Educating Through Christ to Learn And to Serve
                </h1>

                <div className="CoursesDetails3-bannerMeta">

                    <div className="CoursesDetails3-metaItem">
                        <FaUser />
                        <span>
                            By <strong>Steve Martin</strong>
                        </span>
                    </div>

                    <div className="CoursesDetails3-divider">|</div>

                    <div className="CoursesDetails3-metaItem">
                        <FaFolderOpen />
                        <span>Motivation</span>
                    </div>

                    <div className="CoursesDetails3-divider">|</div>

                    <div className="CoursesDetails3-metaItem">
                        <span className="CoursesDetails3-stars">
                            {renderStars(5)}
                        </span>

                        <span>(2 Reviews)</span>
                    </div>

                </div>
            </div>

            {/* --------- coursesDetails3_layout  ---------*/}

            <section className="coursesDetails3_layout coursesDetails3_container">

                {/* LEFT SIDE */}

                <div className="coursesDetails3_left">

                    <div className="coursesDetails3_contentBox">

                        <h2>Course Description</h2>

                        <p>
                            Lorem ipsum dolor sit amet consectur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.
                        </p>

                        <h2>What You’ll Learn From This Course</h2>

                        <ul className="coursesDetails3_learnList">

                            <li>
                                Neque sodales ut etiam sit amet nisl purus non
                                tellus orci ac auctor
                            </li>

                            <li>
                                Tristique nulla aliquet enim tortor at auctor urna.
                                Sit amet aliquam id diam maer
                            </li>

                            <li>
                                Nam libero justo laoreet sit amet. Lacus sed
                                viverra tellus in hac
                            </li>

                            <li>
                                Tempus imperdiet nulla malesuada pellentesque elit
                                eget gravida cum sociis
                            </li>

                        </ul>

                        <h2>Certification</h2>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Quis ipsum suspendisse ultrices gravida.
                            Risus commodo viverra maecenas accumsan lacus vel
                            facilisis.
                        </p>

                    </div>

                </div>

                {/* RIGHT SIDE */}

                <div className="coursesDetails3_right">

                    <div className="coursesDetails3_card">

                        {/* VIDEO */}

                        <div className="coursesDetails3_video">

                            <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/Ke90Tje7VS0"
                                title="Course Video"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>

                        </div>

                        <h3 className="coursesDetails3_card_title">
                            Course Includes:
                        </h3>

                        <div className="coursesDetails3_info_row">
                            <span>Price:</span>
                            <span>$29</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Instructor:</span>
                            <span>Steve Martin</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Duration:</span>
                            <span>25 hours</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Lessons:</span>
                            <span>7</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Students:</span>
                            <span>150</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Language:</span>
                            <span>English</span>
                        </div>

                        <div className="coursesDetails3_info_row">
                            <span>Certifications:</span>
                            <span>Yes</span>
                        </div>

                        <button className="coursesDetails3_buy_btn">
                            Buy Now
                        </button>

                        <div className="coursesDetails3_share">

                            <span>Share On:</span>

                            <div className="coursesDetails3_icons">
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
    CURRICULUM CARD 1
========================= */}

            <div className="coursesDetails3_curriculum_card">

                <div className="coursesDetails3_curriculum_header">

                    <h2>Course Introduction</h2>

                    <button
                        className="coursesDetails3_toggle_btn"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                </div>

                {isOpen && (
                    <div className="coursesDetails3_curriculum_content">

                        {/* ROW 1 */}

                        <div className="coursesDetails3_curriculum_row">

                            <div className="coursesDetails3_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="coursesDetails3_doc_icon" />
                                    Introduction To The Course
                                </span>
                            </div>

                            <div className="coursesDetails3_curriculum_right">
                                <span className="coursesDetails3_preview">
                                    Preview
                                </span>
                            </div>

                        </div>

                        {/* ROW 2 */}

                        <div className="coursesDetails3_curriculum_row">

                            <div className="coursesDetails3_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="coursesDetails3_doc_icon" />
                                    Introduction To Web Development
                                </span>
                            </div>

                            <div className="coursesDetails3_curriculum_right">
                                <span>10 Minutes</span>
                                <span>|</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>

                        {/* ROW 3 */}

                        <div className="coursesDetails3_curriculum_row">

                            <div className="coursesDetails3_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="coursesDetails3_doc_icon" />
                                    Installing Visual Studio Code On Windows
                                </span>
                            </div>

                            <div className="coursesDetails3_curriculum_right">
                                <span>15 Minutes</span>
                                <span>|</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>

                        {/* ROW 4 */}

                        <div className="coursesDetails3_curriculum_row">

                            <div className="coursesDetails3_curriculum_left">
                                <span>
                                    <FaRegQuestionCircle className="coursesDetails3_q_icon" />
                                    Web Development
                                </span>
                            </div>

                            <div className="coursesDetails3_curriculum_right">

                                <span className="coursesDetails3_question_box">
                                    2 Question
                                </span>

                                <span className="coursesDetails3_time_box">
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
    COURSE CURRICULUM 2
========================= */}

            <div className="courseLearn_curriculum_card">

                <div className="courseLearn_curriculum_header">

                    <h2>A look at the psychology of educating.</h2>

                    <button
                        className="courseLearn_toggle_btn"
                        onClick={() => setIsOpenLesson(!isOpenLesson)}
                    >
                        {isOpenLesson ? <FaChevronUp /> : <FaChevronDown />}
                    </button>

                </div>

                {isOpenLesson && (

                    <div className="courseLearn_curriculum_content">

                        {/* ROW 1 */}

                         <div className="courseLearn_curriculum_row">

                            <div className="courseLearn_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="courseLearn_doc_icon" />
                                    A students view on teaching
                                </span>
                            </div>

                            <div className="courseLearn_curriculum_right">
                                <span>15 Minutes</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>
                        {/* ROW 2 */}

                        <div className="courseLearn_curriculum_row">

                            <div className="courseLearn_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="courseLearn_doc_icon" />
                                    Teachers
                                </span>
                            </div>

                            <div className="courseLearn_curriculum_right">
                                <span>10 Minutes</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>

                        {/* ROW 3 */}

                        <div className="courseLearn_curriculum_row">

                            <div className="courseLearn_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="courseLearn_doc_icon" />
                                    Blocks to learning
                                </span>
                            </div>

                            <div className="courseLearn_curriculum_right">
                                <span>15 Minutes</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>

                        {/* ROW 4 */}

                          <div className="courseLearn_curriculum_row">

                            <div className="courseLearn_curriculum_left">
                                <span>
                                    <FaRegFileAlt className="courseLearn_doc_icon" />
                                        Conclusion                               
                                 </span>
                            </div>

                            <div className="courseLearn_curriculum_right">
                                <span>15 Minutes</span>
                                <i className="fas fa-lock"></i>
                            </div>

                        </div>

                    </div>

                )}

            </div>




{/* =========================
coursesDetails3_instructor_section
========================= */}

            <div className="coursesDetails3_instructor_section">

                {/* LEFT IMAGE */}

                <div className="coursesDetails3_instructor_left">

                    <img
                        src={require("../../../assets/images/team-04.webp")}
                        alt="Steve Martin"
                    />

                </div>

                {/* RIGHT CONTENT */}

                <div className="coursesDetails3_instructor_right">

                    <h1>Steve Martin</h1>

                    <span className="coursesDetails3_role">
                        Laravel Expert
                    </span>

                    <p>
                        Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                        labore et dolore magna aliqua enim minim veniam quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate.
                    </p>

                    <div className="coursesDetails3_social_icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-linkedin-in"></i>
                    </div>

                </div>

            </div>


 {/* =========================
    RATING SECTION
========================= */}

        <div className="coursesDetails3_rating_section">

                {/* LEFT CARD */}

                <div className="coursesDetails3_rating_left_card">

                    <h2>4.0</h2>

                    <div className="coursesDetails3_stars">
                        <span>★ ★ ★ ★</span>
                        <span className="coursesDetails3_white_star">★</span>
                    </div>

                    <p>2 Ratings</p>

                </div>

                {/* RIGHT */}

                <div className="coursesDetails3_rating_right">

                    <div className="coursesDetails3_rating_row">

                        <span>5 ★</span>

                        <div className="coursesDetails3_bar">
                            <div className="coursesDetails3_fill coursesDetails3_w_60"></div>
                        </div>

                        <span>1</span>

                    </div>

                    <div className="coursesDetails3_rating_row">

                        <span>4 ★</span>

                        <div className="coursesDetails3_bar">
                            <div className="coursesDetails3_fill coursesDetails3_w_0"></div>
                        </div>

                        <span>0</span>

                    </div>

                    <div className="coursesDetails3_rating_row">

                        <span>3 ★</span>

                        <div className="coursesDetails3_bar">
                            <div className="coursesDetails3_fill coursesDetails3_w_60"></div>
                        </div>

                        <span>1</span>

                    </div>

                    <div className="coursesDetails3_rating_row">

                        <span>2 ★</span>

                        <div className="coursesDetails3_bar">
                            <div className="coursesDetails3_fill coursesDetails3_w_0"></div>
                        </div>

                        <span>0</span>

                    </div>

                    <div className="coursesDetails3_rating_row">

                        <span>1 ★</span>

                        <div className="coursesDetails3_bar">
                            <div className="coursesDetails3_fill coursesDetails3_w_0"></div>
                        </div>

                        <span>0</span>

                    </div>

                </div>

         </div>


 {/* =========================
              REVIEWS SECTION
========================= */}

            <div className="coursesDetails3_reviews_section">

                <h1 className="coursesDetails3_reviews_title">
                    Reviews
                </h1>

                <div className="coursesDetails3_review_item">

                    {/* LEFT IMAGE */}

                    <div className="coursesDetails3_review_left">

                        <img
                            src={require("../../../assets/images/team-02.webp")}
                            alt="User"
                        />

                    </div>

                    {/* RIGHT */}

                    <div className="coursesDetails3_review_right">

                        <div className="coursesDetails3_review_stars">
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


{/* =========================
    COURSES YOU MAY LIKE
========================= */}

         
            {/* Courses */}
            <div className="CoursesDetails3-section">
                <h1 className="CoursesDetails3-sectionTitle">
                    Courses You May Like
                </h1>

                <div className="CoursesDetails3-grid">
                    {recommendedCourses.map((course, index) => (
                        <div
                            className="CoursesDetails3-card"
                            key={index}
                        >
                            <div className="CoursesDetails3-imageWrapper">
                                <img
                                    src={course.img}
                                    alt="course"
                                />

                                <div className="CoursesDetails3-timeBadge">
                                    🕒 {course.duration}
                                </div>

                                <div
                                    className="CoursesDetails3-heart"
                                    onClick={() =>
                                        alert(
                                            "You need to Login first."
                                        )
                                    }
                                >
                                    <FaHeart />
                                </div>
                            </div>

                            <span className="CoursesDetails3-level">
                                {course.level}
                            </span>

                            <h3>{course.title}</h3>

                            <p className="CoursesDetails3-rating">
                                {renderStars(4)} (4.0 / 3 Ratings)
                            </p>

                            <p className="CoursesDetails3-price">
                                {course.price}
                            </p>

                            <p className="CoursesDetails3-desc">
                                {course.description}
                            </p>

                            <p className="CoursesDetails3-meta">
                                📘 {course.lessons} | 👨‍🎓{" "}
                                {course.students}
                            </p>

                            <button className="CoursesDetails3-btn">
                                Enroll Now →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesDetails3;