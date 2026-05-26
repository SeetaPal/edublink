
import React from "react";
import "./CoursesStyle3.css";

const courses=[
{img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",price:"$30",title:"Starting SEO as your Home Based Business"},
{img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",price:"$49",title:"Grow Personal Financial Security Thinking & Principles"},
{img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",price:"Free",title:"Build RESTful API Application"},
{img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",price:"$75",title:"Competitive Strategy For Consultants"},
{img:"https://images.unsplash.com/photo-1518770660439-4636190af475",price:"$79",title:"Machine Learning A-Z Hands-On"},
{img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",price:"$29",title:"Learning How To Write As Author"},
{img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",price:"$29",title:"Educating Through Christ To Learn"},
{img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6",price:"$29",title:"Web Development Masterclass"},
{img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",price:"$35",title:"Python Bootcamp Zero To Hero"}
];

export default function CoursesStyle3(){
return(
<>
<section className="course3-hero">
<div className="overlay"></div>
<div className="hero-content">
<span>Archives: Courses</span>
<h1>Course Style 3</h1>
<div className="breadcrumb">Home &gt; Course</div>
</div>
</section>

<section className='course-topbar'>
<div className='results'>Showing 1-9 Of 62 Results</div>
<div className='course-search'>
<input placeholder='Search Course'/>
<button>Search</button>
</div>
</section>

<section className="course3-grid">
{courses.map((course,index)=>(
<div className="course3-card" key={index}>

<div className="img-wrap">
<img src={course.img} alt=""/>
<div className="price-badge">{course.price}</div>
</div>

<div className="course3-content">
<a href="/" className="course-arrow">→</a>

<div className="author-box">
<img src="https://randomuser.me/api/portraits/men/32.jpg" alt=""/>
<span>Edward Norton</span>
</div>

<h3>{course.title}</h3>
<p>Lorem ipsum dolor sit amet consectur adipiscing elit, sed do eiusmod tempor...</p>
</div>

</div>
))}
</section>

<div className="pagination">
<span className="active">1</span>
<span>2</span>
<span>3</span>
<span>›</span>
</div>
</>
)
}


