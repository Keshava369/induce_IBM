import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/ploughing.jpg';
import '../Styles/ScrollMotion.css';

const ThirdSlide = () => {
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
        <h2>Predictions</h2>
        <p>Agrolytics provides crop yield predictions based on the type of crop, season and area production. Agrolytics also provides best crop suggestion based on the user parameters. This helps the farmers to make better descisions and helps to maximize their production to get better yield and earnings.</p>
      </motion.div>
      
    </div>
  );
};

export default ThirdSlide;
