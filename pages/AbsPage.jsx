import React from 'react';
import { motion } from 'framer-motion';
import absworkpic from '/assets/abs_images/abswholepic.jpg';

const AbsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1d3557] to-[#457B9D] flex flex-col items-center justify-center px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mt-18 text-white mb-8 text-center"
      >
        Abs Workout Guide
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full overflow-hidden rounded-xl shadow-lg"
      >
        <img
          src={absworkpic}
          alt="Abs Workout"
          className="w-full h-auto object-cover rounded-xl border-4 border-white"
        />
      </motion.div>
    </div>
  );
};

export default AbsPage;
