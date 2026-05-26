// import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
// import { FaPhoneAlt, FaEnvelope, FaSearch, FaShoppingCart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import dropdownImg from "../../assets/images/home-dropdown.webp";
// import logo from "../../assets/images/logo.png";
// import "./Navbar.css";
// import AuthModal from "../AuthModal/AuthModal";
// import { useState, useEffect } from "react";

// function CustomNavbar() {
//   const [showAuth, setShowAuth] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [openMenu, setOpenMenu] = useState({});

//   const handleOpen = () => setShowAuth(true);
//   const handleClose = () => setShowAuth(false);

//   const toggleMenu = (menu) => {
//     setOpenMenu((prev) => ({
//       ...prev,
//       [menu]: !prev[menu],
//     }));
//   };

//   // body scroll lock
//   useEffect(() => {
//     document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
//   }, [sidebarOpen]);

//   return (
//     <>
//       {/* 🔝 TOP BAR */}
//       <div className="topbar">
//         <div className="top-left">
//           <span><FaPhoneAlt /> 5678904567</span>
//           <span><FaEnvelope /> info@edublink.co</span>
//         </div>

//         <div className="top-right">
//           <Link to="#" onClick={handleOpen}>Login / Register</Link>
//           <button className="apply-btn">Apply Now</button>
//         </div>
//       </div>

//       {/* 🔽 NAVBAR */}
//       <Navbar expand="lg" className="main-navbar">
//         <Container>

//           {/* LOGO */}
//           <Navbar.Brand as={Link} to="/">
//             <img src={logo} alt="logo" className="logo" />
//           </Navbar.Brand>

//           {/* 🔥 HAMBURGER */}
//           {/* <Navbar.Toggle
//             onClick={() => setSidebarOpen(true)}
//             className="d-lg-none"
//           /> */}

//           <div
//   className="hamburger d-lg-none"
//   onClick={() => setSidebarOpen(true)}
// >
//   <span></span>
//   <span></span>
//   <span></span>
// </div>

//           {/* DESKTOP MENU */}
//           <Navbar.Collapse className="d-none d-lg-flex">
//             <Nav className="mx-auto">

//               {/* HOME */}
//               <NavDropdown title="Home" className="custom-dropdown">
//                 <div className="dropdown-flex">
//                   <div className="dropdown-left">
//                     <Link to="/business-coach">Business Coach</Link>
//                     <Link to="/programming">Programming</Link>
//                     <Link to="/distant-learning">Distant Learning</Link>
//                   </div>
//                   <div className="dropdown-right">
//                     <img src={dropdownImg} alt="dropdown" />
//                   </div>
//                 </div>
//               </NavDropdown>

//               {/* PAGES */}
//               <NavDropdown title="Pages" className="custom-dropdown">
//                 <div className="dropdown-grid">
//                   <Link to="/about1">About Us</Link>
//                   <Link to="/inst1">Instructor</Link>
//                   <Link to="/event1">Event</Link>
//                 </div>
//               </NavDropdown>

//               {/* COURSES */}
//               <NavDropdown title="Courses" className="custom-dropdown">
//                 <div className="dropdown-grid">
//                   <Link to="/courses-style1">Courses Style</Link>
//                   <Link to="/courses-details1">Courses Details</Link>
//                 </div>
//               </NavDropdown>

//               {/* BLOG */}
//               <NavDropdown title="Blog" className="custom-dropdown">
//                 <div className="dropdown-grid">
//                   <Link to="/blog-style1">Blog Style</Link>
//                   <Link to="/blog-details">Blog Details</Link>
//                 </div>
//               </NavDropdown>

//               {/* CONTACT */}
//               <NavDropdown title="Contact" className="custom-dropdown">
//                 <div className="dropdown-grid">
//                   <Link to="/contact-us">Contact Us</Link>
//                   <Link to="/contact-me">Contact Me</Link>
//                 </div>
//               </NavDropdown>

//             </Nav>

//             {/* RIGHT ICONS */}
//             <div className="nav-icons">
//               <FaSearch />
//               <FaShoppingCart />
//             </div>
//           </Navbar.Collapse>

//           {/* 🔥 MOBILE SIDEBAR */}
//           <div className={`mobile-sidebar ${sidebarOpen ? "active" : ""}`}>

