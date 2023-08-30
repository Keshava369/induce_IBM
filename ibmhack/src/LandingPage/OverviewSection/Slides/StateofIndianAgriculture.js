import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/crop.jpg';
import '../Styles/ScrollMotion.css';

const FirstSlide = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true }); // triggerOnce ensures animation plays only once

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="scroll-animation" ref={ref}>
      
      <motion.div className="imageLeft" variants={imageVariants} initial="hidden" animate={controls}>
        <img src={Image} alt="Your Image" />
      </motion.div>

      <motion.div className="content" variants={containerVariants} initial="hidden" animate={controls}>
        <h2>State of Indian Agriculture</h2>
        <p>The application provides a comprehensive insight into the intricate landscape of Indian agriculture. It furnishes a wealth of information encompassing production, trade dynamics, import and export statistics, land utilization, as well as details about loans and subsidies. Additionally, the app facilitates a global perspective by drawing comparisons between India and other nations in the realm of agriculture. This enables users to gauge India's position and progress within the global agricultural sphere, fostering a thorough understanding of the sector.</p>
      </motion.div>
      
      
    </div>
  );
};

export default FirstSlide;
