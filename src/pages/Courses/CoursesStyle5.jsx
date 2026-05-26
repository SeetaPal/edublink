
import React from "react";
import "./CoursesStyle5.css";
import {FaStar,FaBookOpen,FaUserGraduate, FaSearch} from "react-icons/fa";

const courses=[
{
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
cat:"Business",rating:5,reviews:"3 Ratings",price:"$30",
lessons:"11 Lessons",students:"227 Students",
title:"Starting SEO as your Home Based Business"
},
{
img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
cat:"Motivation",rating:5,reviews:"2 Ratings",price:"$49",
lessons:"8 Lessons",students:"72 Students",
title:"Grow Personal Financial Security Thinking & Principles"
},
{
img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
cat:"Programming",rating:4,reviews:"2 Ratings",price:"Free",
lessons:"9 Lessons",students:"22 Students",
title:"Build RESTful API Application"
},
{
img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
cat:"Business",rating:3,reviews:"2 Ratings",price:"$75",
lessons:"7 Lessons",students:"362 Students",
title:"Competitive Strategy Law for Management Consultants"
},
{
img:"https://images.unsplash.com/photo-1518770660439-4636190af475",
cat:"Programming",rating:4,reviews:"2 Ratings",price:"$79",
lessons:"7 Lessons",students:"672 Students",
title:"Machine Learning A-Z Hands-On Python"
},
{
img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
cat:"Digital Marketing",rating:5,reviews:"3 Ratings",price:"$29",
lessons:"7 Lessons",students:"423 Students",
title:"Learning How To Write As A Professional Author"
},
{
img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",
cat:"Motivation",rating:4,reviews:"2 Ratings",price:"$29",
lessons:"7 Lessons",students:"96 Students",
title:"Educating Through Christ To Learn And Serve"
},
{
img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
cat:"Programming",rating:4,reviews:"2 Ratings",price:"$29",
lessons:"7 Lessons",students:"150 Students",
title:"Web Development Masterclass Certifications"
},
{
img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
cat:"Business",rating:4,reviews:"2 Ratings",price:"$35",
lessons:"7 Lessons",students:"674 Students",
title:"The Complete Python Bootcamp From Zero To Hero"
}
]

export default function CoursesStyle5(){
return(
<>
<section className='course5-hero'>
<div className='overlay'></div>
<div className='hero-content'>
<span>Archives: Courses</span>
<h1>Course Style 5</h1>
<div>Home &gt; Course</div>
</div>
</section>

{/* search  */}
<section className="course-topbar">

<div className="results">
Showing 1-9 Of 62 Results
</div>

<div className="course-search">
<input type="text" placeholder="Search Course" />
<button>
<FaSearch/>
</button>
</div>

</section>


<section className='course5-grid'>
{courses.map((c,i)=>(
<div className='course5-card' key={i}>
<img src={c.img} alt=''/>
<div className='content'>
<span className='cat'>{c.cat}</span>
<h3>{c.title}</h3>
<div className='rating'>
{[...Array(5)].map((_,x)=><FaStar key={x} className={x<c.rating?'on':'off'} />)}
<span>({c.rating}.0/ {c.reviews})</span>
</div>
<h4>{c.price}</h4>
<div className='meta'>
<span><FaBookOpen/> {c.lessons}</span>
<span><FaUserGraduate/> {c.students}</span>
</div>
</div>
</div>
))}
</section>

<div className='pagination'>
<span>←</span><span className='active'>1</span><span>2</span><span>3</span><span>4</span><span>→</span>
</div>
</>
)
}

