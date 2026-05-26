

// import React, { useState } from "react";
// import "./CoursesFilterLeft.css";
// import renderStars from "../../components/renderStars";
// import course1 from "../../assets/images/Event2.jpg";
// import course2 from "../../assets/images/blog1.jpg";
// import course3 from "../../assets/images/blog2.jpg";
// import course4 from "../../assets/images/blog3.jpg";
// import course5 from "../../assets/images/blog4.jpg";
// import course6 from "../../assets/images/blog5.jpg";
// import course7 from "../../assets/images/blog6.jpg";
// import course8 from "../../assets/images/course1.jpg";
// import course9 from "../../assets/images/blog1.jpg";

// const CoursesFilterLeft = () => {
//   const [open, setOpen] = useState({
//     categories: true,
//     instructor: false,
//     level: false,
//     price: false,
//   });

//   const toggle = (key) => {
//     setOpen({ ...open, [key]: !open[key] });
//   };

//   // ✅ FIXED
//   const [view, setView] = useState("grid");
//   const [dropdownOpen, setDropdownOpen] = useState(false);


//   const [sort, setSort] = useState("Filter");

//   const options = [
//     "Newest",
//     "Oldest",
//     "Course Title (A-Z)",
//     "Course Title (Z-A)",
//     "Popular",
//     "Featured"
//   ];

//   const courses = [
//     {
//       id: 1,
//       image: course1,
//       duration: "15 Weeks",
//       cat: "Beginner",
//       title: "Starting SEO as your Home Based Business",
//       rating: 5.0,
//       reviews: 3,
//       price: 499,
//       lessons: "11 Lessons",
//       students: 227,
//     },
//     {
//       id: 2,
//       cat: "Expert",
//       title: "Grow Personal Financial Security Thinking &...",
//       rating: 5.0,
//       reviews: 2,
//       price: "Free",
//       duration: "12 Weeks",
//       image: course2,
//       lessons: "8 Lessons",
//       students: 72 ,
//     },
//     {
//       id: 3,
//       cat: "All Levels",
//       title: "The Complete Guide to Build RESTful API..",
//       rating: 4.0,
//       reviews: 2,
//       price: 299,
//       duration: "20 Hours",
//       image: course3,
//       lessons: "9 Lessons",
//       students: 31 ,
//     },
//     {
//       id: 4,
//       cat: "All Levels",
//       title: "Competitive Strategy Law for Management...",
//       rating: 3.0,
//       reviews: 2,
//       price: 599,
//       duration: "25 Hours",
//       image: course4,
//       lessons: "7 Lessons",
//       students: 362,
//     },
//     {
//       id: 5,
//       cat: "Intermediate",
//       title: "Machine Learning A-Z: Hands-On Python and...",
//       rating: 4.0,
//       reviews: 2,
//       price: 399,
//       duration: "30 Hours",
//       image: course5,
//       lessons: "7 Lessons",
//       students: 672,
//     },
//     {
//       id: 6,
//       cat: "All Levels",
//       title: "Learning How To Write As A Professional Author",
//       rating: 5.0,
//       reviews: 3,
//       price: 699,
//       duration: "15 Hours",
//       image: course6,
//       lessons: "7 Lessons",
//       students: 423,
//     },
//     {
//       id: 7,
//       cat: "Beginner",
//       title: "Educating Through Christ to Learn And to Serve",
//       rating: 4.0,
//       reviews: 2,
//       price: 899,
//       duration: "11 Weeks",
//       image: course7,
//       lessons: "7 Lessons",
//       students: 96,
//     },
//     {
//       id: 8,
//       cat: "Intermediate",
//       title: "Web Development Masterclass &",
//       rating: 4.0,
//       reviews: 2,
//       price: 349,
//       duration: "25 Hours",
//       image: course8,
//       lessons: "7 Lessons",
//       students: 150 ,
//     },
//     {
//       id: 9,
//       cat: "Beginner",
//       title: "The Complete Python Bootcamp From Zero to",
//       rating: 4.0,
//       reviews: 2,
//       price: "Free",
//       duration: "30 Hours",
//       image: course9,
//       lessons: "7 Lessons",
//       students: 674,
//     }
//   ];


//   const sortedCourses = [...courses].sort((a, b) => {
//     switch (sort) {
//       case "Newest":
//         return b.id - a.id;

//       case "Oldest":
//         return a.id - b.id;

//       case "Course Title (A-Z)":
//         return a.title.localeCompare(b.title);

//       case "Course Title (Z-A)":
//         return b.title.localeCompare(a.title);

//      case "Popular":
//           return (
//             parseInt(b.students) - parseInt(a.students)
//           );

//       case "Featured":
//         return b.rating - a.rating;

//       default:
//         return 0;
//     }
//   });

//   return (
//     <div className="courses-page">

//       {/* Banner */}
//       <div className="courses-banner">
//         <h1 className="banner-title">Courses</h1>
//         <div className="breadcrumb">Home &gt; Courses</div>
//       </div>

//       {/* Main Layout */}
//       <div className="courses-content">

//         {/* LEFT SIDE */}
//         <div className="filter-card">

//           {/* Categories */}
//           <div className="filter-section">
//             <div className="filter-header" onClick={() => toggle("categories")}>
//               <h4>Categories</h4>
//               <span>{open.categories ? "▲" : "▼"}</span>
//             </div>

//             {open.categories && (
//               <div className="filter-body">
//                 {["Business (15)", "Cooking (8)", "Digital Marketing (9)", "Fitness(10)", "Motivation(21)", "Online Art(3)", "Photography(4)", "Programming(8)", "Yoga(5)"].map((item, i) => (
//                   <label key={i}>
//                     <input type="checkbox" /> {item}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* 👇 YEH SAB Categories ke niche hi aayega */}

//           {/* Level */}
//           <div className="filter-section">
//             <div className="filter-header" onClick={() => toggle("level")}>
//               <h4>Level</h4>
//               <span>{open.level ? "▲" : "▼"}</span>
//             </div>

//             {open.level && (
//               <div className="filter-body">
//                 {["All Levels (16)", "Beginner (15)", "Intermediate (13)", "Expert (18)"].map((item, i) => (
//                   <label key={i}>
//                     <input type="checkbox" /> {item}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Price */}
//           <div className="filter-section">
//             <div className="filter-header" onClick={() => toggle("price")}>
//               <h4>Price</h4>
//               <span>{open.price ? "▲" : "▼"}</span>
//             </div>

//             {open.price && (
//               <div className="filter-body">
//                 {["All (62)", "Free (13)", "Paid (49)"].map((item, i) => (
//                   <label key={i}>
//                     <input type="checkbox" /> {item}
//                   </label>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Buttons (always bottom) */}
//           <div className="filter-buttons">
//             <button className="apply-btn">Apply Filter</button>
//             <button className="reset-btn">Reset Filter</button>
//           </div>

//         </div>



//         {/* RIGHT SIDE */}
//         <div className="courses-right">

//           {/* Top Bar */}
//           <div className="topbar">

//             <div>Showing 1-9 Of 62 Courses</div>

//             <div className="topbar-right">

//               {/* Grid/List */}
//               <div className="view-toggle">
//                 <button
//                   className={view === "grid" ? "active" : ""}
//                   onClick={() => setView("grid")}
//                 >
//                   Grid
//                 </button>

//                 <button
//                   className={view === "list" ? "active" : ""}
//                   onClick={() => setView("list")}
//                 >
//                   List
//                 </button>
//               </div>

//               {/* Dropdown */}
//               <div className="filter-dropdown">
//                 <div
//                   className="filter-btn"
//                   onClick={() => setDropdownOpen(!dropdownOpen)}
//                 >
//                   {sort} ▼
//                 </div>

//                 {dropdownOpen && (
//                   <div className="dropdown-menu">
//                     {options.map((item, i) => (
//                       <div
//                         key={i}
//                         className="dropdown-item"
//                         onClick={() => {
//                           setSort(item);
//                           setDropdownOpen(false);
//                         }}
//                       >
//                         {item}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//             </div>
//           </div>

