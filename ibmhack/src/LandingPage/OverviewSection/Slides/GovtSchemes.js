import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/tomato_crop.jpg';
import '../Styles/ScrollMotion.css';

const SixthSlide = () => {
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
        <h2>Government initiatives and schemes</h2>
        <p>The government plays a pivotal role in shaping various sectors of a country, including agriculture. This influence is exerted through the formulation of policies, schemes, and initiatives. As a result, it becomes vital for stakeholders within these sectors to stay informed about these policies and schemes, leveraging them to their advantage. To achieve this objective, we have provided concise descriptions of ongoing schemes where necessary in the application. Additionally, users can be redirected to the official websites of the schemes to learn more about them.
</p>
      </motion.div>
      <motion.div className="image" variants={imageVariants} initial="hidden" animate={controls}>
        <img src={Image} alt="Your Image" />
      </motion.div>
      
    </div>
  );
};

export default SixthSlide;
