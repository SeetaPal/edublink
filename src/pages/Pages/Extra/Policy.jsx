import React from "react";
import "./Policy.css";
import shape15 from "../../../assets/images/shape-15.png";

function Policy() {
  return (
    <>
      {/* 🔥 BANNER (UNCHANGED) */}
      <section className="banner">
        <img src={shape15} className="shapeRight" alt="" />

        <div className="bannerContent">
          <h1>Privacy Policy</h1>

          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">Privacy Policy</span>
          </p>
        </div>
      </section>

      {/* 🔥 CONTENT */}
      <section className="policy-section">
        <div className="policy-container">



          <h2>Definitions of Privacy Policy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <h2>General Information</h2>
          <p>
            We collect information to improve our services and provide better
            user experience. This may include personal and non-personal data
            depending on your interaction with our website.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <h2>Availability of Website</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.</p>

          <ul className="tick-list">
            <li>Internet Protocol (IP) address</li>
            <li>Browser type and operating system</li>
            <li>Date and time of visit</li>
            <li>Pages viewed and user activity</li>
          </ul>


          <h2>Privacy Policies</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat.          </p>

          {/* 7 */}
          <h2>Third Party Policies</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat.          </p>

          <ul className="tick-list">
            <li>The Company name, the Company logo, and all related names, logos,
              product and service names, designs</li>
            <li>
              No right, title or interest in or to the online course or any portion thereof, is
              transferred to any Member, and all rights not expressly granted herein, are
              reserved by the Company.</li>
            <li>The online course is owned by the Company and is protected by American
              and international copyright, trademark, patent, trade secret and other
              intellectual property or proprietary rights laws.</li>
          </ul>

          <h2>Online Privacy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.          </p>






        </div>
      </section>
    </>
  );
}

export default Policy;