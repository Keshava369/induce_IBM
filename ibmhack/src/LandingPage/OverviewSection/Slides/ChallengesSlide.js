import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/rice.jpg';
import '../Styles/ScrollMotion.css';

const FifthSlide = () => {
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
        <h2>Challenges</h2>
        <p>This application highlights some of the main challenges facing the Indian agricultural sector, 
          including post-harvest losses, water scarcity and irrigation, climate change, land degradation, and timely access to information for farmers. A user can find relevant information about the current remedies by viewing all 
          of the initiatives and schemes the Indian government has implemented to solve these concerns.</p>
      </motion.div>
      
      
    </div>
  );
};

export default FifthSlide;
