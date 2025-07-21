import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import abs_logo from '/assets/gym_images/abs_logo.png';
import back_logo from '/assets/gym_images/back_logo.png';
import biceps_logo from '/assets/gym_images/biceps_logo.png';
import chest_logo from '/assets/gym_images/chest_logo.png';
import legs_logo from '/assets/gym_images/legs_logo.png';
import triceps_logo from '/assets/gym_images/triceps_logo.png';
import shoulder_logo from "/assets/gym_images/shoulder_logo.png";

const gymParts = [
  { name: '🔥 ABS TRAINING', img: abs_logo, link: '/abspage' },
  { name: '🏋️ BACK STRENGTH', img: back_logo, link: '/back' },
  { name: '💪 BICEPS BUILDER', img: biceps_logo, link: '/biceps' },
  { name: '🦾 CHEST WORKOUT', img: chest_logo, link: '/chest' },
  { name: '🦵 LEG DOMINATION', img: legs_logo, link: '/legs' },
  { name: '🫲 TRICEPS SCULPT', img: triceps_logo, link: '/triceps' },
  { name: '🏹 SHOULDER POWER', img: shoulder_logo, link: '/shoulders' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const Gympage = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] min-h-screen px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl mt-20 font-extrabold text-center text-white mb-12 drop-shadow-md"
      >
        Gym Workout Zones
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-10">
        {gymParts.map((part, index) => {
          const cardContent = (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.08 }}
              className="w-56 h-64 bg-white/10 border border-white/20 backdrop-blur-lg rounded-2xl shadow-lg text-center p-5 flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-300"
            >
              <img
                src={part.img}
                alt={part.name}
                className="h-28 w-28 object-fit mb-4 rounded-full"
              />
              <p className="text-lg font-semibold text-white text-center leading-tight">
                {part.name}
              </p>
            </motion.div>
          );

          return part.link ? (
            <Link to={part.link} key={index}>
              {cardContent}
            </Link>
          ) : (
            <div key={index}>{cardContent}</div>
          );
        })}
      </div>
    </div>
  );
};

export default Gympage;