//             <div className="sidebar-header">
//               <span onClick={() => setSidebarOpen(false)}>✕</span>
//             </div>

//             <ul className="mobile-menu">

//               {/* HOME */}
//               <li>
//                 <div className="menu-title" onClick={() => toggleMenu("home")}>
//                   Home <span>{openMenu.home ? "-" : "+"}</span>
//                 </div>
//                 {openMenu.home && (
//                   <div className="submenu">
//                     <Link to="/business-coach">Business Coach</Link>
//                     <Link to="/programming">Programming</Link>
//                     <Link to="/distant-learning">Distant Learning</Link>
//                   </div>
//                 )}
//               </li>

//               {/* PAGES */}
//               {/* <li>
//                 <div className="menu-title" onClick={() => toggleMenu("pages")}>
//                   Pages <span>{openMenu.pages ? "-" : "+"}</span>
//                 </div>
//                 {openMenu.pages && (
//                   <div className="submenu">
//                     <Link to="/about1">About</Link>
//                     <Link to="/inst1">Instructor</Link>
//                     <Link to="/event1">Event</Link>
//                   </div>
//                 )}
//               </li> */}

//               {/* COURSES */}
//              {/* PAGES */}
// <li>
//   <div className="menu-title" onClick={() => toggleMenu("pages")}>
//     Pages <span>{openMenu.pages ? "-" : "+"}</span>
//   </div>

//   {openMenu.pages && (
//     <div className="submenu">

//       {/* ABOUT */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("about")}
//       >
//         About Us <span>{openMenu.about ? "-" : "+"}</span>
//       </div>

//       {openMenu.about && (
//         <div className="submenu-inner">
//           <Link to="/about1">About Us 1</Link>
//           <Link to="/about2">About Us 2</Link>
//           <Link to="/about3">About Us 3</Link>
//         </div>
//       )}

//       {/* INSTRUCTOR */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("inst")}
//       >
//         Instructor <span>{openMenu.inst ? "-" : "+"}</span>
//       </div>

//       {openMenu.inst && (
//         <div className="submenu-inner">
//           <Link to="/inst1">Instructor 1</Link>
//           <Link to="/inst2">Instructor 2</Link>
//           <Link to="/inst3">Instructor 3</Link>
//           <Link to="/inst4">Instructor Details</Link>
//         </div>
//       )}

//       {/* EVENT */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("event")}
//       >
//         Event Pages <span>{openMenu.event ? "-" : "+"}</span>
//       </div>

//       {openMenu.event && (
//         <div className="submenu-inner">
//           <Link to="/event1">Event Style 1</Link>
//           <Link to="/event2">Event Style 2</Link>
//         </div>
//       )}

//       {/* SHOP */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("shop")}
//       >
//         Shop Pages <span>{openMenu.shop ? "-" : "+"}</span>
//       </div>

//       {openMenu.shop && (
//         <div className="submenu-inner">
//           <Link to="/product/1">Product 1</Link>
//           <Link to="/product/2">Product 2</Link>
//         </div>
//       )}

//       {/* SIMPLE LINKS */}
//       <Link to="/zoom">Zoom Meeting</Link>
//       <Link to="/faq">FAQ</Link>
//       <Link to="/pricing">Pricing</Link>
//       <Link to="/policy">Privacy Policy</Link>
//       <Link to="/coming">Coming Soon</Link>
//       <Link to="/notfound">404</Link>

//     </div>
//   )}
// </li>

// {/* Courses */}
// {/* COURSES */}
// <li>
//   <div className="menu-title" onClick={() => toggleMenu("courses")}>
//     Courses <span>{openMenu.courses ? "-" : "+"}</span>
//   </div>

//   {openMenu.courses && (
//     <div className="submenu">

//       {/* COURSES STYLE */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("cstyle")}
//       >
//         Courses Style <span>{openMenu.cstyle ? "-" : "+"}</span>
//       </div>

//       {openMenu.cstyle && (
//         <div className="submenu-inner">
//           <Link to="/courses-style1">Courses Style 1</Link>
//           <Link to="/courses-style2">Courses Style 2</Link>
//           <Link to="/courses-style3">Courses Style 3</Link>
//           <Link to="/courses-style4">Courses Style 4</Link>
//           <Link to="/courses-style5">Courses Style 5</Link>
//         </div>
//       )}

