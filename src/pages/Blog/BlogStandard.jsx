import React from "react";
import "./BlogStandard.css";

import blog13 from "../../assets/images/blog1.jpg";
import blog14 from "../../assets/images/blog2.jpg";
import blog15 from "../../assets/images/blog3.jpg";
import blog16 from "../../assets/images/blog4.jpg";
import blog17 from "../../assets/images/blog5.jpg";
import blog18 from "../../assets/images/blog6.jpg";
import shape15 from "../../assets/images/shape-15.png";
import blog1sidebar from "../../assets/images/blog1sidebar.png";

import { FaCalendarCheck, FaRegComments ,FaRegCalendarAlt,FaSearch } from "react-icons/fa";

const posts = [
   {
      img: blog13,
      cat: "Science",
      title: "Crafting Effective Learning Guide Line",
      date: "15 Nov, 2023",
      comments: "Com 0",

   },
   {
      img: blog14,
      cat: "Technology",
      title: "Exploring Learning Landscapes in Academic",
      date: "14 Nov, 2023",
      comments: "Com 1",

   },

   {
      img: blog15,
      cat: "Child Development",
      title: "Shaping Future Generations with Pedagogy Perspectives",
      date: "11 Nov, 2023",
      comments: "Com 4",

   },
   {
      img: blog16,
      cat: "Science",
      title: "Stories from the Educational Front at Classroom",
      date: "10 Nov, 2023",
      comments: "Com 2",

   },
   {
      img: blog17,
      cat: "Computer Engineering",
      title: "Fostering Student Growth through Mindful Mentoring",
      date: "09 Nov, 2023",
      comments: "Com 1",

   },
   {
      img: blog18,
      cat: "Science",
      title: "Stories from the Educational Front at Classroom",
      date: "10 Nov, 2023",
      comments: "Com 4",

   },
];

export default function BlogStandard() {
   return (
      <>
         {/* ================= HERO ================= */}
         <section className="banner">
            <img src={shape15} className="shapeRight" alt="" />

            <div className="bannerContent">
               <h1>Blog</h1>

               <p className="breadcrumb">
                  <span className="home">Home</span>
                  <span className="sep"> &gt; </span>
                  <span className="active">Blog</span>
               </p>
            </div>
         </section>

         {/* ================= MAIN ================= */}
         <section className="BlogStandard_wrapper">

            {/* LEFT BLOG LIST */}
            <div className="BlogStandard_left">
               {posts.map((post, index) => (
                  <div className="BlogStandard_post" key={index}>

                     {/* IMAGE TOP */}
                     <div className="BlogStandard_postImage">
                        <img src={post.img} alt={post.title} />
                     </div>

                     {/* CONTENT BELOW IMAGE */}
                     <div className="BlogStandard_content">

                        <span className="BlogStandard_cat">{post.cat}</span>

                        <h2>{post.title}</h2>

                        <div className="BlogStandard_meta">

                           <span className="meta_item">
                              <FaCalendarCheck className="meta_icon" />
                              14 Nov, 2023
                           </span>

                           <span className="meta_divider">|</span>

                           <span className="meta_item">
                              <FaRegComments className="meta_icon" />
                              Com 3
                           </span>

                        </div>

                        <p>
                           Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore
                           et dolore magna aliqua enim ad minim veniam, quis nostrud exerec tation
                           ullamco laboris nis aliquip commodo consequat....
                        </p>

                        <a href="/" className="BlogStandard_learnBtn">
                           Learn More →
                        </a>

                     </div>
                  </div>
               ))}

               {/* PAGINATION */}
               <div className="BlogStandard_pagination">
                  <span className="active">1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>›</span>
               </div>
            </div>

            {/* RIGHT SIDEBAR */}
        <aside className="BlogStandard_sidebar">

  <div className="BlogStandard_sidebarCard">

    {/* SEARCH */}
    <div className="BlogStandard_sidebar_section">
      <h4>Search</h4>

      <div className="BlogStandard_searchBox">
        <input placeholder="Search..." />
        <span className="search_icon">
          <FaSearch />
        </span>
      </div>
    </div>

    {/* LATEST POST */}
    <div className="BlogStandard_sidebar_section">
      <h4>Latest Post</h4>

      {posts.slice(0, 3).map((post, i) => (
        <div className="BlogStandard_recentPost" key={i}>
          <img src={post.img} alt="" />
          <div>
            <p>{post.title}</p>
            <span className="BlogStandard_recent_date">
              <FaRegCalendarAlt />
              {post.date}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* CATEGORY */}
    <div className="BlogStandard_sidebar_section">
      <h4>Categories</h4>

      <ul className="BlogStandard_categories">
        <li><span>Child Development</span><b>(2)</b></li>
        <li><span>Computer Engineering</span><b>(3)</b></li>
        <li><span>Child Development</span><b>(11)</b></li>
        <li><span>Computer Engineering</span><b>(11)</b></li>
         <li><span>Learning</span><b>(15)</b></li>
        <li><span>Nutrition</span><b>(15)</b></li>
        <li><span>Science</span><b>(15)</b></li>
        <li><span>Technology</span><b>(6)</b></li>
        <li><span>Web Development</span><b>(4)</b></li>
      </ul>
    </div>

    {/* BANNER */}
    <div className="BlogStandard_sidebar_section">
      <div className="BlogStandard_banner_box">
        <img src={blog1sidebar} alt="sidebar banner" />
      </div>
    </div>

    {/* TAGS */}
    <div className="BlogStandard_sidebar_section">
      <h4>Tags</h4>

      <div className="BlogStandard_tags">
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

  </div>

</aside>
         </section>
      </>
   );
}