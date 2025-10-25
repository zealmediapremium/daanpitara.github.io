import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedNavLinkProps {
  submit: () => void;
  text: string;
}

export default function AnimatedNavLink({ submit, text }: AnimatedNavLinkProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={submit}
      className="w-full relative inline-flex items-center justify-center overflow-hidden h-10 px-4 font-bold text-bg-white bg-brand-blue rounded-full group  text-lg"
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
    </div>
  );
}
