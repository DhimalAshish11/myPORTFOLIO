// Work.js

import React from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="Work-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="project-heading">PROJECTS</h1>
      <motion.div className="project-container">
        {WorkCardData.map((val, ind) => (
          <motion.div
            key={ind}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <WorkCard
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
              view={val.view}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
