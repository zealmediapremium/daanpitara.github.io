import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Fundraiser from "./components/Fundraiser";
import Faqs from "./components/Faqs";
import Blogs from "./components/Blogs";
import SignUp from "./components/SignUp";
import Testimonials from "./components/Footer/Testimonials";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />} >
          <Route index element={<Home />} />
          <Route path="/fund-form" element={<Fundraiser />} />
          <Route path="/faqs" element={<Faqs />} />
          {/* <Route path="/contact" element={<Navbar />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </Router>
  );
}


function BasicLayout() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-pd-lg">
      <Navbar />
      <Outlet />
      <Testimonials />
      {/* Remove padding for the footer */}
      <div className="-mx-4 sm:-mx-6 md:-mx-8 lg:-mx-pd-lg">
        <Footer />
      </div>
    </div>
  );
}


export default App;
