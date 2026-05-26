import React from "react";
import { FaHeart } from "react-icons/fa";
import renderStars from "../components/renderStars";


const CourseCard = ({ course }) => {
  return (
    <div className="coursesDetail-card">

      <div className="coursesDetail-course-image-wrapper">
        <img src={course.img} alt="course" />

        <div className="coursesDetail-course-time-badge">
          <span>🕒</span>
          <span>{course.duration}</span>
        </div>

        <div
          className="coursesDetail-heart"
          onClick={() => alert("You need to Login first.")}
        >
          <FaHeart />
        </div>
      </div>

      <span className="coursesDetail-level">{course.level}</span>

      <h3>{course.title}</h3>

      <p className="coursesDetail-rating">
        {renderStars(course.ratingValue)} ({course.ratingValue})
      </p>

      <p className="coursesDetail-price">{course.price}</p>

      <p className="coursesDetail-desc">{course.description}</p>

      <p className="coursesDetail-meta">
        📘 {course.lessons} | 👨‍🎓 {course.students}
      </p>

      <button className="coursesDetail-enrollBtn">
        Enroll Now →
      </button>

    </div>
  );
};

export default CourseCard;