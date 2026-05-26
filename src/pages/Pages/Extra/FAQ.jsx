

import React, { useState } from "react";
import "./Faqs.css";

function Faqs() {

const faqData = {
"General Questions":[
{
question:"What kind of support does EduBlink provide?",
answer:"Support includes documentation, live chat and email assistance."
},
{
question:"How long it take to create a video course?",
answer:"It usually takes a few weeks depending on content."
}
],

"Regular Questions":[
{
question:"How long do I get support & updates?",
answer:"Support depends on your subscription plan."
},
{
question:"How can I contact a school directly?",
answer:"Via official website or email support."
}
],

"Advanced Questions":[
{
question:"Where can I find information on private companies?",
answer:"Through official company directories and platforms."
}
],

"Company Policies":[
{
question:"How long is my personal free trial?",
answer:"Usually 7 to 30 days depending on service."
}
],

"Payment Options":[
{
question:"How do I find a school where I want to study?",
answer:"Search by location, courses and ranking."
}
],

"Terms & Conditions":[
{
question:"What are terms and conditions?",
answer:"They define rules and usage policies."
}
]
};

const categories = Object.keys(faqData);

const [activeCategory,setActiveCategory] = useState(0);
const [activeIndex,setActiveIndex] = useState(0);

const handleCategory = (index)=>{
setActiveCategory(index);
setActiveIndex(0);
};

const toggleFAQ=(index)=>{
setActiveIndex(activeIndex===index ? null : index);
};


/* 🔥 IMPORTANT: reorder logic */
const selectedCategory = categories[activeCategory];

const orderedFaqs = [
...faqData[selectedCategory], // selected category FIRST
...categories
.filter(cat => cat !== selectedCategory)
.flatMap(cat => faqData[cat]) // rest all categories
];



return(
<>

 {/* 🔥 BANNER */}
       <section className="banner">

            <div className="bannerContent">
               <h1>Faq’s </h1>

               <p className="breadcrumb">
                  <span className="home">Home</span>
                  <span className="sep"> &gt; </span>
                  <span className="active">
faq’s</span>
               </p>
            </div>
         </section>


{/* FAQ SECTION FIRST */}
<section className="faq-section">

<div className="faq-container">

{/* LEFT */}
<div className="faq-left">

<h2>Questions By This Category</h2>

<p>
Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex tempor incididunt labore.
</p>

<ul>
{
categories.map((item,index)=>(
<li
key={index}
onClick={()=>handleCategory(index)}
className={activeCategory===index ? "active-category" : ""}
>
{activeCategory===index ? `→ ${item}` : item}
</li>
))
}
</ul>

</div>

{/* RIGHT */}
<div className="faq-right">


{
orderedFaqs.map((item,index)=>(
<div className="faq-box" key={index}>

<button
className={`faq-question ${activeIndex===index ? "open":""}`}
onClick={()=>toggleFAQ(index)}
>

{item.question}

<span>
{activeIndex===index ? "−" : "+"}
</span>

</button>

{
activeIndex===index && (
<div className="faq-answer">
<p>{item.answer}</p>
</div>
)
}

</div>
))
}

</div>

</div>

</section>



{/* HERO CTA LAST (BOTTOM) */}
<section className="faq-hero-cta">

  <div className="faq-hero-content">
<h1>
  Get Your Quality Skills <span className="highlight">Certificate</span> <br />
  Through EduBlink
</h1>

    <button className="faq-cta-btn">
      Get Start Now
    </button>

  </div>

</section>

</>
);


}

export default Faqs;