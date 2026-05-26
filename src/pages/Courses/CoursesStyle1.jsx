
import React from "react";
import "./CoursesStyle1.css";
import {
FaStar,
FaBookOpen,
FaUserGraduate,
FaSearch
} from "react-icons/fa";

const courses = [
{
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
cat:"Business",
title:"Starting SEO as your Home Based Business",
rating:"5.0",
reviews:"3 Ratings",
price:"$30",
lessons:"11 Lessons",
students:"227 Students"
},
{
img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
cat:"Motivation",
title:"Grow Personal Financial Security Thinking & Principles",
rating:"5.0",
reviews:"2 Ratings",
price:"$49",
lessons:"8 Lessons",
students:"72 Students"
},
{
img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
cat:"Programming",
title:"The Complete Guide to Build RESTful API Application",
rating:"4.0",
reviews:"2 Ratings",
price:"Free",
lessons:"9 Lessons",
students:"22 Students"
},
{
img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
cat:"Business",
title:"Competitive Strategy Law for Management Consultants",
rating:"3.0",
reviews:"2 Ratings",
price:"$75",
lessons:"7 Lessons",
students:"362 Students"
},
{
img:"https://images.unsplash.com/photo-1518770660439-4636190af475",
cat:"Programming",
title:"Machine Learning A-Z: Hands-On Python and Java",
rating:"4.0",
reviews:"2 Ratings",
price:"$79",
lessons:"7 Lessons",
students:"672 Students"
},
{
img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
cat:"Digital Marketing",
title:"Learning How To Write As A Professional Author",
rating:"5.0",
reviews:"3 Ratings",
price:"$29",
lessons:"7 Lessons",
students:"423 Students"
},
{
img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",
cat:"Motivation",
title:"Educating Through Christ to Learn And to Serve",
rating:"4.0",
reviews:"2 Ratings",
price:"$29",
lessons:"7 Lessons",
students:"96 Students"
},
{
img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
cat:"Programming",
title:"Web Development Masterclass & Certifications",
rating:"4.0",
reviews:"2 Ratings",
price:"$29",
lessons:"7 Lessons",
students:"150 Students"
},
{
img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
cat:"Business",
title:"The Complete Python Bootcamp From Zero to Hero",
rating:"4.0",
reviews:"2 Ratings",
price:"$35",
lessons:"7 Lessons",
students:"674 Students"
}
];

export default function CourseGrid(){
return(
<>

{/* HERO SECTION */}
<section className="course-hero">
  <div className="course-overlay"></div>

  <div className="course-hero-content">
      <span className="course-subtitle">
        Archives: Courses
      </span>

      <h1>Course</h1>

      <div className="breadcrumb">
         <span>Home</span>
         <span>/</span>
         <span>Course</span>
      </div>
  </div>
</section>

<section className='course-topbar'>
<div className='results'>Showing 1-9 Of 62 Results</div>

<div className='course-search'>
<input placeholder='Search Course'/>
<button><FaSearch/></button>
</div>
</section>

<section className='course-grid'>
{courses.map((course,index)=>(
<div className='course-card' key={index}>
<img src={course.img} alt='' />

<div className='course-content'>
<span className='course-cat'>{course.cat}</span>

<h3>{course.title}</h3>

<div className="rating">
{
[...Array(5)].map((_,i)=>(
<FaStar
key={i}
className={i < parseInt(course.rating) ? "active-star" : "inactive-star"}
/>
))
}

<span>({course.rating}/ {course.reviews})</span>
</div>

<h4>{course.price}</h4>

<div className='course-meta'>
<span><FaBookOpen/> {course.lessons}</span>
<span><FaUserGraduate/> {course.students}</span>
</div>
</div>
</div>
))}
</section>

<div className='pagination'>
<span className='active'>1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>›</span>
</div>
</>
)
}

