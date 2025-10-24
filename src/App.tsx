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
          <Route path="*" element={<p>Not found</p>} />
        </Route>
      </Routes>
    </Router>
  );
}


function BasicLayout(){
      return <div
      className="px-pd-lg"
      >
        <Navbar />
        <Outlet />
        <Footer />
    </div>
}

export default App;
