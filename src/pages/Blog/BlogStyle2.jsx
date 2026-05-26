
import React from "react";
import "./BlogStyle2.css";
import blog2Sidebar from "../../assets/images/blog1sidebar.png";
import blog7 from "../../assets/images/blog1.jpg";
import blog8 from "../../assets/images/blog2.jpg";
import blog9 from "../../assets/images/blog3.jpg";
import blog10 from "../../assets/images/blog4.jpg";
import blog11 from "../../assets/images/blog5.jpg";
import blog12 from "../../assets/images/blog6.jpg";
import shape15 from "../../assets/images/shape-15.png";
import { FaCalendarCheck , } from "react-icons/fa";

const posts = [
   {
      img: blog7,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

   {
      img: blog8,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

   {
      img: blog9,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

   {
      img: blog10,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

   {
      img: blog11,
      cat: "Technology",
      title: "Exploring Learning Landscapes in Academic",
      date: "14 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

   {
      img: blog12,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      desc: "Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt..."
   },

];

export default function Blog2() {
   return (
      <>

         {/* Banner */}
         <div className="blogStyle1">

            <section className="banner">
               <img src={shape15} className="shapeRight" alt="" />

               <div className="bannerContent">
                  <h1>Blog 2</h1>

                  <p className="breadcrumb">
                     <span className="home">Home</span>
                     <span className="sep"> &gt; </span>
                     <span className="active">Blog</span>
                  </p>
               </div>
            </section>


            <section className='blog-style2_wrapper'>

            {/* LEFT */}

               <div className='blog-style2_left'>

                  <div className='blog-style2_grid'>
                     {
                        posts.map((item, index) => (
                           <div className='blog-style2_card' key={index}>

                              <div className="blog-style2_image-wrap">
                                 <img src={item.img} alt="" />

                                 <div className="blog-style2_date-badge">
                                    {item.date}
                                 </div>

   <div className="blog-style2_hover-arrow">→</div>
                              </div>

                              <div className='blog-style2_content'>
                                 <span className="blog-style2_cat">{item.cat}</span>
                                 <h3>{item.title}</h3>
                                 <p>{item.desc}</p>
                              </div>

                           </div>
                        ))
                     }
                  </div>

               {/* Pagination */}

                  <div className='blog-style2_pagination'>
                     <span className='active'>1</span>
                     <span>2</span>
                     <span>3</span>
                     <span>›</span>
                  </div>

               </div>

            {/* SIDEBAR */}

               <aside className='blog-style2_sidebar'>

                  <div className='blog-style2_widget'>

                     <h4>Search</h4>

                     <div className='blog-style2_search'>
                        <input placeholder='Search' />
                     </div>

                     <h4 className="space-top">Latest Post</h4>

                     {
                        posts.slice(0, 3).map((item, index) => (
                           <div className='blog-style2_recent-post' key={index}>
                              <img src={item.img} alt="" />
                              <div>
                                 <p>{item.title}</p>
                                 <span className="blog-style2_recent_date">
                                    <FaCalendarCheck  />
                                    {item.date}
                                 </span>                        </div>
                           </div>
                        ))
                     }
                     <h4 className="space-top">Categories</h4>

                     <ul className="blog-style2_categories">
                        <li><span>Child Development</span><b>(2)</b></li>
                        <li><span>Computer Engineering</span><b>(3)</b></li>
                        <li><span>Learning</span><b>(11)</b></li>
                        <li><span>Nutrition</span><b>(11)</b></li>
                        <li><span>Science</span><b>(15)</b></li>
                        <li><span>Technology</span><b>(6)</b></li>
                        <li><span>Web Development</span><b>(4)</b></li>
                     </ul>

                     <div className="blog-style2_banner_box">
                        <img src={blog2Sidebar} alt="sidebar banner" />
                     </div>

                     <h4 className="space-top">Tags</h4>

                     <div className='blog-style2_tags'>
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

      </>
   )
}