//       {/* COURSES DETAILS */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("cdetail")}
//       >
//         Courses Details <span>{openMenu.cdetail ? "-" : "+"}</span>
//       </div>

//       {openMenu.cdetail && (
//         <div className="submenu-inner">
//           <Link to="/courses-details1">Course Details 1</Link>
//           <Link to="/course-details/2">Course Details 2</Link>
//           <Link to="/course-details/3">Course Details 3</Link>
//           <Link to="/course-details/4">Course Details 4</Link>
//           <Link to="/course-details/5">Course Details 5</Link>
//         </div>
//       )}

//       {/* COURSES FILTER */}
//       <div
//         className="submenu-title"
//         onClick={() => toggleMenu("cfilter")}
//       >
//         Courses Filter <span>{openMenu.cfilter ? "-" : "+"}</span>
//       </div>

//       {openMenu.cfilter && (
//         <div className="submenu-inner">
//           <Link to="/courses-filter-left">Filter Sidebar Left</Link>
//           <Link to="/courses-filter-right">Filter Sidebar Right</Link>
//           <Link to="/courses-category">Filter Category</Link>
//         </div>
//       )}

//     </div>
//   )}
// </li>

// {/* BLOG */}
//              <li>
//   <div className="menu-title" onClick={() => toggleMenu("blog")}>
//     Blog <span>{openMenu.blog ? "-" : "+"}</span>
//   </div>

//   {openMenu.blog && (
//     <div className="submenu">
//       <Link to="/blog-style1">Blog Style 1</Link>
//       <Link to="/blog-style2">Blog Style 2</Link>
//       <Link to="/blog-standard">Blog Standard</Link>
//       <Link to="/blog-details">Blog Details</Link>
//     </div>
//   )}
// </li>

// {/* CONTACT */}
// <li>
//   <div className="menu-title" onClick={() => toggleMenu("contact")}>
//     Contact <span>{openMenu.contact ? "-" : "+"}</span>
//   </div>

//   {openMenu.contact && (
//     <div className="submenu">
//       <Link to="/contact-us">Contact Us</Link>
//       <Link to="/contact-me">Contact Me</Link>
//     </div>
//   )}
// </li>

//             </ul>
//           </div>

//         </Container>
//       </Navbar>

//       {/* 🔥 OVERLAY */}
//       {sidebarOpen && (
//         <div className="overlay" onClick={() => setSidebarOpen(false)}></div>
//       )}

//       {/* 🔥 AUTH MODAL */}
//       <AuthModal show={showAuth} handleClose={handleClose} />
//     </>
//   );
// }

// export default CustomNavbar; 


// old
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import dropdownImg from "../../assets/images/home-dropdown.webp";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import AuthModal from "../AuthModal/AuthModal";
import { useState } from "react";


