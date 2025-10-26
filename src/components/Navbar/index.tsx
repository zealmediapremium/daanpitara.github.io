import { useState } from "react";
import { Link } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react"; 
import { motion, AnimatePresence } from "framer-motion";

import HighlightButton from "@/assets/Buttons/highlightButton";
import Logo from "@/assets/daanpitara.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Drop-down animation from top
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <nav className="bg-white py-3 px-5 flex items-center justify-between relative z-50">
      {/* Left: Logo */}
      <div className="text-lg font-bold flex items-center">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="DaanPitara Logo" className="h-8 inline-block mr-2" />
          DAANPITARA
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 text-txt-black font-bold">
        <Link to="/">Home</Link>
        <Link to="/fund-form">Fundraiser Form</Link>
        <Link to="/faqs">FAQ's</Link>
        <Link to="/blogs">Blogs</Link>
      </div>

      {/* Desktop Sign Up */}
      <div className="hidden md:flex">
        <HighlightButton to="/signup" text="Sign Up" />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col p-5 md:hidden gap-4"
          >
            <Link
              to="/"
              className="py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/fund-form"
              className="py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Fundraiser Form
            </Link>
            <Link
              to="/faqs"
              className="py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              FAQ's
            </Link>
            <Link
              to="/blogs"
              className="py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <div 
            onClick={() => setIsOpen(false)}
            >
            <HighlightButton to="/signup" text="Sign Up" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
