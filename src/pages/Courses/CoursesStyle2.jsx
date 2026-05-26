import React, { useState } from "react";
import "./CoursesStyle2.css";
import { FaStar , FaClock} from "react-icons/fa";
const courses = [
{
title:"Starting SEO as your Home Based Business",
cat:"Business",
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
rating:"5.0",
reviews:"3 Ratings"
},
{
title:"Machine Learning A-Z: Hands-On Python and Java",
cat:"Programming",
img:"https://images.unsplash.com/photo-1518770660439-4636190af475",
rating:"4.0",
reviews:"2 Ratings"
},
{
title:"Learning How To Write As A Professional Author",
cat:"Digital Marketing",
img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
rating:"5.0",
reviews:"3 Ratings"
},
{
title:"RESTful API Application Guide",
cat:"Programming",
img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
rating:"4.0",
reviews:"2 Ratings"
},
{
title:"Financial Security Thinking & Principles",
cat:"Motivation",
img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
rating:"5.0",
reviews:"2 Ratings"
},
{
title:"SEO Home Based Business Growth",
cat:"Business",
img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",
rating:"5.0",
reviews:"3 Ratings"
},
{
title:"Educating Through Christ Learning",
cat:"Motivation",
img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
rating:"4.0",
reviews:"2 Ratings"
},
{
title:"Web Development Masterclass",
cat:"Programming",
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
rating:"4.0",
reviews:"2 Ratings"
},
{
title:"Python Bootcamp From Zero to Hero",
cat:"Business",
img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
rating:"4.0",
reviews:"2 Ratings"
}
];

export default function CoursesStyle2(){

const [hoverIndex, setHoverIndex] = useState(null);

return(
<>
{/* HERO */}
<section className="course2-hero">
<div className="overlay"></div>
<div className="hero-content">
<span>Archives: Courses</span>
<h1>Course</h1>
<p>Home &gt; Course</p>
</div>
</section>

{/* TOP BAR */}
<div className="course2-topbar">
<div>Showing 1-9 Of 62 Results</div>
<input placeholder="Search Course" />
</div>

{/* GRID */}
<section className="course2-grid">

{courses.map((c,index)=>(
<div
className="course2-card"
key={index}
onMouseEnter={()=>setHoverIndex(index)}
onMouseLeave={()=>setHoverIndex(null)}
>

{/* IMAGE */}
<div className="img-box">
  <img src={c.img} alt="" />



 <div className={`badge ${index === 0 || index === 3 || index === 4 || index === 5 || index === 6
  ? "online"
  : "online-onsite"
}`}>
  <FaClock className="badge-icon" />
  
  {index === 0 || index === 3 || index === 4 || index === 5 || index === 6
    ? "Online Only"
    : "Online + Onsite"
  }
</div>
</div>

{/* CONTENT */}
<div className="content">

{/* CATEGORY */}
<span className="course-cat">
  {c.cat}
</span>

{/* TITLE */}
<h3 className="title">{c.title}</h3>

{/* DESC */}
<p>Lorem ipsum dolor sit amet consectur adipiscing elit...</p>

{/* RATING */}
<div className="rating">
{[...Array(5)].map((_,i)=>(
<FaStar key={i} className="star"/>
))}
<span>({c.rating}/{c.reviews})</span>
</div>

{/* BUTTON */}
<div className="enroll-btn">
  Enroll Now →
</div>

</div>
</div>
))}

</section>
</>
);
}