import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/wheat.jpg';
import '../Styles/ScrollMotion.css';

const SeventhSlide = () => {
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
        <h2>Food Security</h2>
        <p>Food security is needed because the poor section of society is more insecure as compared to the person above the poverty line when the country faces national disasters or calamities like earthquakes, drought, flood, failure of crops, etc.</p>
        <p>Agrolytics helps to analyse the food security in India and give strategic measures to make food available to everyone in the country.</p>
      </motion.div>
      
      
    </div>
  );
};

export default SeventhSlide;