//           {/* Courses Area (placeholder) */}
//           <div className={view === "grid" ? "courses-grid" : "courses-list"}>
//             {sortedCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className={view === "grid" ? "course-card" : "course-list-item"}
//               >


//                 {/* Image */}
//                 <div className="course-img">

//                   {/* ⭐ Duration badge (TOP RIGHT) */}
//                   <div className="duration-badge">
//                     ⏱ {course.duration}
//                   </div>



//                   <img src={course.image} alt={course.title} />
//                 </div>

//                 {/* Content */}

//                 <div className="course-content">

//                   <div className="category-badge">
//                     {course.cat}
//                   </div>

//                   <h3>{course.title}</h3>
//                   <p className="instructor">{course.instructor}</p>

//                   {/* rating */}

//                   <div className="filter_left_rating">
//                     {renderStars(course.rating)}
//                     <span className="rating-text">
//                       ({course.rating.toFixed(1)} / {course.reviews} Ratings)
//                     </span>
//                   </div>

//                   <div className="price">
//                     {course.price === "Free" ? (
//                       <span className="free">Free</span>
//                     ) : (
//                       <span className="paid">₹{course.price}</span>
//                     )}
//                   </div>

//                   {/* 👇 NEW SECTION */}
//                   <div className="course-meta">
//                     <span className="lessons">
//                       📚 {course.lessons}
//                     </span>

//                     <span className="divider">|</span>

//                    <span className="students">
//   👨‍🎓 {course.students} Students
// </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default CoursesFilterLeft;


// vfgd


import React, { useState } from "react";
import "./CoursesFilterLeft.css";
import renderStars from "../../components/renderStars";

import course1 from "../../assets/images/Event2.jpg";
import course2 from "../../assets/images/blog1.jpg";
import course3 from "../../assets/images/blog2.jpg";
import course4 from "../../assets/images/blog3.jpg";
import course5 from "../../assets/images/blog4.jpg";
import course6 from "../../assets/images/blog5.jpg";
import course7 from "../../assets/images/blog6.jpg";
import course8 from "../../assets/images/course1.jpg";
import course9 from "../../assets/images/blog1.jpg";

const CoursesFilterLeft = () => {

  const [view, setView] = useState("grid");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sort, setSort] = useState("Filter");
  const [filters, setFilters] = useState({
    category: [],
    level: [],
    price: []
  });

  const [open, setOpen] = useState({
  category: true,
  level: true,
  price: true
});

const toggleSection = (key) => {
  setOpen((prev) => ({
    ...prev,
    [key]: !prev[key]
  }));
};

  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      const exists = prev[type].includes(value);
      return {
        ...prev,
        [type]: exists
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value]
      };
    });
  };

  const handleReset = () => {
    setFilters({
      category: [],
      level: [],
      price: []
    });
  };

  const options = [
    "Newest",
    "Oldest",
    "Course Title (A-Z)",
    "Course Title (Z-A)",
    "Popular",
    "Featured"
  ];

  // ✅ CATEGORY DATA WITH COUNT
  // const categories = [
  //   { name: "Business", count: 15 },
  //   { name: "Cooking", count: 8 },
  //   { name: "Digital Marketing", count: 9 },
  //   { name: "Fitness", count: 10 }
  // ];


