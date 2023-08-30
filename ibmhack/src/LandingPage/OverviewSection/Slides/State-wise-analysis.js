import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/soil_and_crop.jpg';
import '../Styles/ScrollMotion.css';

const FourthSlide = () => {
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
      
      <motion.div className="content" variants={containerVariants} initial="hidden" animate={controls}>
        <h2>Analysis of State-wise agriculture</h2>
        <p>As India is very diversified in the field of agriculture, it is hard to analyse the state of Indian agriculture at a time. Agrolytics helps in analysing the ariculture statics state-wise which helps in understanding the agriculture in India at the deeeper level. This feature of the application covers the major producing crops of each state, cost of production of different crops etc., which gives the clear understanding on the agricultural aspects of all the states in India.</p>
      </motion.div>
      <motion.div className="image" variants={imageVariants} initial="hidden" animate={controls}>
        <img src={Image} alt="Your Image" />
      </motion.div>
      
    </div>
  );
};

export default FourthSlide;
