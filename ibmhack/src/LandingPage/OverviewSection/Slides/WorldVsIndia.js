import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from '../Assets/helicopter_view.jpg';
import '../Styles/ScrollMotion.css';

const SecondSlide = () => {
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
        <h2>Position of India in the world agriculture</h2>
        <p>This application conducts a comparative analysis between India and the global agriculture sector, with the aim of gaining deeper insights into India's performance within the broader international agricultural context. The primary objective of this assessment is to provide a nuanced understanding of India's agricultural achievements and challenges, juxtaposed against worldwide trends and practices in the field. Information such as crop production, organic land area, livestock, water stress, fertilizer consumption, and more, has been presented to fulfill this objective.</p>
      </motion.div>
      <motion.div className="image" variants={imageVariants} initial="hidden" animate={controls}>
        <img src={Image} alt="Your Image" />
      </motion.div>
      
    </div>
  );
};

export default SecondSlide;
