import React from "react";
import "./Pricing.css";

function Pricing() {

const plans = [
{
title: "SILVER PLAN",
price: "$29.00",
desc: "Per month",
 features: [
      { text: "Individual Course", active: true },
      { text: "Course Learning Checks", active: true },
      { text: "Offline Learning", active: true },
      { text: "Course Discussions", active: false },
      { text: "One to One Guidance", active: false }
    ]
},
{
title: "GOLD PLAN",
price: "$49.00",
desc: "Per month",
 features: [
      { text: "Individual Course", active: true },
      { text: "Course Learning Checks", active: true },
      { text: "Offline Learning", active: true },
      { text: "Course Discussions", active: true },
      { text: "One to One Guidance", active: false }
    ]
},
{
title: "DIAMOND PLAN",
price: "$79.00",
desc: "Per month",
features: [
      { text: "Individual Course", active: true },
      { text: "Course Learning Checks", active: true },
      { text: "Offline Learning", active: true },
      { text: "Course Discussions", active: true },
      { text: "One to One Guidance", active: true }
    ]
}
];

return (
<>
  



 {/* 🔥 BANNER (UNCHANGED) */}
      <section className="banner">
        {/* <img src={shape15} className="shapeRight" alt="" /> */}
        <div className="bannerContent">
  <h1>Pricing Table</h1>

          <p className="breadcrumb">
            <span className="home">Home</span>
            <span className="sep"> &gt; </span>
            <span className="active">Pricing Table</span>
          </p>
        </div>
      </section>


{/* PRICING SECTION */}
<section className="pricing-section">

{/* 🔥 THIS WAS MISSING */}
<div className="pricing-title">
  <h5>PRICING TABLE</h5>
  <h2>Great Membership Plan</h2>
</div>

<div className="pricing-container">

{
plans.map((plan,index)=>(
<div className="pricing-card" key={index}>

<h3>{plan.title}</h3>
<h2>{plan.price}</h2>
<p className="month">{plan.desc}</p>

<p className="desc">
 Lorem ipsum dolor sit amet consect
  adipisicing elit sed. do eilt sed
  </p>

<ul className="feature-list">
  {plan.features.map((item, i) => (
    <li key={i} className={item.active ? "active" : "inactive"}>
      <span className="tick">✔</span>
      {item.text}
    </li>
  ))}
</ul>

<button
  className={`select-btn ${index === 1 ? "featured-btn" : "normal-btn"}`}
>
  Select Plan
</button>

</div>
))
}

</div>

</section>

</>
);

}

export default Pricing;