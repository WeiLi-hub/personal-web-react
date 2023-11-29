import React from "react";
import { motion } from "framer-motion";

function Flip({ children }) {
    return (
        <motion.div
            className="card"
            whileInView={{
                animate: { rotate: 180 },
                transition: {
                    type: "spring",
                    damping: 10,
                    mass: 0.75,
                    stiffness: 100,
                }
            }
            }
            viewport={{ once: false }}
        >
            {children}
        </motion.div>
    );
}

export default Flip;