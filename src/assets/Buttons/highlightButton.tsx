import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedNavLinkProps {
  to: string;
  text: string;
}

export default function AnimatedNavLink({ to, text }: AnimatedNavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      className="relative inline-flex items-center justify-center overflow-hidden h-10 px-4 font-medium text-bg-white bg-brand-blue rounded-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.span
            key="default"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block text-center"
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="hover"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="block text-center"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  );
}
