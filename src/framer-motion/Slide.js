import React from "react";
import { motion } from "framer-motion";

function Slide({ children }) {
  return (
    <motion.div
      className="card"
      initial={{
        opacity: 0,
        scale: 1.1,
        // if odd index card,slide from right instead of left
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.7, // Animation duration
          delay: 0.2,
        }
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

export default Slide;