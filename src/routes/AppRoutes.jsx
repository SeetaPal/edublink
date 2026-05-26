import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

// HOME
import Home from "../pages/Home/Home";
// import BusinessCoach from "../pages/Home/subpages/BusinessCoach";
// import Programming from "../pages/Home/subpages/Programming";
// import OnlineArt from "../pages/Home/subpages/OnlineArt";
// PAGES



// ABOUT
import About1 from "../pages/Pages/About/About1";
import About2 from "../pages/Pages/About/About2";
import About3 from "../pages/Pages/About/About3";

// INSTRUCTOR
import Instructor1 from "../pages/Pages/Instructor/Instructor1.jsx";
import Instructor2 from "../pages/Pages/Instructor/Instructor2.jsx";
import Instructor3 from "../pages/Pages/Instructor/Instructor3.jsx";
import InstructorDetails from "../pages/Pages/Instructor/InstructorDetails.jsx";

// EVENT
import Event1 from "../pages/Pages/Event/Event1.jsx";
import Event2 from "../pages/Pages/Event/Event2.jsx";

// SHOP
import ProductDetails from "../pages/Pages/Shop/ProductDetails.jsx";
import ViewCart from "../pages/Pages/Shop/ViewCart.jsx";


// EXTRA PAGES
import Zoom from "../pages/Pages/Extra/Zoom.jsx";
import FAQ from "../pages/Pages/Extra/FAQ.jsx";
import Pricing from "../pages/Pages/Extra/Pricing.jsx";
import Policy from "../pages/Pages/Extra/Policy.jsx";
import ComingSoon from "../pages/Pages/Extra/ComingSoon.jsx";
import NotFound from "../pages/Pages/Extra/NotFound.jsx";

// Courses Pages
import CoursesStyle1 from "../pages/Courses/CoursesStyle1";
import CoursesStyle2 from "../pages/Courses/CoursesStyle2";
import CoursesStyle3 from "../pages/Courses/CoursesStyle3";
import CoursesStyle4 from "../pages/Courses/CoursesStyle4.jsx";
import CoursesStyle5 from "../pages/Courses/CoursesStyle5.jsx";

// CourseDetails
import CoursesDetails1 from "../pages/Courses/CourseDetails/CoursesDetails1.jsx";
 import CoursesDetails2 from "../pages/Courses/CourseDetails/CoursesDetails2.jsx";
 import CoursesDetails3 from "../pages/Courses/CourseDetails/CoursesDetails3.jsx";
 import CoursesDetails4 from "../pages/Courses/CourseDetails/CoursesDetails4.jsx";
 import CoursesDetails5 from "../pages/Courses/CourseDetails/CoursesDetails5.jsx";

import CoursesFilterLeft from "../pages/Courses/CoursesFilterLeft";
import CoursesFilterRight from "../pages/Courses/CoursesFilterRight";
import CoursesCategory from "../pages/Courses/CoursesCategory";


// BLOG
import BlogStyle1 from "../pages/Blog/BlogStyle1";
import BlogStyle2 from "../pages/Blog/BlogStyle2";
import BlogStandard from "../pages/Blog/BlogStandard";
import BlogDetails from "../pages/Blog/BlogDetails";

//  CONTACT
import ContactUs from "../pages/Contact/ContactUs";
import ContactMe from "../pages/Contact/ContactMe";






function AppRoutes() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/business-coach" element={<BusinessCoach />} />
          <Route path="/programming" element={<Programming />} />
          <Route path="/online-art" element={<OnlineArt />} /> */}

          {/* PAGES */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/event" element={<Event />} />
          <Route path="/shopping" element={<Shopping />} /> */}

          {/* ABOUT */}
          <Route path="/about1" element={<About1 />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/about3" element={<About3 />} />

          {/* INSTRUCTOR */}
          <Route path="/inst1" element={<Instructor1 />} />
          <Route path="/inst2" element={<Instructor2 />} />
          <Route path="/inst3" element={<Instructor3 />} />
          <Route path="/inst4" element={<InstructorDetails />} />



          {/* EVENT */}
          <Route path="/event1" element={<Event1 />} />
          <Route path="/event2" element={<Event2 />} />

          {/* SHOP */}
          <Route path="/product/1" element={<ProductDetails />} />
                    <Route path="/productview/2" element={<ViewCart />} />


          {/* EXTRA */}
          <Route path="/zoom" element={<Zoom />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/coming" element={<ComingSoon />} />
          <Route path="/notfound" element={<NotFound />} />

          {/* 404
      <Route path="*" element={<NotFound />} /> */}


          {/* ✅ COURSES STYLE */}
          {/* 🎯 COURSES STYLE */}
          <Route path="/courses-style1" element={<CoursesStyle1 />} />
          <Route path="/courses-style2" element={<CoursesStyle2 />} />
          <Route path="/courses-style3" element={<CoursesStyle3 />} />
          <Route path="/courses-style4" element={<CoursesStyle4 />} />
          <Route path="/courses-style5" element={<CoursesStyle5 />} />


          {/* 🔥 COURSE DETAILS (DYNAMIC) */}
          <Route path="/course-details/1" element={<CoursesDetails1 />} />
           <Route path="/course-details/2" element={<CoursesDetails2 />} />
           <Route path="/course-details/3" element={<CoursesDetails3 />} />
         <Route path="/course-details/4" element={<CoursesDetails4 />} />
         <Route path="/course-details/5" element={<CoursesDetails5 />} /> 


          {/* 🎯 FILTER */}
          <Route path="/courses-filter-left" element={<CoursesFilterLeft />} />
          <Route path="/courses-filter-right" element={<CoursesFilterRight />} />

          {/* 🎯 CATEGORY */}
          <Route path="/courses-category" element={<CoursesCategory />} />

          {/* BLOG */}
          <Route path="/blog-style1" element={<BlogStyle1 />} />
          <Route path="/blog-style2" element={<BlogStyle2 />} />
          <Route path="/blog-standard" element={<BlogStandard />} />
          <Route path="/blog-details" element={<BlogDetails />} />

          {/* CONTACT */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-me" element={<ContactMe />} />


         


        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoutes;