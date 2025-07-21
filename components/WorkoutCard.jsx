import React from 'react';
import { motion } from 'framer-motion';

const WorkoutCard = ({ src, alt, width = 'w-56' }) => {
  return (
    <motion.div
      className="text-center"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={src} alt={alt} className={`${width} h-auto rounded-xl shadow-lg`} />
      <p className="mt-2 text-lg font-medium text-white">{alt}</p>
    </motion.div>
  );
};

export default WorkoutCard;