function CustomNavbar() {
const [showAuth, setShowAuth] = useState(false);

    const handleOpen = () => setShowAuth(true);
    const handleClose = () => setShowAuth(false);

    return (
        <>
            {/* 🔝 TOP BAR */}
            <div className="topbar">
                <div className="top-left">
                    <span><FaPhoneAlt /> 5678904567</span>
                    <span><FaEnvelope /> info@edublink.co</span>
                </div>

                <div className="top-right">
<Link to="#" onClick={handleOpen}>
  Login / Register
</Link>          
          <button className="apply-btn">Apply Now</button>
                </div>
            </div>

            {/* 🔽 NAVBAR */}
            <Navbar expand="lg" className="main-navbar">
                <Container>

                    {/* LOGO */}
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>

                        <Nav className="mx-auto">

                            {/* HOME */}
                            <NavDropdown title="Home" className="custom-dropdown">
                                <div className="dropdown-flex">

                                    {/* LEFT SIDE CONTENT */}
                                    <div className="dropdown-left">
                                        <Link to="/business-coach">Business Coach</Link>
                                        <Link to="/programming">Programming</Link>
                                        <Link to="/distant-learning">distant-learning</Link>


                                    </div>

                                    {/* RIGHT SIDE IMAGE */}
                                    <div className="dropdown-right">
                                        <img src={dropdownImg} alt="dropdown" />
                                    </div>

                                </div>
                            </NavDropdown>

                            {/* PAGES */}
                            <NavDropdown title="Pages" className="custom-dropdown">
                                <div className="dropdown-grid">

                                    {/* ABOUT */}
                                    <div className="nested-dropdown">
                                        <span>About Us ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/about1">About Us 1</Link>
                                            <Link to="/about2">About Us 2</Link>
                                            <Link to="/about3">About Us 3</Link>
                                        </div>
                                    </div>

                                    {/* INSTRUCTOR */}
                                    <div className="nested-dropdown">
                                        <span>Instructor ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/inst1">Instructor 1</Link>
                                            <Link to="/inst2">Instructor 2</Link>
                                            <Link to="/inst3">Instructor 3</Link>

                                            <Link to="/inst4">Instructor Details</Link>
                                        </div>
                                    </div>

                                    {/* Event Pages */}
                                    <div className="nested-dropdown">
                                        <span>Event Pages ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/event1">Event Style 1</Link>
                                            <Link to="/event2">Event Style 2</Link>
                                        </div>
                                    </div>

                                    {/* Shop Pages */}
                                    <div className="nested-dropdown">
                                        <span>Shop Pages ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/product/1">ProductDetails </Link>
                                            <Link to="/productview/2">View Cart</Link>
                                        </div>
                                    </div>

                                    <Link to="/zoom">Zoom Meeting</Link>
                                    <Link to="/faq">FAQ`s</Link>
                                    <Link to="/pricing">Pricing Table</Link>
                                    <Link to="/policy">Privacy Policy</Link>
                                    <Link to="/coming">Coming Soon</Link>
                                    <Link to="/notfound">404</Link>
                                </div>
                            </NavDropdown>

                            {/* COURSES */}
                            <NavDropdown title="Courses" className="custom-dropdown">
                                <div className="dropdown-grid">

                                    {/* Courses Style */}
                                    <div className="nested-dropdown">
                                        <span>Courses Style ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/courses-style1">Courses Style 1</Link>
                                            <Link to="/courses-style2">Courses Style 2</Link>
                                            <Link to="/courses-style3">Courses Style 3</Link>
                                             <Link to="/courses-style4">Courses Style 4</Link>
                                            <Link to="/courses-style5">Courses Style 5</Link>

                                        </div>
                                    </div>

                                    {/* Courses Details */}
                                    <div className="nested-dropdown">
                                        <span>Courses Details ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/course-details/1">Course Details 1</Link>
                                            <Link to="/course-details/2">Course Details 2</Link>
                                            <Link to="/course-details/3">Course Details 3</Link>
                                            <Link to="/course-details/4">Course Details 4</Link>
                                            <Link to="/course-details/5">Course Details 5</Link>
                                        </div>
                                    </div>

                                    {/* Courses Filter */}
                                    <div className="nested-dropdown">
                                        <span>Courses Filter ▶</span>
                                        <div className="nested-menu">
                                            <Link to="/courses-filter-left">Filter Sidebar Left</Link>
                                            <Link to="/courses-filter-right">Filter Sidebar Right</Link>

                                            <Link to="/courses-category">Filter Category</Link>
                                        </div>
                                    </div>
                                </div>
                            </NavDropdown>

                            {/* BLOG */}
                            <NavDropdown title="Blog" className="custom-dropdown">
                                <div className="dropdown-grid">
                                    <Link to="/blog-style1">Blog Style 1</Link>
                                    <Link to="/blog-style2">Blog Style 2</Link>
                                    <Link to="/blog-standard">Blog Standard</Link>
                                    <Link to="/blog-details">Blog Details</Link>
                                </div>
                            </NavDropdown>

                            {/* CONTACT */}
                            <NavDropdown title="Contact" className="custom-dropdown">
                                <div className="dropdown-grid">
                                    <Link to="/contact-us">Contact Us</Link>
                                    <Link to="/contact-me">Contact Me</Link>
                                </div>
                            </NavDropdown>

                        </Nav>

                        {/* RIGHT ICONS */}
                       <div className="nav-icons">
  <FaSearch />
  <FaShoppingCart />
</div>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
             {/* 🔥 AUTH MODAL */}
            <AuthModal show={showAuth} handleClose={handleClose} />
        </>
    );
}

export default CustomNavbar;