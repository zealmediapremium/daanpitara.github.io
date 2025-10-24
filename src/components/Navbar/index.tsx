import { Link } from "react-router-dom";
import HighlightButton from "@/assets/Buttons/highlightButton";

import Logo from "@/assets/daanpitara.jpg";

export default function Navbar() {
  return (
    <nav className="bg-white py-3 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-lg font-bold ">
        <Link to="/">
        <img
          src={Logo}
          alt="DaanPitara Logo"
          className="h-8 inline-block mr-2"
        />
        DAANPITARA
        </Link>
      </div>

      {/* Middle: Routes */}
      <div className="hidden md:flex space-x-8 text-txt-black font-bold  ">
        <Link to="/">Home</Link>
        <Link to="/fund-form">Fundraiser form</Link>
        <Link to="/faqs">FAQ's</Link>
        <Link to="/blogs">Blogs</Link>
      </div>

      {/* Right: Sign Up */}
      <div className="hidden  md:flex">
      <HighlightButton to="/signup" text="Sign Up" />
      </div>
    </nav>
  );
}
