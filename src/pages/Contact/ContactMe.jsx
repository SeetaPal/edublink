import React, { useState } from "react";
import "./ContactMe.css";

import contactImg from "../../assets/images/contact-me.jpg";
import shape15 from "../../assets/images/shape-15.png";
import shape13 from "../../assets/images/shape-13.png";
import shapeCircleRed from "../../assets/images/shapeCircleRed.png";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactMe = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit form
  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully ✅");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      } else {
        alert("Error: " + JSON.stringify(data));
      }

    } catch (error) {
      alert("Server error ❌");
    }

    setLoading(false);
  };

  return (
    <>
      {/* ===== BANNER ===== */}
      <section className="contactMe_banner">
        <img src={shape13} className="contactMe_shapeLeft" alt="" />
        <img src={shape15} className="contactMe_shapeRight" alt="" />
        <img src={shapeCircleRed} className="contactMe_shapeCircle" alt="" />

        <div className="contactMe_bannerContent">
          <h1>Contact Me</h1>
        </div>
      </section>

      {/* ===== MAIN SECTION ===== */}
      <section className="contactMe_main">

        <img src={contactImg} className="contactMe_image" alt="contact" />

        <div className="contactMe_right">
          <h2>
            I will Answer all Your <span>Questions</span>
          </h2>

          <div className="contactMe_box">
            <h4>Email</h4>
            <p><a href="mailto:yourmail@gmail.com">yourmail@gmail.com</a></p>
          </div>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="contactMe_formSection">
        <div className="contactMe_formBox">

          <h2>Just Drop Me a Line</h2>

          <div className="contactMe_row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button onClick={handleSubmit} disabled={loading}>
            {loading ? "Sending..." : "Submit Now →"}
          </button>

        </div>
      </section>
    </>
  );
};

export default ContactMe;