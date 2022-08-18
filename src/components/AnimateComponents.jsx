import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const AnimateComponents = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      exit="exit"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default AnimateComponents;
