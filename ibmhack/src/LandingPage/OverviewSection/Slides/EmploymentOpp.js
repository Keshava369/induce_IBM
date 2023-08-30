import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/farmer_fertilizer.jpg';
import '../Styles/ScrollMotion.css';

const EightSlide = () => {
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
        <h2>Employment and business opportunities</h2>
        <p>The agriculture sector in India has substantial potential for employment creation. With over 45% of the workforce engaged in farming, livestock, and related industries, it serves as a primary livelihood source. The sector's diverse activities, including agribusiness, processing, and supply chain roles, offer opportunities for various skill levels. Seasonal demands, technological modernization, and entrepreneurial ventures further contribute to its employment potential. This application provides a comprehensive view of career in opportunities in agriculture and allied sectors.</p>

      </motion.div>
      <motion.div className="image" variants={imageVariants} initial="hidden" animate={controls}>
        <img src={Image} alt="Your Image" />
      </motion.div>
      
    </div>
  );
};

export default EightSlide;
