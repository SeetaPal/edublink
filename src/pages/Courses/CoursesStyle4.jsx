
import React from "react";
import "./CoursesStyle4.css";
import { FaBookOpen, FaUserGraduate , FaSearch} from "react-icons/fa";

const courses=[
{
img:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
price:"$75",
cat:"Business",
title:"Competitive Strategy Law for Management Consultants",
lessons:"7 Lessons",
students:"362 Students"
},
{
img:"https://images.unsplash.com/photo-1518770660439-4636190af475",
price:"$87",
cat:"Programming",
title:"Machine Learning A-Z: Hands-On Python and Java",
lessons:"9 Lessons",
students:"672 Students"
},
{
img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085",
price:"$99",
cat:"Business",
title:"Starting SEO as your Home Based Business",
lessons:"11 Lessons",
students:"227 Students"
},
{
img:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
price:"$65",
cat:"Programming",
title:"The Complete Guide To Build RESTful API Application",
lessons:"8 Lessons",
students:"210 Students"
},
{
img:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
price:"$55",
cat:"Motivation",
title:"Grow Personal Financial Security Thinking Principles",
lessons:"8 Lessons",
students:"72 Students"
},
{
img:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
price:"$49",
cat:"Marketing",
title:"Learning How To Write As A Professional Author",
lessons:"7 Lessons",
students:"423 Students"
},
{
img:"https://images.unsplash.com/photo-1509062522246-3755977927d7",
price:"$39",
cat:"Motivation",
title:"Educating Through Christ To Learn And Serve",
lessons:"7 Lessons",
students:"96 Students"
},
{
img:"https://images.unsplash.com/photo-1497633762265-9d179a990aa6",
price:"$89",
cat:"Programming",
title:"Web Development Masterclass Certifications",
lessons:"7 Lessons",
students:"150 Students"
},
{
img:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
price:"Free",
cat:"Business",
title:"The Complete Python Bootcamp From Zero To Hero",
lessons:"7 Lessons",
students:"674 Students"
}
]

export default function CoursesStyle4(){
return(
<>
<section className="course4-hero">
<div className="overlay"></div>
<div className="hero-content">
<span>Archives: Courses</span>
<h1>Course Style 4</h1>
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

<section className='course4-grid'>
{courses.map((item,index)=>(
<div className='course4-card' key={index}>

<div className='img-wrap'>
<img src={item.img} alt='' />
<div className='price-circle'>{item.price}</div>
</div>

<div className='course4-content'>

<span className='cat-pill'>
{item.cat}
</span>

<h3>{item.title}</h3>

<p>
Lorem ipsum dolor sit amet consectur adipiscing elit,
sed do eiusmod tempor...
</p>

<div className='meta'>
<span><FaBookOpen/> {item.lessons}</span>
<span><FaUserGraduate/> {item.students}</span>
</div>

</div>

</div>
))}
</section>

<div className="pagination">
<span>←</span>
<span className="active">1</span>
<span>2</span>
<span>3</span>
<span>4</span>
<span>→</span>
</div>
</>


)
}






