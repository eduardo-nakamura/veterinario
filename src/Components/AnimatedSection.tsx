import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}   // Inicialmente invisível
      animate={isInView ? { opacity: 1 } : {}}    // Fica visível
      exit={{ opacity: 0 }}       // Quando sair, desaparece
      transition={{ duration: 1 }} // Duração do efeito
    //   initial={{ opacity: 0}}
    //   animate={isInView ? { opacity: 1, x: ["-100vw", "0vw"] } : {}}
    //   transition={{ 
    //     duration: 0.3,
    //     type: "spring", 
    //     stiffness: 100, 
    //     damping: 10,    
    //     mass: 1 
    //    }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
