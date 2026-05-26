// import React from "react";
// import CourseCard from "../../components/CourseCard";
// import "./CoursesFilterRight.css";

// import filterRight1 from "../../assets/images/team-01.webp";
// import filterRight2 from "../../assets/images/team-02.webp";
// import filterRight3 from "../../assets/images/team-03.webp";
// import filterRight4 from "../../assets/images/team-04.webp";
// import filterRight5 from "../../assets/images/team-05.webp";
// import filterRight6 from "../../assets/images/course1.jpg";
// import filterRight7 from "../../assets/images/team-07.webp";
// import filterRight8 from "../../assets/images/course4.jpg";
// import filterRight9 from "../../assets/images/course4.jpg";



// const courses = [
//   {
//     img: filterRight1,
//     duration: "15 Weeks",
//     level: "Beginner",
//     title: "Starting SEO as your Home Based Business",
//     ratingValue: 5,
//     price: "$44",
//     description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "11 Lessons",
//     students: "227 Students",
//   },
  
//   {
//     img: filterRight2,
//     duration: "12 Weeks",
//     level: "Expert",
//     title: "Grow Personal Financial Security Thinking",
//     ratingValue: 5,
//     price: "$87",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "9 Lessons",
//     students: "567 Students",
//   },

//   {
//     img: filterRight3,
//     duration: "15 Hours",
//     level: "All Levels",
//     title: "The Complete Guide to Build RESTful API...",
//     ratingValue: 4,
//     price: "$45",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "12 Lessons",
//     students: "320 Students",
//   },

//   {
//     img: filterRight4,
//     duration: "25 Hours",
//     level: "Intermediate",
//     title: "Competitive Strategy Law for Managementy",
//     ratingValue: 3,
//     price: "$60",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "10 Lessons",
//     students: "410 Students",
//   },

//  {
//     img: filterRight5,
//     duration: "25 Hours",
//     level: "Intermediate",
//     title: "Competitive Strategy Law for Managementy",
//     ratingValue: 3,
//     price: "$60",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "10 Lessons",
//     students: "410 Students",
//   },

//   {
//     img: filterRight6,
//     duration: "30 Hours",
//     level: "Beginner",
//     title: "Machine Learning A-Z: Hands-On Python and",
//     ratingValue: 4,
//     price: "$99",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "15 Lessons",
//     students: "800 Students",
//   },

//   {
//     img:filterRight7,
//     duration: "15 Hours",
//     level: "All",
//     title: "Learning How To Write As A Professional Author",
//     ratingValue: 4,
//     price: "$35",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "8 Lessons",
//     students: "150 Students",
//   },

//    {
//     img:filterRight8,
//     duration: "15 Hours",
//     level: "All",
//     title: "Learning How To Write As A Professional Author",
//     ratingValue: 4,
//     price: "$35",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "8 Lessons",
//     students: "150 Students",
//   },

//    {
//     img:filterRight9,
//     duration: "15 Hours",
//     level: "All",
//     title: "Learning How To Write As A Professional Author",
//     ratingValue: 4,
//     price: "$35",
//         description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
//     lessons: "8 Lessons",
//     students: "150 Students",
//   },


// ];

// const CoursesFilterRight = () => {
//   return (
//     <div className="coursesPage">

     

//       {/* 🔹 RIGHT SIDE */}
//       <div className="rightContent">

//         {/* TOP BAR */}
//         <div className="topBar">
//           <p>Showing 1–9 Of 62 Courses</p>
//           <div>⬜ ⬛</div>
//         </div>

//         {/* GRID */}
//         <div className="coursesDetail-grid">
//           {courses.map((course, index) => (
//             <CourseCard key={index} course={course} />
//           ))}
//         </div>

//       </div>

//  {/* 🔹 LEFT FILTER */}
//       <div className="leftFilter">

//         <h3>Categories</h3>
//         <label><input type="checkbox" /> Business (15)</label>
//         <label><input type="checkbox" /> Cooking (8)</label>
//         <label><input type="checkbox" /> Programming (8)</label>

//         <h3>Instructor</h3>
//         <label><input type="checkbox" /> Edward Norton (14)</label>
//         <label><input type="checkbox" /> Steve Martin (25)</label>

//         <h3>Level</h3>
//         <label><input type="checkbox" /> Beginner</label>
//         <label><input type="checkbox" /> Intermediate</label>

//         <h3>Price</h3>
//         <label><input type="checkbox" /> Free</label>
//         <label><input type="checkbox" /> Paid</label>

//         <button className="applyBtn">Apply Filter</button>
//         <button className="resetBtn">Reset</button>

//       </div>

//     </div>
//   );
// };

// export default CoursesFilterRight;


// 




import React, { useState } from "react";
import CourseCard from "../../components/CourseCard";
import "./CoursesFilterRight.css";

