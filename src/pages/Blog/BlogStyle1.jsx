
import React from "react";
import "./BlogStyle1.css";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import blog5 from "../../assets/images/blog5.jpg";
import blog6 from "../../assets/images/blog6.jpg";
import blog1sidebar from "../../assets/images/blog1sidebar.png";
import shape15 from "../../assets/images/shape-15.png";

import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";

const posts = [
   {
      img: blog1,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      comments: "Com 0",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },
   {
      img: blog2,
      cat: "Technology",
      title: "Exploring Learning Landscapes in Academic",
      date: "14 Nov, 2023",
      comments: "Com 3",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },
   {
      img: blog3,
      cat: "Learning",
      title: "Voices from the Learning Education Hub",
      date: "13 Nov, 2023",
      comments: "Com 0",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },
   {
      img: blog4,
      cat: "Child Development",
      title: "Shaping Future Generations with Pedagogy Perspectives",
      date: "11 Nov, 2023",
      comments: "Com 0",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },
   {
      img: blog5,
      cat: "Science",
      title: "Stories from the Educational Front at Classroom",
      date: "10 Nov, 2023",
      comments: "Com 0",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },
   {
      img: blog6,
      cat: "Computer Engineering",
      title: "Fostering Student Growth through Mindful Mentoring",
      date: "09 Nov, 2023",
      comments: "Com 0",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   }
];

export default function Blog() {
   return (
      <div className="blogStyle1">

         {/* Banner */}
         <section className="banner">
            <img src={shape15} className="shapeRight" alt="" />

            <div className="bannerContent">
               <h1>Blog </h1>

               <p className="breadcrumb">
                  <span className="home">Home</span>
                  <span className="sep"> &gt; </span>
                  <span className="active">Blog</span>
               </p>
            </div>
         </section>

         <section className='blogStyle1_wrapper'>

            {/* LEFT */}
            <div className='blogStyle1_left'>

               <div className='blogStyle1_grid'>
                  {posts.map((item, index) => (
                     <div className='blogStyle1_card' key={index}>

                        <img src={item.img} alt="" />

                        <div className='blogStyle1_content'>
                           <span className="blogStyle1_cat">{item.cat}</span>
                           <h3>{item.title}</h3>

                           <div className='blogStyle1_meta_row'>
                              <span>
                                 <FaRegCalendarAlt /> {item.date}
                              </span>

                              <span className="blogStyle1_divider">|</span>

                              <span>
                                 <FaRegComments /> {item.comments}
                              </span>
                           </div>

                           <p>{item.desc}</p>
                        </div>

                     </div>
                  ))}
               </div>

               {/* Pagination */}
               <div className='blogStyle1_pagination'>
                  <span className='active'>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>›</span>
               </div>

            </div>

            {/* SIDEBAR */}
            <aside className='blogStyle1_sidebar'>

               <div className='blogStyle1_widget'>

                  <h4>Search</h4>

                  <div className='blogStyle1_search_box'>
                     <input placeholder='Search' />
                  </div>

                  <h4 className="space-top">Latest Post</h4>

                  {posts.slice(0, 3).map((post, i) => (
                     <div className='blogStyle1_recent_post' key={i}>
                        <img src={post.img} alt="" />
                        <div>
                           <p>{post.title}</p>

                           <span className="blogStyle1_recent_date">
                              <FaRegCalendarAlt />
                              {post.date}
                           </span>
                        </div>

                     </div>
                  ))}

                  <h4 className="space-top">Categories</h4>

                  <ul className="blogStyle1_categories">
                     <li><span>Child Development</span><b>(2)</b></li>
                     <li><span>Computer Engineering</span><b>(3)</b></li>
                     <li><span>Learning</span><b>(11)</b></li>
                     <li><span>Nutrition</span><b>(11)</b></li>
                     <li><span>Science</span><b>(15)</b></li>
                     <li><span>Technology</span><b>(6)</b></li>
                     <li><span>Web Development</span><b>(4)</b></li>
                  </ul>

                  <div className="blogStyle1_banner_box">
                     <img src={blog1sidebar} alt="sidebar banner" />
                  </div>

                  <h4 className="space-top">Tags</h4>

                  <div className='blogStyle1_tags'>
                     <span>Child</span>
                     <span>Classroom</span>
                     <span>Design</span>
                     <span>Development</span>
                     <span>eLearning</span>
                     <span>Future</span>
                     <span>Higher Study</span>
                     <span>Software</span>
                  </div>

               </div>

            </aside>

         </section>

      </div>
   );
}