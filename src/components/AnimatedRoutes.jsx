import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const AnimatedRoutes = ({ children }) => {
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

export default AnimatedRoutes;
