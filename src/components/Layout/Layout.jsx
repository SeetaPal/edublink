

import CustomNavbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({ children }) {
  return (
    <>
      <CustomNavbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;