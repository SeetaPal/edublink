import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

function Footer() {
  return (
  <footer className="footer-main">

  <div className="footer-container-main">

    <div className="footer-col-main">
      <img src={logo} alt="logo" className="footer-logo-main" />

      <p>
        Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
        incidid unt labore dolore.
      </p>

      <p><strong>Add:</strong> 70-80 Upper St Norwich NR2</p>
      <p><strong>Call:</strong> +01 123 5641 231</p>
      <p><strong>Email:</strong> info@edublink.co</p>
    </div>

    <div className="footer-col-main">
      <h4>Online Platform</h4>
      <ul>
        <li>About</li>
        <li>Course</li>
        <li>Instructor</li>
        <li>Events</li>
        <li>Instructor Details</li>
        <li>Purchase Guide</li>
      </ul>
    </div>

    <div className="footer-col-main">
      <h4>Links</h4>
      <ul>
        <li>Contact Us</li>
        <li>Gallery</li>
        <li>News & Articles</li>
        <li>FAQ’s</li>
        <li>Coming Soon</li>
        <li>Sign In/Registration</li>
      </ul>
    </div>

    <div className="footer-col-main">
      <h4>Contacts</h4>

      <p>Enter your email for newsletter</p>

      <input type="email" placeholder="Your email" className="footer-input-main"/>
      <button className="footer-btn-main">Subscribe</button>

      <div className="footer-social-main">
        <FaFacebookF />
        <FaLinkedinIn />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
    </div>

  </div>

  <div className="footer-bottom-main">
    <p>
      Copyright 2026{" "}
      <span className="footer-highlight">EduBlink</span> | Developed By{" "}
      <span className="footer-highlight">DevsBlink</span>. All Rights Reserved
    </p>
  </div>

</footer>
  );
}

export default Footer;