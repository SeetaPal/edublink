import React from "react";
import "./BlogDetails.css";

import {
    FaRegCalendarAlt,
    FaRegComments,
    FaQuoteLeft,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaArrowLeft,
    FaArrowRight,
    FaReply ,
    FaSearch
} from "react-icons/fa";

import shape15 from "../../assets/images/shape-15.png";
import blog1sidebar from "../../assets/images/blog1sidebar.png";
import banner from "../../assets/images/blog1sidebar.png";

import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/details2.jpg";


// comment 

import Edward from "../../assets/images/team-02.webp";
import Emilie from "../../assets/images/team-03.webp";
import Steve from "../../assets/images/team-04.webp";


/* DATA */
export const blogData = [
    {
        id: 1,
        img: blog1,
        cat: "Technology",
        title: "Exploring Learning Landscapes in Academic",
        date: "15 Nov, 2023",
        comments: "Com 0",
        navTitle: "Voices from the Learning Education Hub",
        shortTitle: "Voices from Learning Hub",
    },
    {
        id: 2,
        img: blog2,
        cat: "Learning",
        title: "Exploring Learning Landscapes in Academic Alcove",
        date: "14 Nov, 2023",
        comments: "Com 3",
    }
];

/* COMMENTS DATA */


const commentsData = [
  {
    id: 1,
    name: "Edward Norton",
    img: Edward,
    date: "November 19, 2023 at 12:57 pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 2,
    name: "Emilie Bryant",
    img: Emilie,
    date: "November 19, 2023 at 12:57 pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    name: "Steve Martin",
    img: Steve,
    date: "November 19, 2023 at 12:58 pm",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

export default function BlogDetails() {

    // ✅ FIX: define blog
    const blog = blogData[0];

    return (
        <>
            {/* HERO */}
            {/* Banner */}
            <section className="banner">
                <img src={shape15} className="shapeRight" alt="" />

                <div className="bannerContent">
                    <h1>Exploring Learning Landscapes in Academic </h1>

                    <p className="breadcrumb">
                        <span className="home">Home</span>
                        <span className="sep"> &gt; </span>
                        <span className="active">Technology</span>
                         <span className="sep"> &gt; </span>
                        <span className="active">
Exploring Learning Landscapes in Academic</span>
                       
                    </p>
                </div>
            </section>

            {/* MAIN WRAPPER */}
            <section className="blog-details-wrapper">

                {/* LEFT CONTENT */}
                <main className="blog-details-main">

                    <section className="blog-details-article-wrap">

                        <div className="blog-details-article-header">

                            <span className="blog-details-cat">{blog.cat}</span>

                            <h1 className="blog-details-title">{blog.title}</h1>

                            <div className="blog-details-meta-row">
                                <span><FaRegCalendarAlt /> {blog.date}</span>
                                <span className="divider">|</span>
                                <span><FaRegComments /> {blog.comments}</span>
                            </div>

                        </div>

                        <img
                            className="blog-details-featured-img"
                            src={blog.img}
                            alt={blog.title}
                        />

                        <p>Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua enim ad
                            minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat. Duis aute irure
                            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem
                            quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores.</p>

                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem
                            aperiam.</p>


                        <ul className="blog-details-tick-list">
                            <li>Aute irure dolor in reprehenderit.</li>
                            <li>Occaecat cupidatat non proident sunt in culpa.</li>
                            <li>Pariatur enim ipsam.</li>
                        </ul>

                        <div className="blog-details-quote-box">
                            <FaQuoteLeft className="blog-details-quote-icon" />
                            <p>Lorem ipsum dolor amet con sectur elitadicing elit sed do usmod
                                tempor uincididunt enim minim veniam nostrud..</p>
                            <h5>Simon Baker</h5>
                        </div>


                        <h2 className="blog-details-section-title">
                            The Complete Camtasia
                        </h2>

                        {/* 👇 ADD PARAGRAPH HERE */}
                        <p className="blog-details-section-desc">
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                            doloremque laudantium totam rem aperiam.
                        </p>




                        {/* IMAGES */}
                        <div className="blog-details-two-grid-images">
                            <img src={blog.img} alt="camtasia-1" />
                            <img src={blog.img} alt="camtasia-2" />
                        </div>

                        {/* 👇 PARAGRAPH AFTER IMAGES */}
                        <p>
                            Consectetur adipisicing elit, sed do eiusmod tempor inc idid unt ut labore et dolore magna aliqua
                            enim ad minim veniam, quis nostrud exerec tation ullamco laboris nis aliquip commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni
                            dolores.
                        </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam.
                        </p>

                        {/* 👇 NEXT SECTION */}
                        <h2 className="blog-details-section-title">Intrinsic Motivation</h2>

                        <p>
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit  anim id est laborum.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam.
                        </p>

                        <ul className="blog-details-tick-list">
                            <li>Aute irure dolor in reprehenderit.</li>
                            <li>Occaecat cupidatat non proident sunt in culpa.</li>
                            <li>Pariatur enim ipsam.</li>
                        </ul>

                        {/* TAGS + SHARE */}
                        <div className="blog-details-tags-share-row">
                            <div>
                                <strong>Tags:</strong>
                                <span>Design</span>
                                <span>Development</span>
                            </div>

                            <div className="blog-details-social-share">
                                <a href="/"><FaFacebookF /></a>
                                <a href="/"><FaTwitter /></a>
                                <a href="/"><FaLinkedinIn /></a>
                            </div>
                        </div>


                    </section>

                    {/* NAV */}
                    <div className="blog-details-post-nav-boxes">

                        {/* PREVIOUS */}
                        <div className="blog-details-nav-card">
                            <FaArrowLeft className="nav-icon" />

                            <div className="nav-content">
                                <small>Previous</small>
                                <h4>{blogData[0]?.navTitle}</h4>   {/* Previous */}
                            </div>
                        </div>

                        {/* NEXT */}
                        <div className="blog-details-nav-card">
                            <div className="nav-content">
                                <small>Next</small>
                                <h4>{blogData[0]?.shortTitle}</h4>  {/* 👈 Crafting */}
                            </div>

                            <FaArrowRight className="nav-icon" />
                        </div>

                    </div>

                    {/* comment section  */}

                <section className="comments-box">

  <h2>{commentsData.length} Comments</h2>

  {commentsData.map((comment) => (
    <div className="comment-item" key={comment.id}>

      <img
        className="comment-avatar"
        src={comment.img}
        alt={comment.name}
      />

      <div className="comment-body">

        <h4>{comment.name}</h4>

        <span>{comment.date}</span>

        <p>{comment.text}</p>

        <a href="#" className="reply-btn">
          <FaReply /> Reply
        </a>

      </div>

    </div>
  ))}

</section>




{/* FORM */}
<section className="blog-details-reply-box">

    <h2 className="blog-details-reply-title">Leave a Reply</h2>

    <p className="blog-details-reply-text">
        Your email address will not be published. Required fields are marked *
    </p>

    <form className="blog-details-reply-form">

        <div className="blog-details-row-two">
            <input
                className="blog-details-input"
                placeholder="Name"
            />

            <input
                className="blog-details-input"
                placeholder="Email"
            />
        </div>

        <input
            className="blog-details-input"
            placeholder="Website"
        />

        <textarea
            className="blog-details-textarea"
            rows="7"
            placeholder="Comment"
        ></textarea>

        <button className="blog-details-btn">
             Post  A Comment
        </button>

    </form>

</section>
                </main>

                {/* SIDEBAR */}
            <aside className="BlogDetailssidebar">

  <div className="BlogDetailssidebarCard">

    {/* SEARCH */}
    <div className="BlogDetailssidebar_section">
      <h4>Search</h4>

      <div className="BlogDetailssearchBox">
        <input placeholder="Search..." />
        <span className="search_icon">
          <FaSearch />
        </span>
      </div>
    </div>

    {/* LATEST POST */}
    <div className="BlogDetailssidebar_section">
      <h4>Latest Post</h4>

      {blogData.slice(0, 3).map((blogData, i) => (
        <div className="BlogDetailsrecentPost" key={i}>
          <img src={blogData.img} alt="" />
          <div>
            <p>{blogData.title}</p>
            <span className="BlogDetailsrecent_date">
              <FaRegCalendarAlt />
              {blogData.date}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* CATEGORY */}
    <div className="BlogDetailssidebar_section">
      <h4>Categories</h4>

      <ul className="BlogDetailscategories">
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
    <div className="BlogDetailssidebar_section">
      <div className="BlogDetailsbanner_box">
        <img src={blog1sidebar} alt="sidebar banner" />
      </div>
    </div>

    {/* TAGS */}
    <div className="BlogDetailssidebar_section">
      <h4>Tags</h4>

      <div className="BlogDetailstags">
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