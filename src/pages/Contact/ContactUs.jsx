import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";

import shape15 from "../../assets/images/shape-15.png";
import shape16 from "../../assets/images/shape-16.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ContactUs() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/contact/",
        formData
      );

      alert("Message sent successfully ✅");

      // RESET FORM
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.log(error.response?.data);

      if (error.response?.data) {
        alert(JSON.stringify(error.response.data));
      } else {
        alert("Something went wrong ❌");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ===== BANNER ===== */}
      <section className="contactUs_banner">
        <img src={shape16} className="contactUs_shapeLeft" alt="" />
        <img src={shape15} className="contactUs_shapeRight" alt="" />

        <div className="contactUs_bannerContent">
          <h1>Contact Us</h1>
          <p className="contactUs_breadcrumb">
            <span className="contactUs_home">Home</span>
            <span className="contactUs_sep"> &gt; </span>
            <span className="contactUs_active">Contact Us</span>
          </p>
        </div>
      </section>

      {/* ===== MAIN ===== */}
      <section className="contactUs_section">
        <div className="contactUs_container">

          {/* LEFT */}
          <div className="contactUs_left">
            <h2 className="contactUs_title">
              We're Always Eager to <br /> Hear From You!
            </h2>

            <div className="contactUs_infoBox">
              <div className="contactUs_infoItem">
                <h4>Address</h4>
                <p>Mumbai, Maharashtra, India</p>
              </div>

              <div className="contactUs_infoItem">
                <h4>Email</h4>
                <p>yourmail@gmail.com</p>
              </div>

              <div className="contactUs_infoItem">
                <h4>Phone</h4>
                <p>+91 99999 99999</p>
              </div>
            </div>

            <div className="contactUs_social">
              <div><FaFacebookF /></div>
              <div><FaInstagram /></div>
              <div><FaTwitter /></div>
              <div><FaLinkedinIn /></div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contactUs_right">
            <div className="contactUs_formCard">

              <h2 className="contactUs_formTitle">Get In Touch</h2>
              <p className="contactUs_formText">
                Fill out this form and we’ll get back to you soon.
              </p>

              <form className="contactUs_form" onSubmit={handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                />

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

                <button disabled={loading}>
                  {loading ? "Sending..." : "Submit Message →"}
                </button>

              </form>

            </div>
          </div>

        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="contactUs_map">
        <iframe
          title="London Eye Map"
          src="https://www.google.com/maps?q=London+Eye,+Riverside+Building,+County+Hall,+Westminster+Bridge+Rd,+London+SE1+7PB,+UK&output=embed"
          loading="lazy"
        />
      </section>
    </>
  );
}

export default ContactUs;