const categories = [
  { name: "Business", count: 15 },
  { name: "Cooking", count: 8 },
  { name: "Digital Marketing", count: 9 },
  { name: "Fitness", count: 10 }
];

  const courses = [
    { id: 1, image: course1, duration: "15 Weeks", cat: "Beginner", title: "Starting SEO as your Home Based Business", rating: 5, reviews: 3, price: 499, lessons: "11 Lessons", students: 227 },
    { id: 2, image: course2, duration: "12 Weeks", cat: "Expert", title: "Grow Personal Financial Security Thinking", rating: 5, reviews: 2, price: "Free", lessons: "8 Lessons", students: 72 },
    { id: 3, image: course3, duration: "20 Hours", cat: "All Levels", title: "Build RESTful API", rating: 4, reviews: 2, price: 299, lessons: "9 Lessons", students: 31 },
    { id: 4, image: course4, duration: "25 Hours", cat: "All Levels", title: "Competitive Strategy Law", rating: 3, reviews: 2, price: 599, lessons: "7 Lessons", students: 362 },
    { id: 5, image: course5, duration: "30 Hours", cat: "Intermediate", title: "Machine Learning A-Z", rating: 4, reviews: 2, price: 399, lessons: "7 Lessons", students: 672 },
    { id: 6, image: course6, duration: "15 Hours", cat: "All Levels", title: "Professional Writing", rating: 5, reviews: 3, price: 699, lessons: "7 Lessons", students: 423 },
    { id: 7, image: course7, duration: "11 Weeks", cat: "Beginner", title: "Education & Service", rating: 4, reviews: 2, price: 899, lessons: "7 Lessons", students: 96 },
    { id: 8, image: course8, duration: "25 Hours", cat: "Intermediate", title: "Web Development Masterclass", rating: 4, reviews: 2, price: 349, lessons: "7 Lessons", students: 150 },
    { id: 9, image: course9, duration: "30 Hours", cat: "Beginner", title: "Python Bootcamp", rating: 4, reviews: 2, price: "Free", lessons: "7 Lessons", students: 674 }
  ];

  const filteredCourses = courses.filter((course) => {
    if (filters.category.length && !filters.category.includes(course.cat)) return false;
    if (filters.level.length && !filters.level.includes(course.cat)) return false;

    if (filters.price.length) {
      if (filters.price.includes("Free") && course.price !== "Free") return false;
      if (filters.price.includes("Paid") && course.price === "Free") return false;
    }

    return true;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sort) {
      case "Newest": return b.id - a.id;
      case "Oldest": return a.id - b.id;
      case "Course Title (A-Z)": return a.title.localeCompare(b.title);
      case "Course Title (Z-A)": return b.title.localeCompare(a.title);
      case "Popular": return b.students - a.students;
      case "Featured": return b.rating - a.rating;
      default: return 0;
    }
  });

  // heart 
  const [showMsg, setShowMsg] = useState(false);
  
  const handleWishlistClick = () => {
  if (showMsg) return;  // 🔥 prevent spam click

  setShowMsg(true);

  setTimeout(() => {
    setShowMsg(false);
  }, 2500);
};
  return (
    <div className="courses-page">

      <div className="courses-content">

{/* 🔥 GLOBAL TOAST - yaha rakho */}
{showMsg && (
  <div className="login-toast">
    You need to Login first.
  </div>
)}

        {/* LEFT FILTER */}
    <div className="filter-card">

  {/* CATEGORY */}
  <div className="filter-section">

    <div className="filter-header" onClick={() => toggleSection("category")}>
      <h4>Category</h4>
      <span className={`caret ${open.category ? "open" : ""}`}>▼</span>
    </div>

    {open.category && (
      <div className="filter-body">

        {[
          { name: "Business", count: 15 },
          { name: "Cooking", count: 8 },
          { name: "Digital Marketing", count: 9 },
          { name: "Fitness", count: 10 }
        ].map((item) => (
          <label key={item.name} className="filter-item">
            <input
              type="checkbox"
              checked={filters.category.includes(item.name)}
              onChange={() => handleFilterChange("category", item.name)}
            />
            <span className="filter-label">{item.name}</span>
            <span className="filter-count">({item.count})</span>
          </label>
        ))}

      </div>
    )}

  </div>

  {/* LEVEL */}
  <div className="filter-section">

    <div className="filter-header" onClick={() => toggleSection("level")}>
      <h4>Level</h4>
      <span className={`caret ${open.level ? "open" : ""}`}>▼</span>
    </div>

    {open.level && (
      <div className="filter-body">
        {["Beginner", "Intermediate", "Expert", "All Levels"].map((item) => (
          <label key={item} className="filter-item">
            <input
              type="checkbox"
              checked={filters.level.includes(item)}
              onChange={() => handleFilterChange("level", item)}
            />
            <span className="filter-label">{item}</span>
          </label>
        ))}
      </div>
    )}

  </div>

  {/* PRICE */}
  <div className="filter-section">

    <div className="filter-header" onClick={() => toggleSection("price")}>
      <h4>Price</h4>
      <span className={`caret ${open.price ? "open" : ""}`}>▼</span>
    </div>

    {open.price && (
      <div className="filter-body">
        {["Free", "Paid"].map((item) => (
          <label key={item} className="filter-item">
            <input
              type="checkbox"
              checked={filters.price.includes(item)}
              onChange={() => handleFilterChange("price", item)}
            />
            <span className="filter-label">{item}</span>
          </label>
        ))}
      </div>
    )}

  </div>

  {/* BUTTON */}
  <div className="filter-buttons">
    <button className="reset-btn" onClick={handleReset}>
      Reset Filter
    </button>
  </div>

</div>

        {/* RIGHT */}
        <div className="courses-right">

          

          <div className="topbar">
            <div>Showing {sortedCourses.length} Courses</div>

            <div className="topbar-right">

              <div className="view-toggle">
                <button
                  className={view === "grid" ? "active" : ""}
                  onClick={() => setView("grid")}
                >Grid</button>

                <button
                  className={view === "list" ? "active" : ""}
                  onClick={() => setView("list")}
                >List</button>
              </div>

              <div className="filter-dropdown">
                <div className="filter-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  {sort} ▼
                </div>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    {options.map((item, i) => (
                      <div key={i} className="dropdown-item"
                        onClick={() => {
                          setSort(item);
                          setDropdownOpen(false);
                        }}>
                        {item}
                      </div>
                    ))}
                  </div>
                )}

              </div>

            </div>
          </div>

        <div className={view === "grid" ? "courses-grid" : "courses-list"}>
  {sortedCourses.map((course) => (
    <div
      key={course.id}
      className={view === "grid" ? "course-card" : "course-list-item"}
    >

      {/* ✅ LIST VIEW */}
      {view === "list" ? (
        <>
          {/* LEFT IMAGE */}
          <div className="list-img">
            <img src={course.image} alt={course.title} />
          </div>

          {/* RIGHT CONTENT */}
          <div className="list-content">

            {/* PRICE */}
            <div className="list-price">
              {course.price === "Free" ? "Free" : `₹${course.price}`}
            </div>

            {/* TITLE */}
            <h3>{course.title}</h3>

            {/* RATING */}
            <div className="filter_left_rating">
              {renderStars(course.rating)}
              <span className="rating-text">
                ({course.rating} / {course.reviews} Ratings)
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="list-desc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* META */}
            <div className="course-meta">
              <span>📚 {course.lessons}</span>
              <span>👨‍🎓 {course.students} Students</span>
            </div>

          </div>
        </>
      ) : (
        /* ✅ GRID VIEW (UNCHANGED) */
        <>
          <div className="course-img">
            <div className="duration-badge">
              ⏱ {course.duration}
            </div>


  {/* ❤️ Heart Icon */}
  {/* <div className="wishlist-btn">
    ❤
  </div> */}

  {/* ❤️ Heart */}
  <div 
    className="wishlist-btn"
    onClick={(e) => {
      e.stopPropagation();
      handleWishlistClick();
    }}
  >
    ❤
  </div>
 





            <img src={course.image} alt={course.title} />
          </div>

          <div className="course-content">
            <div className="category-badge">{course.cat}</div>
            <h3>{course.title}</h3>

            <div className="filter_left_rating">
              {renderStars(course.rating)}
              <span className="rating-text">
                ({course.rating} / {course.reviews})
              </span>
            </div>

            <div className="price">
              {course.price === "Free"
                ? <span className="free">Free</span>
                : <span className="paid">₹{course.price}</span>}
            </div>

            <div className="course-meta">
              <span>📚 {course.lessons}</span>
              <span>👨‍🎓 {course.students} Students</span>
            </div>
          </div>
          
        </>
      )}

    </div>
  ))}
</div>

        </div>

      </div>
    </div>
  );
};

export default CoursesFilterLeft;