import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusCircleIcon, MinusCircleIcon } from "@phosphor-icons/react";

interface QAItemProps {
  question: string;
  answer: string;
}

const QAItem: React.FC<QAItemProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      {/* Header Row */}
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
        <h3 className="text-lg font-medium text-txt-black">{question}</h3>
        <motion.div
          key={open ? "minus" : "plus"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {open ? (
            <MinusCircleIcon size={28} weight="bold" className="text-brand-blue" />
          ) : (
            <PlusCircleIcon size={28} weight="bold" className="text-blue-500" />
          )}
        </motion.div>
      </div>

      {/* Animated Answer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QAItem;
