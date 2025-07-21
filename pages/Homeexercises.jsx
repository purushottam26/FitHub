import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import abspic from "/assets/abs_images/absimage.avif";
import upperbodypic from "/assets/upperbodypic.webp";
import lowerbodypic from "/assets/lowerbodypic.webp";

const workouts = [
  { name: '💪 Abs Workout', image: abspic, path: '/abspage' },
  { name: '🏋️ Upper Body Work', image: upperbodypic, path: '/upperbody' },
  { name: '🦵 Lower Body Work', image: lowerbodypic, path: '/lowerbody' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
  }),
};

const Homeexercises = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f172a] to-[#1D3557] min-h-screen p-10 overflow-hidden">
      {/* Page Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-extrabold text-white text-center mb-16  mt-20 tracking-tight"
      >
        🔥 Targeted Workouts
        <div className="w-32 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
      </motion.h2>

      {/* Workout Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
        {workouts.map((workout, index) => (
          <Link to={workout.path} key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                rotate: [0, 1, -1, 0],
                transition: { duration: 0.4 },
              }}
              className="w-72 h-96 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-4 shadow-xl hover:shadow-green-400/40 flex flex-col justify-between transition-all duration-300"
            >
              <img
                src={workout.image}
                alt={workout.name}
                className="w-full h-56 object-cover rounded-xl shadow-lg"
              />
              <p className="text-white text-xl font-semibold text-center mt-4 tracking-wide">
                {workout.name}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homeexercises;
