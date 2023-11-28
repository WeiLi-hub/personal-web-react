import React from "react";
import { motion } from "framer-motion";

function Flip({ children }) {
  return (
    <motion.div
      className="card"
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.7 // Animation duration
        }
      }}
      viewport={{ once: false }}
    >
      {children}
    </motion.div>
  );
}

export default Flip;