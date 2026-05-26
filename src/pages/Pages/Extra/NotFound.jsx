import React from "react";
import "./NotFound.css";
import notFoundImg from "../../../assets/images/pagenotfound.png";
import shape15 from "../../../assets/images/shape-15.png";

function NotFound() {
  return (
    <>
      {/* 🔥 BANNER */}
       <section className="banner">
            <img src={shape15} className="shapeRight" alt="" />

            <div className="bannerContent">
               <h1>404: Error Not Found </h1>

               <p className="breadcrumb">
                  <span className="home">Home</span>
                  <span className="sep"> &gt; </span>
                  <span className="active">
Error 404</span>
               </p>
            </div>
         </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="notfound_error-section">
        <div className="notfound_error-box">
          {/* IMAGE */}
          <img src={notFoundImg} alt="404 Not Found" />

          {/* TEXT */}
          <h2>404 - Page Not Found</h2>

          <p>The page you are looking for does not exist.</p>

          {/* BUTTON */}
          <a href="/" className="notfound_home-btn">
            ← Back to Homepage
          </a>
        </div>
      </section>
    </>
  );
}

export default NotFound;