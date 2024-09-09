"use client";

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context';
import { time } from 'console';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.75,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial= {{ opacity: 0, y: 100 }}
    animate= {{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
    
    <SectionHeading>About me</SectionHeading>
    <p className="mb-3">
    I am a passionate <span className="italic">Front-End Developer</span> with a strong dedication to creating engaging and user-friendly web interfaces. 
    With a keen eye for detail and a commitment to continuous learning, I specialize in HTML, CSS, JavaScript, and modern frameworks like React and Vue.js. 
    My goal is to build seamless, responsive, and visually appealing web applications that provide an exceptional user experience. 
    I thrive in collaborative environments and enjoy working closely with designers and back-end developers to bring creative ideas to life.
    </p>
    <p>
      When im not <span className="italic">Coding</span>, i enjoy Playing Video Games, Watching Movies, and Exploring the great outdoors.
    </p>
  </motion.section>
  )
}