// images
import img1 from "../../assets/images/team-01.webp";
import img2 from "../../assets/images/team-02.webp";
import img3 from "../../assets/images/team-03.webp";
import img4 from "../../assets/images/team-04.webp";
import img5 from "../../assets/images/team-05.webp";
import img6 from "../../assets/images/course1.jpg";
import img7 from "../../assets/images/team-07.webp";
import img8 from "../../assets/images/course4.jpg";
import img9 from "../../assets/images/course4.jpg";

const courses = [
  {
    img: img1,
    duration: "15 Weeks",
    level: "Beginner",
    title: "Starting SEO as your Home Based Business",
    ratingValue: 5,
    price: "$44",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "11 Lessons",
    students: "227 Students",
  },

  {
    img: img2,
    duration: "12 Weeks",
    level: "Expert",
    title: "Grow Personal Financial Security Thinking &",
    ratingValue: 5,
    price: "$87",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "9 Lessons",
    students: "567 Students",
  },

  {
    img: img3,
    duration: "15 Hours",
    level: "All Levels",
    title: "The Complete Guide to Build RESTful API",
    ratingValue: 4,
    price: "$45",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "12 Lessons",
    students: "320 Students",
  },


  {
    img: img4,
    duration: "25 Hours",
    level: "Intermediate",
    title: "Competitive Strategy Law for Management",
    ratingValue: 3,
    price: "$60",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "10 Lessons",
    students: "410 Students",
  },

  {
    img: img5,
    duration: "30 Hours",
    level: "Beginner",
    title: "Machine Learning A-Z: Hands-On Python and",
    ratingValue: 4,
    price: "$99",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "15 Lessons",
    students: "800 Students",
  },

  {
    img: img6,
    duration: "15 Hours",
    level: "All",
    title: "Learning How To Write As A Professional Author",
    ratingValue: 4,
    price: "$35",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "8 Lessons",
    students: "150 Students",
  },

  {
    img: img7,
    duration: "15 Hours",
    level: "All",
    title: "Educating Through Christ to Learn And to Serve",
    ratingValue: 4,
    price: "$35",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "8 Lessons",
    students: "150 Students",
  },

  {
    img: img8,
    duration: "15 Hours",
    level: "All",
    title: "Web Development Masterclass &",
    ratingValue: 4,
    price: "$35",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "8 Lessons",
    students: "150 Students",
  },

  {
    img: img9,
    duration: "15 Hours",
    level: "All",
    title: "The Complete Python Bootcamp From Zero to",
    ratingValue: 4,
    price: "$35",
    description: "Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor incididunt.",
    lessons: "8 Lessons",
    students: "150 Students",
  },
];

const CoursesFilterRight = () => {
  const [open, setOpen] = useState("categories");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <div className="coursesPage">

      {/* LEFT = CARDS */}
      <div className="rightContent">

        <div className="topBar">
          <p>Showing 1–9 Of 62 Courses</p>
        </div>

        <div className="coursesDetail-grid">
          {courses.map((course, i) => (
            <CourseCard key={i} course={course} />
          ))}
        </div>

      </div>

      {/* RIGHT = FILTER */}
      <div className="leftFilter">

        {/* CATEGORY */}
        <div className="filterSection">
          <div className="filterHeader" onClick={() => toggle("categories")}>
            Categories
          </div>

          {open === "categories" && (
            <div className="filterContent">
              <label><input type="checkbox" /> Business (15)</label>
              <label><input type="checkbox" /> Cooking (8)</label>
              <label><input type="checkbox" /> Digital Marketing (9)</label>
              <label><input type="checkbox" /> Fitness (10)</label>
              <label><input type="checkbox" /> Programming (8)</label>
            </div>
          )}
        </div>

        {/* INSTRUCTOR */}
        <div className="filterSection">
          <div className="filterHeader" onClick={() => toggle("instructor")}>
            Instructor
          </div>

          {open === "instructor" && (
            <div className="filterContent">
              <label><input type="checkbox" /> Edward Norton (14)</label>
              <label><input type="checkbox" /> Steve Martin (25)</label>
            </div>
          )}
        </div>

        {/* LEVEL */}
        <div className="filterSection">
          <div className="filterHeader" onClick={() => toggle("level")}>
            Level
          </div>

          {open === "level" && (
            <div className="filterContent">
              <label><input type="checkbox" /> Beginner</label>
              <label><input type="checkbox" /> Intermediate</label>
              <label><input type="checkbox" /> Expert</label>
            </div>
          )}
        </div>

        {/* PRICE */}
        <div className="filterSection">
          <div className="filterHeader" onClick={() => toggle("price")}>
            Price
          </div>

          {open === "price" && (
            <div className="filterContent">
              <label><input type="checkbox" /> Free</label>
              <label><input type="checkbox" /> Paid</label>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default CoursesFilterRight;